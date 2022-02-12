import React from "react";
import BaseWidget, { WidgetProps, WidgetState } from "../../BaseWidget";
import { WidgetType } from "constants/WidgetConstants";
import { EventType } from "constants/AppsmithActionConstants/ActionConstants";
import SelectComponent from "../component";
import _ from "lodash";
import { DropdownOption } from "../constants";
import {
  ValidationResponse,
  ValidationTypes,
} from "constants/WidgetValidation";
import { EvaluationSubstitutionType } from "entities/DataTree/dataTreeFactory";
import { MinimumPopupRows, GRID_DENSITY_MIGRATION_V1 } from "widgets/constants";
import { AutocompleteDataType } from "utils/autocomplete/TernServer";

export function defaultOptionValueValidation(
  value: unknown,
  props: SelectWidgetProps,
  _: any,
): ValidationResponse {
  let isValid;
  let parsed;
  let message = "";

  /*
   * Function to check if the object has `label` and `value`
   */
  const hasLabelValue = (obj: any) => {
    return (
      _.isPlainObject(value) &&
      obj.hasOwnProperty("label") &&
      obj.hasOwnProperty("value") &&
      _.isString(obj.label) &&
      (_.isString(obj.value) || _.isFinite(obj.value))
    );
  };

  /*
   * When value is "{label: 'green', value: 'green'}"
   */
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch (e) {}
  }

  if (_.isString(value) || _.isFinite(value)) {
    /*
     * When value is "", "green", 444
     */
    isValid = true;

    parsed = value;
  } else if (hasLabelValue(value)) {
    /*
     * When value is {label: "green", value: "green"}
     */
    isValid = true;
    parsed = value;
  } else {
    isValid = false;
    parsed = {};
    message = `value does not evaluate to type: string | { "label": "label1", "value": "value1" }'`;
  }

  return {
    isValid,
    parsed,
    messages: [message],
  };
}

class SelectWidget extends BaseWidget<SelectWidgetProps, WidgetState> {
  static getPropertyPaneConfig() {
    return [
      {
        sectionName: "General",
        children: [
          {
            helpText:
              "Allows users to select a single option. Values must be unique",
            propertyName: "options",
            label: "Options",
            controlType: "INPUT_TEXT",
            placeholderText: '[{ "label": "label1", "value": "value1" }]',
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.ARRAY,
              params: {
                unique: ["value"],
                children: {
                  type: ValidationTypes.OBJECT,
                  params: {
                    required: true,
                    allowedKeys: [
                      {
                        name: "label",
                        type: ValidationTypes.TEXT,
                        params: {
                          default: "",
                          requiredKey: true,
                        },
                      },
                      {
                        name: "value",
                        type: ValidationTypes.TEXT,
                        params: {
                          default: "",
                          requiredKey: true,
                        },
                      },
                    ],
                  },
                },
              },
            },
            evaluationSubstitutionType:
              EvaluationSubstitutionType.SMART_SUBSTITUTE,
          },
          {
            helpText: "Selects the option with value by default",
            propertyName: "defaultOptionValue",
            label: "Default Option",
            controlType: "INPUT_TEXT",
            placeholderText: '{ "label": "label1", "value": "value1" }',
            isBindProperty: true,
            isTriggerProperty: false,
            validation: {
              type: ValidationTypes.FUNCTION,
              params: {
                fn: defaultOptionValueValidation,
                expected: {
                  type: 'value1 or { "label": "label1", "value": "value1" }',
                  example: `value1 | { "label": "label1", "value": "value1" }`,
                  autocompleteDataType: AutocompleteDataType.STRING,
                },
              },
            },
          },
          {
            helpText: "Sets a Label Text",
            propertyName: "labelText",
            label: "Label Text",
            controlType: "INPUT_TEXT",
            placeholderText: "Enter Label text",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
          {
            helpText: "Sets a Placeholder Text",
            propertyName: "placeholderText",
            label: "Placeholder",
            controlType: "INPUT_TEXT",
            placeholderText: "Enter placeholder text",
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
          {
            propertyName: "isRequired",
            label: "Required",
            helpText: "Makes input to the widget mandatory",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            helpText: "Controls the visibility of the widget",
            propertyName: "isVisible",
            label: "Visible",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            propertyName: "isDisabled",
            label: "Disabled",
            helpText: "Disables input to this widget",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            propertyName: "animateLoading",
            label: "Animate Loading",
            controlType: "SWITCH",
            helpText: "Controls the loading of the widget",
            defaultValue: true,
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            propertyName: "isFilterable",
            label: "Filterable",
            helpText: "Makes the dropdown list filterable",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
          {
            helpText: "Enables server side filtering of the data",
            propertyName: "serverSideFiltering",
            label: "Server Side Filtering",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
        ],
      },
      {
        sectionName: "Styles",
        children: [
          {
            propertyName: "labelTextColor",
            label: "Label Text Color",
            controlType: "COLOR_PICKER",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
          {
            propertyName: "labelTextSize",
            label: "Label Text Size",
            controlType: "DROP_DOWN",
            defaultValue: "PARAGRAPH",
            options: [
              {
                label: "Heading 1",
                value: "HEADING1",
                subText: "24px",
                icon: "HEADING_ONE",
              },
              {
                label: "Heading 2",
                value: "HEADING2",
                subText: "18px",
                icon: "HEADING_TWO",
              },
              {
                label: "Heading 3",
                value: "HEADING3",
                subText: "16px",
                icon: "HEADING_THREE",
              },
              {
                label: "Paragraph",
                value: "PARAGRAPH",
                subText: "14px",
                icon: "PARAGRAPH",
              },
              {
                label: "Paragraph 2",
                value: "PARAGRAPH2",
                subText: "12px",
                icon: "PARAGRAPH_TWO",
              },
            ],
            isBindProperty: false,
            isTriggerProperty: false,
          },
          {
            propertyName: "labelStyle",
            label: "Label Font Style",
            controlType: "BUTTON_TABS",
            options: [
              {
                icon: "BOLD_FONT",
                value: "BOLD",
              },
              {
                icon: "ITALICS_FONT",
                value: "ITALIC",
              },
            ],
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.TEXT },
          },
        ],
      },
      {
        sectionName: "Actions",
        children: [
          {
            helpText: "Triggers an action when a user selects an option",
            propertyName: "onOptionChange",
            label: "onOptionChange",
            controlType: "ACTION_SELECTOR",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: true,
          },
          {
            helpText: "Trigger an action on change of filterText",
            hidden: (props: SelectWidgetProps) => !props.serverSideFiltering,
            dependencies: ["serverSideFiltering"],
            propertyName: "onFilterUpdate",
            label: "onFilterUpdate",
            controlType: "ACTION_SELECTOR",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: true,
          },
        ],
      },
    ];
  }

  static getDerivedPropertiesMap() {
    return {
      isValid: `{{this.isRequired  ? !!this.selectedOptionValue || this.selectedOptionValue === 0 : true}}`,
      selectedOptionLabel: `{{_.isString(this.optionValue) || _.isFinite(this.optionValue)  ? this.optionValue : this.optionValue?.label}}`,
      selectedOptionValue: `{{_.isString(this.optionValue) || _.isFinite(this.optionValue)  ? this.optionValue : this.optionValue?.value}}`,
    };
  }

  static getDefaultPropertiesMap(): Record<string, string> {
    return {
      defaultValue: "defaultOptionValue",
      optionValue: "defaultOptionValue",
    };
  }

  static getMetaPropertiesMap(): Record<string, any> {
    return {
      defaultValue: undefined,
      optionValue: undefined,
    };
  }

  componentDidMount() {
    this.changeSelectedOption();
  }
  componentDidUpdate(prevProps: SelectWidgetProps): void {
    // removing selectedOptionValue if defaultValueChanges
    if (
      this.isStringOrNumber(prevProps.defaultOptionValue) ||
      this.isStringOrNumber(this.props.defaultOptionValue)
    ) {
      if (
        prevProps.defaultOptionValue !== this.props.defaultOptionValue ||
        prevProps.option !== this.props.option
      ) {
        this.changeSelectedOption();
      }
      return;
    }
    if (
      prevProps.defaultOptionValue?.value !==
        this.props.defaultOptionValue?.value ||
      prevProps.option !== this.props.option
    ) {
      this.changeSelectedOption();
    }
  }

  isStringOrNumber = (value: any): value is string | number =>
    _.isString(value) || _.isNumber(value);
  changeSelectedOption = () => {
    this.props.updateWidgetMetaProperty("optionValue", this.props.optionValue);
  };

  getPageView() {
    const options = _.isArray(this.props.options) ? this.props.options : [];
    const isInvalid =
      "isValid" in this.props && !this.props.isValid && !!this.props.isDirty;
    const dropDownWidth = MinimumPopupRows * this.props.parentColumnSpace;

    const selectedIndex = _.findIndex(this.props.options, {
      value: this.props.selectedOptionValue,
    });

    const { label = "", value = "" } = !_.isNil(this.props.optionValue)
      ? this.isStringOrNumber(this.props.optionValue)
        ? { label: this.props.optionValue, value: this.props.optionValue }
        : this.props.optionValue
      : {};
    const { componentHeight, componentWidth } = this.getComponentDimensions();
    return (
      <SelectComponent
        compactMode={
          !(
            (this.props.bottomRow - this.props.topRow) /
              GRID_DENSITY_MIGRATION_V1 >
            1
          )
        }
        disabled={this.props.isDisabled}
        dropDownWidth={dropDownWidth}
        filterText={this.props.filterText}
        hasError={isInvalid}
        height={componentHeight}
        isFilterable={this.props.isFilterable}
        isLoading={this.props.isLoading}
        isValid={this.props.isValid}
        label={label}
        labelStyle={this.props.labelStyle}
        labelText={this.props.labelText}
        labelTextColor={this.props.labelTextColor}
        labelTextSize={this.props.labelTextSize}
        onFilterChange={this.onFilterChange}
        onOptionSelected={this.onOptionSelected}
        options={options}
        placeholder={this.props.placeholderText}
        selectedIndex={selectedIndex > -1 ? selectedIndex : undefined}
        serverSideFiltering={this.props.serverSideFiltering}
        value={value}
        widgetId={this.props.widgetId}
        width={componentWidth}
      />
    );
  }

  onOptionSelected = (selectedOption: DropdownOption) => {
    let isChanged = true;

    if (!this.props.isDirty) {
      this.props.updateWidgetMetaProperty("isDirty", true);
    }

    // Check if the value has changed. If no option
    // selected till now, there is a change
    if (this.props.selectedOptionValue) {
      isChanged = !(this.props.selectedOptionValue === selectedOption.value);
    }
    if (isChanged) {
      this.props.updateWidgetMetaProperty("optionValue", selectedOption, {
        triggerPropertyName: "onOptionChange",
        dynamicString: this.props.onOptionChange as string,
        event: {
          type: EventType.ON_OPTION_CHANGE,
        },
      });
    }
  };

  onFilterChange = (value: string) => {
    this.props.updateWidgetMetaProperty("filterText", value);

    super.executeAction({
      triggerPropertyName: "onFilterUpdate",
      dynamicString: this.props.onFilterUpdate,
      event: {
        type: EventType.ON_FILTER_UPDATE,
      },
    });
  };

  static getWidgetType(): WidgetType {
    return "SELECT_WIDGET";
  }
}

export interface SelectWidgetProps extends WidgetProps {
  placeholderText?: string;
  label?: string;
  selectedIndex?: number;
  selectedOption: DropdownOption;
  options?: DropdownOption[];
  onOptionChange?: string;
  defaultOptionValue?: { label?: string; value?: string } | string;
  optionValue?: { label?: string; value?: string } | string;
  value?: string;
  isRequired: boolean;
  isFilterable: boolean;
  defaultValue: string;
  selectedOptionLabel: string;
  serverSideFiltering: boolean;
  onFilterUpdate: string;
  isDirty?: boolean;
}

export default SelectWidget;