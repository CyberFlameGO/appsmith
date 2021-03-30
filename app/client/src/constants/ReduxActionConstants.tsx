import { WidgetCardProps, WidgetProps } from "widgets/BaseWidget";
import { PageAction } from "constants/ActionConstants";
import { Org } from "./orgConstants";
import { ERROR_CODES } from "constants/ApiConstants";
import { AppLayoutConfig } from "reducers/entityReducers/pageListReducer";

export const ReduxActionTypes: { [key: string]: string } = {
  HANDLE_PATH_UPDATED: "HANDLE_PATH_UPDATED",
  RESET_EDITOR_REQUEST: "RESET_EDITOR_REQUEST",
  RESET_EDITOR_SUCCESS: "RESET_EDITOR_SUCCESS",
  INITIALIZE_EDITOR: "INITIALIZE_EDITOR",
  INITIALIZE_EDITOR_SUCCESS: "INITIALIZE_EDITOR_SUCCESS",
  REPORT_ERROR: "REPORT_ERROR",
  FLUSH_ERRORS: "FLUSH_ERRORS",
  FLUSH_AND_REDIRECT: "FLUSH_AND_REDIRECT",
  SAFE_CRASH_APPSMITH: "SAFE_CRASH_APPSMITH",
  SAFE_CRASH_APPSMITH_REQUEST: "SAFE_CRASH_APPSMITH_REQUEST",
  INIT_CANVAS_LAYOUT: "INIT_CANVAS_LAYOUT",
  FETCH_CANVAS: "FETCH_CANVAS",
  CLEAR_CANVAS: "CLEAR_CANVAS",
  FETCH_PAGE_INIT: "FETCH_PAGE_INIT",
  FETCH_PAGE_SUCCESS: "FETCH_PAGE_SUCCESS",
  DROP_WIDGET_CANVAS: "DROP_WIDGET_CANVAS",
  REMOVE_WIDGET_CANVAS: "REMOVE_WIDGET_CANVAS",
  LOAD_WIDGET_PANE: "LOAD_WIDGET_PANE",
  ZOOM_IN_CANVAS: "ZOOM_IN_CANVAS",
  ZOOM_OUT_CANVAS: "ZOOM_OUT_CANVAS",
  UNDO_CANVAS_ACTION: "UNDO_CANVAS_ACTION",
  REDO_CANVAS_ACTION: "REDO_CANVAS_ACTION",
  LOAD_WIDGET_CONFIG: "LOAD_WIDGET_CONFIG",
  LOAD_PROPERTY_CONFIG: "LOAD_PROPERTY_CONFIG",
  UPDATE_APPLICATION: "UPDATE_APPLICATION",
  UPDATE_APP_LAYOUT: "UPDATE_APP_LAYOUT",
  UPDATE_APPLICATION_SUCCESS: "UPDATE_APPLICATION_SUCCESS",
  PUBLISH: "PUBLISH",
  DEBUGGER_LOG: "DEBUGGER_LOG",
  DEBUGGER_LOG_INIT: "DEBUGGER_LOG_INIT",
  CLEAR_DEBUGGER_LOGS: "CLEAR_DEBUGGER_LOGS",
  DEBUGGER_RESET_ERROR_COUNT: "DEBUGGER_RESET_ERROR_COUNT",
  SET_THEME: "SET_THEME",
  FETCH_WIDGET_CARDS: "FETCH_WIDGET_CARDS",
  FETCH_WIDGET_CARDS_SUCCESS: "FETCH_WIDGET_CARDS_SUCCESS",
  ADD_PAGE_WIDGET: "ADD_PAGE_WIDGET",
  REMOVE_PAGE_WIDGET: "REMOVE_PAGE_WIDGET",
  LOAD_API_RESPONSE: "LOAD_API_RESPONSE",
  LOAD_QUERY_RESPONSE: "LOAD_QUERY_RESPONSE",
  RUN_ACTION_INIT: "RUN_ACTION_INIT",
  RUN_ACTION_REQUEST: "RUN_ACTION_REQUEST",
  RUN_ACTION_SUCCESS: "RUN_ACTION_SUCCESS",
  INIT_API_PANE: "INIT_API_PANE",
  API_PANE_CHANGE_API: "API_PANE_CHANGE_API",
  EXECUTE_ACTION: "EXECUTE_ACTION",
  EXECUTE_ACTION_SUCCESS: "EXECUTE_ACTION_SUCCESS",
  LOAD_CANVAS_ACTIONS: "LOAD_CANVAS_ACTIONS",
  SAVE_PAGE_INIT: "SAVE_PAGE_INIT",
  SAVE_PAGE_SUCCESS: "SAVE_PAGE_SUCCESS",
  UPDATE_LAYOUT: "UPDATE_LAYOUT",
  WIDGET_ADD_CHILD: "WIDGET_ADD_CHILD",
  WIDGET_CHILD_ADDED: "WIDGET_CHILD_ADDED",
  WIDGET_REMOVE_CHILD: "WIDGET_REMOVE_CHILD",
  WIDGET_MOVE: "WIDGET_MOVE",
  WIDGET_RESIZE: "WIDGET_RESIZE",
  WIDGET_DELETE: "WIDGET_DELETE",
  SHOW_PROPERTY_PANE: "SHOW_PROPERTY_PANE",
  UPDATE_CANVAS_LAYOUT: "UPDATE_CANVAS_LAYOUT",
  UPDATE_WIDGET_PROPERTY_REQUEST: "UPDATE_WIDGET_PROPERTY_REQUEST",
  UPDATE_WIDGET_PROPERTY: "UPDATE_WIDGET_PROPERTY",
  UPDATE_WIDGET_DYNAMIC_PROPERTY: "UPDATE_WIDGET_DYNAMIC_PROPERTY",
  BATCH_UPDATE_WIDGET_PROPERTY: "BATCH_UPDATE_WIDGET_PROPERTY",
  DELETE_WIDGET_PROPERTY: "DELETE_WIDGET_PROPERTY",
  FETCH_PROPERTY_PANE_CONFIGS_INIT: "FETCH_PROPERTY_PANE_CONFIGS_INIT",
  FETCH_PROPERTY_PANE_CONFIGS_SUCCESS: "FETCH_PROPERTY_PANE_CONFIGS_SUCCESS",
  FETCH_CONFIGS_INIT: "FETCH_CONFIGS_INIT",
  ADD_WIDGET_REF: "ADD_WIDGET_REF",
  CREATE_ACTION_INIT: "CREATE_ACTION_INIT",
  CREATE_ACTION_SUCCESS: "CREATE_ACTION_SUCCESS",
  FETCH_ACTIONS_INIT: "FETCH_ACTIONS_INIT",
  FETCH_ACTIONS_SUCCESS: "FETCH_ACTIONS_SUCCESS",
  UPDATE_ACTION_INIT: "UPDATE_ACTION_INIT",
  UPDATE_ACTION_SUCCESS: "UPDATE_ACTION_SUCCESS",
  DELETE_ACTION_INIT: "DELETE_ACTION_INIT",
  SET_DATASOURCE_EDITOR_MODE: "SET_DATASOURCE_EDITOR_MODE",
  DELETE_ACTION_SUCCESS: "DELETE_ACTION_SUCCESS",
  SHOW_RUN_ACTION_CONFIRM_MODAL: "SHOW_RUN_ACTION_CONFIRM_MODAL",
  CANCEL_RUN_ACTION_CONFIRM_MODAL: "CANCEL_RUN_ACTION_CONFIRM_MODAL",
  ACCEPT_RUN_ACTION_CONFIRM_MODAL: "ACCEPT_RUN_ACTION_CONFIRM_MODAL",
  CREATE_QUERY_INIT: "CREATE_QUERY_INIT",
  CREATE_ONBOARDING_DBQUERY_SUCCESS: "CREATE_ONBOARDING_DBQUERY_SUCCESS",
  END_ONBOARDING: "END_ONBOARDING",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_ONBOARDING_SUBSTEP: "SET_ONBOARDING_SUBSTEP",
  SET_ONBOARDING_STATE: "SET_ONBOARDING_STATE",
  NEXT_ONBOARDING_STEP: "NEXT_ONBOARDING_STEP",
  SHOW_ONBOARDING_HELPER: "SHOW_ONBOARDING_HELPER",
  ONBOARDING_RETURN_HOME: "ONBOARDING_RETURN_HOME",
  SET_HELPER_CONFIG: "SET_HELPER_CONFIG",
  INCREMENT_STEP: "INCREMENT_STEP",
  SHOW_ONBOARDING_LOADER: "SHOW_ONBOARDING_LOADER",
  SHOW_END_ONBOARDING_HELPER: "SHOW_END_ONBOARDING_HELPER",
  ONBOARDING_CREATE_QUERY: "ONBOARDING_CREATE_QUERY",
  ONBOARDING_RUN_QUERY: "ONBOARDING_RUN_QUERY",
  ONBOARDING_ADD_TABLE_WIDGET: "ONBOARDING_ADD_TABLE_WIDGET",
  ONBOARDING_ADD_INPUT_WIDGET: "ONBOARDING_ADD_INPUT_WIDGET",
  ONBOARDING_ADD_ONSUBMIT_BINDING: "ONBOARDING_ADD_ONSUBMIT_BINDING",
  ONBOARDING_ADD_TABLEDATA_BINDING: "ONBOARDING_ADD_TABLEDATA_BINDING",
  ONBOARDING_DEPLOY: "ONBOARDING_DEPLOY",
  ONBOARDING_CREATE_APPLICATION: "ONBOARDING_CREATE_APPLICATION",
  FETCH_DATASOURCES_INIT: "FETCH_DATASOURCES_INIT",
  FETCH_DATASOURCES_SUCCESS: "FETCH_DATASOURCES_SUCCESS",
  SAVE_DATASOURCE_NAME: "SAVE_DATASOURCE_NAME",
  SAVE_DATASOURCE_NAME_SUCCESS: "SAVE_DATASOURCE_NAME_SUCCESS",
  CREATE_DATASOURCE_INIT: "CREATE_DATASOURCE_INIT",
  CREATE_DATASOURCE_SUCCESS: "CREATE_DATASOURCE_SUCCESS",
  CREATE_DATASOURCE_FROM_FORM_INIT: "CREATE_DATASOURCE_FROM_FORM_INIT",
  UPDATE_DATASOURCE_INIT: "UPDATE_DATASOURCE_INIT",
  UPDATE_DATASOURCE_SUCCESS: "UPDATE_DATASOURCE_SUCCESS",
  CHANGE_DATASOURCE: "CHANGE_DATASOURCE",
  FETCH_DATASOURCE_STRUCTURE_INIT: "FETCH_DATASOURCE_STRUCTURE_INIT",
  FETCH_DATASOURCE_STRUCTURE_SUCCESS: "FETCH_DATASOURCE_STRUCTURE_SUCCESS",
  REFRESH_DATASOURCE_STRUCTURE_INIT: "REFRESH_DATASOURCE_STRUCTURE_INIT",
  REFRESH_DATASOURCE_STRUCTURE_SUCCESS: "REFRESH_DATASOURCE_STRUCTURE_SUCCESS",
  EXPAND_DATASOURCE_ENTITY: "EXPAND_DATASOURCE_ENTITY",
  SELECT_PLUGIN: "SELECT_PLUGIN",
  TEST_DATASOURCE_INIT: "TEST_DATASOURCE_INIT",
  TEST_DATASOURCE_SUCCESS: "TEST_DATASOURCE_SUCCESS",
  DELETE_DATASOURCE_DRAFT: "DELETE_DATASOURCE_DRAFT",
  UPDATE_DATASOURCE_DRAFT: "UPDATE_DATASOURCE_DRAFT",
  SHOW_ONBOARDING_INDICATOR: "SHOW_ONBOARDING_INDICATOR",
  SHOW_ONBOARDING_WELCOME_HELPER: "SHOW_ONBOARDING_WELCOME_HELPER",
  CREATE_ONBOARDING_DBQUERY_INIT: "CREATE_ONBOARDING_DBQUERY_INIT",
  ADD_WIDGET_COMPLETE: "ADD_WIDGET_COMPLETE",
  LISTEN_FOR_ADD_WIDGET: "LISTEN_FOR_ADD_WIDGET",
  LISTEN_FOR_CREATE_ACTION: "LISTEN_FOR_CREATE_ACTION",
  LISTEN_FOR_WIDGET_UNSELECTION: "LISTEN_FOR_WIDGET_UNSELECTION",
  LISTEN_FOR_DEPLOY: "LISTEN_FOR_DEPLOY",
  LISTEN_FOR_TABLE_WIDGET_BINDING: "LISTEN_FOR_TABLE_WIDGET_BINDING",
  LISTEN_ADD_INPUT_WIDGET: "LISTEN_ADD_INPUT_WIDGET",
  FETCH_PUBLISHED_PAGE_INIT: "FETCH_PUBLISHED_PAGE_INIT",
  FETCH_PUBLISHED_PAGE_SUCCESS: "FETCH_PUBLISHED_PAGE_SUCCESS",
  REDIRECT_AUTHORIZATION_CODE: "REDIRECT_AUTHORIZATION_CODE",
  DELETE_DATASOURCE_INIT: "DELETE_DATASOURCE_INIT",
  DELETE_DATASOURCE_SUCCESS: "DELETE_DATASOURCE_SUCCESS",
  STORE_AS_DATASOURCE_INIT: "STORE_AS_DATASOURCE_INIT",
  STORE_AS_DATASOURCE_UPDATE: "STORE_AS_DATASOURCE_UPDATE",
  STORE_AS_DATASOURCE_COMPLETE: "STORE_AS_DATASOURCE_COMPLETE",
  PUBLISH_APPLICATION_INIT: "PUBLISH_APPLICATION_INIT",
  PUBLISH_APPLICATION_SUCCESS: "PUBLISH_APPLICATION_SUCCESS",
  CHANGE_APPVIEW_ACCESS_INIT: "CHANGE_APPVIEW_ACCESS_INIT",
  CHANGE_APPVIEW_ACCESS_SUCCESS: "CHANGE_APPVIEW_ACCESS_SUCCESS",
  CHANGE_APPVIEW_ACCESS_ERROR: "CHANGE_APPVIEW_ACCESS_ERROR",
  CREATE_PAGE_INIT: "CREATE_PAGE_INIT",
  CREATE_PAGE_SUCCESS: "CREATE_PAGE_SUCCESS",
  FETCH_PAGE_LIST_INIT: "FETCH_PAGE_LIST_INIT",
  FETCH_PAGE_LIST_SUCCESS: "FETCH_PAGE_LIST_SUCCESS",
  INITIALIZE_PAGE_VIEWER: "INITIALIZE_PAGE_VIEWER",
  INITIALIZE_PAGE_VIEWER_SUCCESS: "INITIALIZE_PAGE_VIEWER_SUCCESS",
  FETCH_APPLICATION_INIT: "FETCH_APPLICATION_INIT",
  FETCH_APPLICATION_SUCCESS: "FETCH_APPLICATION_SUCCESS",
  CREATE_APPLICATION_INIT: "CREATE_APPLICATION_INIT",
  CREATE_APPLICATION_SUCCESS: "CREATE_APPLICATION_SUCCESS",
  UPDATE_WIDGET_PROPERTY_VALIDATION: "UPDATE_WIDGET_PROPERTY_VALIDATION",
  HIDE_PROPERTY_PANE: "HIDE_PROPERTY_PANE",
  INIT_DATASOURCE_PANE: "INIT_DATASOURCE_PANE",
  INIT_QUERY_PANE: "INIT_QUERY_PANE",
  QUERY_PANE_CHANGE: "QUERY_PANE_CHANGE",
  UPDATE_ROUTES_PARAMS: "UPDATE_ROUTES_PARAMS",
  SET_EXTRA_FORMDATA: "SET_EXTRA_FORMDATA",
  PERSIST_USER_SESSION: "PERSIST_USER_SESSION",
  LOGIN_USER_INIT: "LOGIN_USER_INIT",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  CREATE_USER_INIT: "CREATE_USER_INIT",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  RESET_USER_PASSWORD_INIT: "RESET_USER_PASSWORD_INIT",
  RESET_USER_PASSWORD_SUCCESS: "RESET_USER_PASSWORD_SUCCESS",
  FETCH_PLUGINS_REQUEST: "FETCH_PLUGINS_REQUEST",
  FETCH_PLUGINS_SUCCESS: "FETCH_PLUGINS_SUCCESS",
  FETCH_PLUGIN_FORM_INIT: "FETCH_PLUGIN_FORM_INIT",
  FETCH_PLUGIN_FORM_SUCCESS: "FETCH_PLUGIN_FORM_SUCCESS",
  FETCH_DB_PLUGIN_FORMS_INIT: "FETCH_DB_PLUGIN_FORMS_INIT",
  FETCH_DB_PLUGIN_FORMS_SUCCESS: "FFETCH_DB_PLUGIN_FORMS_SUCCESS",
  INVITE_USERS_TO_ORG_INIT: "INVITE_USERS_TO_ORG_INIT",
  INVITE_USERS_TO_ORG_SUCCESS: "INVITE_USERS_TO_ORG_SUCCESS",
  FORGOT_PASSWORD_INIT: "FORGOT_PASSWORD_INIT",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  RESET_PASSWORD_VERIFY_TOKEN_SUCCESS: "RESET_PASSWORD_VERIFY_TOKEN_SUCCESS",
  RESET_PASSWORD_VERIFY_TOKEN_INIT: "RESET_PASSWORD_VERIFY_TOKEN_INIT",
  EXECUTE_PAGE_LOAD_ACTIONS: "EXECUTE_PAGE_LOAD_ACTIONS",
  SWITCH_ORGANIZATION_INIT: "SWITCH_ORGANIZATION_INIT",
  SWITCH_ORGANIZATION_SUCCESS: "SWITCH_ORGANIZATION_SUCCESS",
  FETCH_ORG_ROLES_INIT: "FETCH_ORG_ROLES_INIT",
  FETCH_ORG_ROLES_SUCCESS: "FETCH_ORG_ROLES_SUCCESS",
  FETCH_ORG_INIT: "FETCH_ORG_INIT",
  FETCH_ORG_SUCCESS: "FETCH_ORG_SUCCESS",
  FETCH_ORGS_SUCCESS: "FETCH_ORGS_SUCCES",
  FETCH_ORGS_INIT: "FETCH_ORGS_INIT",
  SAVE_ORG_INIT: "SAVE_ORG_INIT",
  SAVE_ORG_SUCCESS: "SAVE_ORG_SUCCESS",
  UPLOAD_ORG_LOGO: "UPLOAD_ORG_LOGO",
  REMOVE_ORG_LOGO: "REMOVE_ORG_LOGO",
  SAVING_ORG_INFO: "SAVING_ORG_INFO",
  SET_CURRENT_ORG: "SET_CURRENT_ORG",
  SET_CURRENT_ORG_ID: "SET_CURRENT_ORG_ID",
  FETCH_CURRENT_ORG: "FETCH_CURRENT_ORG",
  STORE_DATASOURCE_REFS: "STORE_DATASOURCE_REFS",
  UPDATE_DATASOURCE_REFS: "UPDATE_DATASOURCE_REFS",
  FETCH_USER_INIT: "FETCH_USER_INIT",
  PROP_PANE_MOVED: "PROP_PANE_MOVED",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  SET_CURRENT_USER_INIT: "SET_CURRENT_USER_INIT",
  SET_CURRENT_USER_SUCCESS: "SET_CURRENT_USER_SUCCESS",
  LOGOUT_USER_INIT: "LOGOUT_USER_INIT",
  LOGOUT_USER_SUCCESS: "LOGOUT_USER_SUCCESS",
  VERIFY_INVITE_INIT: "VERIFY_INVITE_INIT",
  VERIFY_INVITE_SUCCESS: "VERIFY_INVITE_SUCCESS",
  INVITED_USER_SIGNUP_SUCCESS: "INVITED_USER_SIGNUP_SUCCESS",
  INVITED_USER_SIGNUP_INIT: "INVITED_USER_SIGNUP_INIT",
  DISABLE_WIDGET_DRAG: "DISABLE_WIDGET_DRAG",
  SELECT_WIDGET: "SELECT_WIDGET",
  FOCUS_WIDGET: "FOCUS_WIDGET",
  SET_WIDGET_DRAGGING: "SET_WIDGET_DRAGGING",
  SET_WIDGET_RESIZING: "SET_WIDGET_RESIZING",
  ADD_TABLE_WIDGET_FROM_QUERY: "ADD_TABLE_WIDGET_FROM_QUERY",
  SEARCH_APPLICATIONS: "SEARCH_APPLICATIONS",
  UPDATE_PAGE_INIT: "UPDATE_PAGE_INIT",
  UPDATE_PAGE_SUCCESS: "UPDATE_PAGE_SUCCESS",
  MOVE_ACTION_INIT: "MOVE_ACTION_INIT",
  MOVE_ACTION_SUCCESS: "MOVE_ACTION_SUCCESS",
  COPY_ACTION_INIT: "COPY_ACTION_INIT",
  COPY_ACTION_SUCCESS: "COPY_ACTION_SUCCESS",
  DELETE_APPLICATION_INIT: "DELETE_APPLICATION_INIT",
  DELETE_APPLICATION_SUCCESS: "DELETE_APPLICATION_SUCCESS",
  DUPLICATE_APPLICATION_INIT: "DUPLICATE_APPLICATION_INIT",
  DUPLICATE_APPLICATION_SUCCESS: "DUPLICATE_APPLICATION_SUCCESS",
  DELETE_PAGE_INIT: "DELETE_PAGE_INIT",
  DELETE_PAGE_SUCCESS: "DELETE_PAGE_SUCCESS",
  CLONE_PAGE_INIT: "CLONE_PAGE_INIT",
  CLONE_PAGE_SUCCESS: "CLONE_PAGE_SUCCESS",
  SET_DEFAULT_APPLICATION_PAGE_INIT: "SET_DEFAULT_APPLICATION_PAGE_INIT",
  SET_DEFAULT_APPLICATION_PAGE_SUCCESS: "SET_DEFAULT_APPLICATION_PAGE_SUCCESS",
  CREATE_ORGANIZATION_INIT: "CREATE_ORGANIZATION_INIT",
  CREATE_ORGANIZATION_SUCCESS: "CREATE_ORGANIZATION_SUCCESS",
  ADD_USER_TO_ORG_INIT: "ADD_USER_TO_ORG_INIT",
  ADD_USER_TO_ORG_SUCCESS: "ADD_USER_TO_ORG_ERROR",
  SET_META_PROP: "SET_META_PROP",
  RESET_CHILDREN_WIDGET_META: "RESET_CHILDREN_WIDGET_META",
  RESET_WIDGET_META: "RESET_WIDGET_META",
  UPDATE_WIDGET_NAME_INIT: "UPDATE_WIDGET_NAME_INIT",
  UPDATE_WIDGET_NAME_SUCCESS: "UPDATE_WIDGET_NAME_SUCCESS",
  FETCH_ACTIONS_FOR_PAGE_INIT: "FETCH_ACTIONS_FOR_PAGE_INIT",
  FETCH_ACTIONS_FOR_PAGE_SUCCESS: "FETCH_ACTIONS_FOR_PAGE_SUCCESS",
  EXECUTE_API_ACTION_REQUEST: "EXECUTE_API_ACTION_REQUEST",
  EXECUTE_API_ACTION_SUCCESS: "EXECUTE_API_ACTION_SUCCESS",
  FETCH_IMPORTED_COLLECTIONS_INIT: "FETCH_IMPORTED_COLLECTIONS_INIT",
  FETCH_IMPORTED_COLLECTIONS_SUCCESS: "FETCH_IMPORTED_COLLECTIONS_SUCCESS",
  SEARCH_APIORPROVIDERS_INIT: "SEARCH_APIORPROVIDERS_INIT",
  SEARCH_APIORPROVIDERS_SUCCESS: "SEARCH_APIORPROVIDERS_SUCCESS",
  FETCH_PROVIDERS_INIT: "FETCH_PROVIDERS_INIT",
  FETCH_PROVIDERS_SUCCESS: "FETCH_PROVIDERS_SUCCESS",
  SUBMIT_CURL_FORM_INIT: "SUBMIT_CURL_FORM_INIT",
  SUBMIT_CURL_FORM_SUCCESS: "SUBMIT_CURL_FORM_SUCCESS",
  SET_WIDGET_DYNAMIC_PROPERTY: "SET_WIDGET_DYNAMIC_PROPERTY",
  FETCH_PROVIDER_TEMPLATES_INIT: "FETCH_PROVIDER_TEMPLATES_INIT",
  FETCH_PROVIDER_TEMPLATES_SUCCESS: "FETCH_PROVIDER_TEMPLATES_SUCCESS",
  ADD_API_TO_PAGE_INIT: "ADD_API_TO_PAGE_INIT",
  ADD_API_TO_PAGE_SUCCESS: "ADD_API_TO_PAGE_SUCCESS",
  CLEAR_PREVIOUSLY_EXECUTED_QUERY: "CLEAR_PREVIOUSLY_EXECUTED_QUERY",
  FETCH_PROVIDERS_CATEGORIES_INIT: "FETCH_PROVIDERS_CATEGORIES_INIT",
  FETCH_PROVIDERS_CATEGORIES_SUCCESS: "FETCH_PROVIDERS_CATEGORIES_SUCCESS",
  FETCH_PROVIDERS_WITH_CATEGORY_INIT: "FETCH_PROVIDERS_WITH_CATEGORY_INIT",
  FETCH_PROVIDERS_WITH_CATEGORY_SUCCESS:
    "FETCH_PROVIDERS_WITH_CATEGORY_SUCCESS",
  SHOW_MODAL: "SHOW_MODAL",
  SHOW_MODAL_BY_NAME: "SHOW_MODAL_BY_NAME",
  CLOSE_MODAL: "CLOSE_MODAL",
  CREATE_MODAL_INIT: "CREATE_MODAL_INIT",
  CREATE_MODAL_SUCCESS: "CREATE_MODAL_SUCCESS",
  UPDATE_CANVAS_SIZE: "UPDATE_CANVAS_SIZE",
  SWITCH_CURRENT_PAGE_ID: "SWITCH_CURRENT_PAGE_ID",
  CLEAR_PROVIDERS: "CLEAR_PROVIDERS",
  BATCHED_UPDATE: "BATCHED_UPDATE",
  EXECUTE_BATCH: "EXECUTE_BATCH",
  FETCH_ALL_PUBLISHED_PAGES: "FETCH_ALL_PUBLISHED_PAGES",
  CREATE_NEW_API_ACTION: "CREATE_NEW_API_ACTION",
  CREATE_NEW_QUERY_ACTION: "CREATE_NEW_QUERY_ACTION",
  SET_CURRENT_CATEGORY: "SET_CURRENT_CATEGORY",
  SET_LAST_USED_EDITOR_PAGE: "SET_LAST_USED_EDITOR_PAGE",
  SET_LAST_SELECTED_PAGE_PAGE: "SET_LAST_SELECTED_PAGE_PAGE",
  FETCH_PROVIDER_DETAILS_BY_PROVIDER_ID_INIT:
    "FETCH_PROVIDER_DETAILS_BY_PROVIDER_ID_INIT",
  FETCH_PROVIDER_DETAILS_BY_PROVIDER_ID_SUCCESS:
    "FETCH_PROVIDER_DETAILS_BY_PROVIDER_ID_SUCCESS",
  SET_PROVIDERS_LENGTH: "SET_PROVIDERS_LENGTH",
  GET_ALL_APPLICATION_INIT: "GET_ALL_APPLICATION_INIT",
  FETCH_USER_APPLICATIONS_ORGS_SUCCESS: "FETCH_USER_APPLICATIONS_ORGS_SUCCESS",
  FETCH_USER_DETAILS_SUCCESS: "FETCH_USER_DETAILS_SUCCESS",
  FETCH_ALL_USERS_SUCCESS: "FETCH_ALL_USERS_SUCCESS",
  FETCH_ALL_USERS_INIT: "FETCH_ALL_USERS_INIT",
  FETCH_ALL_ROLES_SUCCESS: "FETCH_ALL_ROLES_SUCCESS",
  FETCH_ALL_ROLES_INIT: "FETCH_ALL_ROLES_INIT",
  DELETE_ORG_USER_INIT: "DELETE_ORG_USER_INIT",
  DELETE_ORG_USER_SUCCESS: "DELETE_ORG_USER_SUCCESS",
  CHANGE_ORG_USER_ROLE_INIT: "CHANGE_ORG_USER_ROLE_INIT",
  CHANGE_ORG_USER_ROLE_SUCCESS: "CHANGE_ORG_USER_ROLE_SUCCESS",
  UPDATE_USER_DETAILS_INIT: "UPDATE_USER_DETAILS_INIT",
  UPDATE_USER_DETAILS_SUCCESS: "UPDATE_USER_DETAILS_SUCCESS",
  SET_DEFAULT_REFINEMENT: "SET_DEFAULT_REFINEMENT",
  SET_HELP_MODAL_OPEN: "SET_HELP_MODAL_OPEN",
  SAVE_ACTION_NAME_INIT: "SAVE_ACTION_NAME_INIT",
  SAVE_ACTION_NAME_SUCCESS: "SAVE_ACTION_NAME_SUCCESS",
  UPDATE_API_NAME_DRAFT: "UPDATE_API_NAME_DRAFT",
  SET_ACTION_PROPERTY: "SET_ACTION_PROPERTY",
  UPDATE_ACTION_PROPERTY: "UPDATE_ACTION_PROPERTY",
  SWITCH_DATASOURCE: "SWITCH_DATASOURCE",
  INIT_EXPLORER_ENTITY_NAME_EDIT: "INIT_EXPLORER_ENTITY_NAME_EDIT",
  FETCH_ACTIONS_VIEW_MODE_INIT: "FETCH_ACTIONS_VIEW_MODE_INIT",
  FETCH_ACTIONS_VIEW_MODE_SUCCESS: "FETCH_ACTIONS_VIEW_MODE_SUCCESS",
  END_EXPLORER_ENTITY_NAME_EDIT: "END_EXPLORER_ENTITY_NAME_EDIT",
  POPULATE_PAGEDSLS_INIT: "POPULATE_PAGEDSLS_INIT",
  POPULATE_PAGEDSLS_SUCCESS: "POPULATE_PAGEDSLS_SUCCESS",
  FETCH_PAGE_DSLS_SUCCESS: "FETCH_PAGE_DSLS_SUCCESS",
  FETCH_PAGE_DSL_SUCCESS: "FETCH_PAGE_DSL_SUCCESS",
  SET_URL_DATA: "SET_URL_DATA",
  SET_APP_MODE: "SET_APP_MODE",
  TOGGLE_PROPERTY_PANE_WIDGET_NAME_EDIT:
    "TOGGLE_PROPERTY_PANE_WIDGET_NAME_EDIT",
  UPDATE_APP_PERSISTENT_STORE: "UPDATE_APP_PERSISTENT_STORE",
  UPDATE_APP_TRANSIENT_STORE: "UPDATE_APP_TRANSIENT_STORE",
  SET_ACTION_TO_EXECUTE_ON_PAGELOAD: "SET_ACTION_TO_EXECUTE_ON_PAGELOAD",
  TOGGLE_ACTION_EXECUTE_ON_LOAD_SUCCESS:
    "TOGGLE_ACTION_EXECUTE_ON_LOAD_SUCCESS",
  TOGGLE_ACTION_EXECUTE_ON_LOAD_INIT: "TOGGLE_ACTION_EXECUTE_ON_LOAD_INIT",
  COPY_SELECTED_WIDGET_SUCCESS: "COPY_SELECTED_WIDGET_SUCCESS",
  COPY_SELECTED_WIDGET_INIT: "COPY_SELECTED_WIDGET_INIT",
  ADD_CANVAS_WIDGET: "ADD_CANVAS_WIDGET",
  PASTE_COPIED_WIDGET_INIT: "PASTE_COPIED_WIDGET_INIT",
  PASTE_COPIED_WIDGET_SUCCESS: "PASTE_COPIED_WIDGET_SUCCESS",
  UNDO_DELETE_WIDGET: "UNDO_DELETE_WIDGET",
  CUT_SELECTED_WIDGET: "CUT_SELECTED_WIDGET",
  WIDGET_ADD_CHILDREN: "WIDGET_ADD_CHILDREN",
  SET_EVALUATED_TREE: "SET_EVALUATED_TREE",
  SET_EVALUATION_INVERSE_DEPENDENCY_MAP:
    "SET_EVALUATION_INVERSE_DEPENDENCY_MAP",
  BATCH_UPDATES_SUCCESS: "BATCH_UPDATES_SUCCESS",
  UPDATE_CANVAS_STRUCTURE: "UPDATE_CANVAS_STRUCTURE",
  SET_SELECTED_WIDGET_ANCESTORY: "SET_SELECTED_WIDGET_ANCESTORY",
  START_EVALUATION: "START_EVALUATION",
  CURRENT_APPLICATION_NAME_UPDATE: "CURRENT_APPLICATION_NAME_UPDATE",
  CURRENT_APPLICATION_LAYOUT_UPDATE: "CURRENT_APPLICATION_LAYOUT_UPDATE",
  FORK_APPLICATION_INIT: "FORK_APPLICATION_INIT",
  FORK_APPLICATION_SUCCESS: "FORK_APPLICATION_SUCCESS",
  SET_WIDGET_LOADING: "SET_WIDGET_LOADING",
  SET_GLOBAL_SEARCH_QUERY: "SET_GLOBAL_SEARCH_QUERY",
  TOGGLE_SHOW_GLOBAL_SEARCH_MODAL: "TOGGLE_SHOW_GLOBAL_SEARCH_MODAL",
  FETCH_RELEASES_SUCCESS: "FETCH_RELEASES_SUCCESS",
  RESET_UNREAD_RELEASES_COUNT: "RESET_UNREAD_RELEASES_COUNT",
  SET_LOADING_ENTITIES: "SET_LOADING_ENTITIES",
  RESET_CURRENT_APPLICATION: "RESET_CURRENT_APPLICATION",
  UPDATE_RECENT_ENTITY: "UPDATE_RECENT_ENTITY",
  RESTORE_RECENT_ENTITIES_REQUEST: "RESTORE_RECENT_ENTITIES_REQUEST",
  RESTORE_RECENT_ENTITIES_SUCCESS: "RESTORE_RECENT_ENTITIES_SUCCESS",
  SET_RECENT_ENTITIES: "SET_RECENT_ENTITIES",
  RESET_RECENT_ENTITIES: "RESET_RECENT_ENTITIES",
  UPDATE_API_ACTION_BODY_CONTENT_TYPE: "UPDATE_API_ACTION_BODY_CONTENT_TYPE",
};

export type ReduxActionType = typeof ReduxActionTypes[keyof typeof ReduxActionTypes];

export const ReduxActionErrorTypes: { [key: string]: string } = {
  INITIALIZE_APPSMITH_ERROR: "INITIALIZE_APPSMITH_ERROR",
  API_ERROR: "API_ERROR",
  WIDGET_DELETE_ERROR: "WIDGET_DELETE_ERROR",
  UPDATE_APPLICATION_ERROR: "UPDATE_APPLICATION_ERROR",
  UPDATE_APP_LAYOUT_ERROR: "UPDATE_APP_LAYOUT_ERROR",
  WIDGET_MOVE_ERROR: "WIDGET_MOVE_ERROR",
  WIDGET_RESIZE_ERROR: "WIDGET_RESIZE_ERROR",
  WIDGET_REMOVE_CHILD_ERROR: "WIDGET_REMOVE_CHILD_ERROR",
  WIDGET_ADD_CHILD_ERROR: "WIDGET_ADD_CHILD_ERROR",
  FETCH_PAGE_ERROR: "FETCH_PAGE_ERROR",
  SAVE_PAGE_ERROR: "SAVE_PAGE_ERROR",
  DELETE_ORG_USER_ERROR: "DELETE_ORG_USER_ERROR",
  FETCH_WIDGET_CARDS_ERROR: "FETCH_WIDGET_CARDS_ERROR",
  WIDGET_OPERATION_ERROR: "WIDGET_OPERATION_ERROR",
  FETCH_PROPERTY_PANE_CONFIGS_ERROR: "FETCH_PROPERTY_PANE_CONFIGS_ERROR",
  FETCH_CONFIGS_ERROR: "FETCH_CONFIGS_ERROR",
  PROPERTY_PANE_ERROR: "PROPERTY_PANE_ERROR",
  FETCH_ACTIONS_ERROR: "FETCH_ACTIONS_ERROR",
  UPDATE_WIDGET_PROPERTY_ERROR: "UPDATE_WIDGET_PROPERTY_ERROR",
  CREATE_ACTION_ERROR: "CREATE_ACTION_ERROR",
  UPDATE_ACTION_ERROR: "UPDATE_ACTION_ERROR",
  DELETE_ACTION_ERROR: "DELETE_ACTION_ERROR",
  RUN_ACTION_ERROR: "RUN_ACTION_ERROR",
  EXECUTE_ACTION_ERROR: "EXECUTE_ACTION_ERROR",
  FETCH_DATASOURCES_ERROR: "FETCH_DATASOURCES_ERROR",
  SEARCH_APIORPROVIDERS_ERROR: "SEARCH_APIORPROVIDERS_ERROR",
  UPDATE_DATASOURCE_ERROR: "UPDATE_DATASOURCE_ERROR",
  SAVE_DATASOURCE_NAME_ERROR: "SAVE_DATASOURCE_NAME_ERROR",
  CREATE_DATASOURCE_ERROR: "CREATE_DATASOURCE_ERROR",
  DELETE_DATASOURCE_ERROR: "DELETE_DATASOURCE_ERROR",
  FETCH_DATASOURCE_STRUCTURE_ERROR: "FETCH_DATASOURCE_STRUCTURE_ERROR",
  REFRESH_DATASOURCE_STRUCTURE_ERROR: "REFRESH_DATASOURCE_STRUCTURE_ERROR",
  CREATE_ONBOARDING_DBQUERY_ERROR: "CREATE_ONBOARDING_DBQUERY_ERROR",
  FETCH_PUBLISHED_PAGE_ERROR: "FETCH_PUBLISHED_PAGE_ERROR",
  PUBLISH_APPLICATION_ERROR: "PUBLISH_APPLICATION_ERROR",
  FETCH_USER_DETAILS_ERROR: "FETCH_USER_DETAILS_ERROR",
  CREATE_PAGE_ERROR: "CREATE_PAGE_ERROR",
  FETCH_PAGE_LIST_ERROR: "FETCH_PAGE_LIST_ERROR",
  FETCH_APPLICATION_ERROR: "FETCH_APPLICATION_ERROR",
  CREATE_APPLICATION_ERROR: "CREATE_APPLICATION_ERROR",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR",
  CREATE_USER_ERROR: "CREATE_USER_ERROR",
  RESET_USER_PASSWORD_ERROR: "RESET_USER_PASSWORD_ERROR",
  CHANGE_ORG_USER_ROLE_ERROR: "CHANGE_ORG_USER_ROLE_ERROR",
  SAVE_JS_EXECUTION_RECORD: "SAVE_JS_EXECUTION_RECORD",
  FETCH_PLUGINS_ERROR: "FETCH_PLUGINS_ERROR",
  UPDATE_ORG_NAME_ERROR: "UPDATE_ORG_NAME_ERROR",
  SWITCH_ORGANIZATION_ERROR: "SWITCH_ORGANIZATION_ERROR",
  TEST_DATASOURCE_ERROR: "TEST_DATASOURCE_ERROR",
  FETCH_PLUGIN_FORM_ERROR: "FETCH_PLUGIN_FORM_ERROR",
  FETCH_DB_PLUGIN_FORMS_ERROR: "FETCH_DB_PLUGIN_FORMS_ERROR",
  FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR",
  RESET_PASSWORD_VERIFY_TOKEN_ERROR: "RESET_PASSWORD_VERIFY_TOKEN_ERROR",
  FETCH_ORG_ROLES_ERROR: "FETCH_ORG_ROLES_ERROR",
  INVITE_USERS_TO_ORG_ERROR: "INVITE_USERS_TO_ORG_ERROR",
  SAVE_ORG_ERROR: "SAVE_ORG_ERROR",
  FETCH_ORG_ERROR: "FETCH_ORG_ERROR",
  FETCH_ORGS_ERROR: "FETCH_ORGS_ERROR",
  FETCH_USER_ERROR: "FETCH_USER_ERROR",
  SET_CURRENT_USER_ERROR: "SET_CURRENT_USER_ERROR",
  LOGOUT_USER_ERROR: "LOGOUT_USER_ERROR",
  VERIFY_INVITE_ERROR: "VERIFY_INVITE_ERROR",
  UPDATE_PAGE_ERROR: "UPDATE_PAGE_ERROR",
  MOVE_ACTION_ERROR: "MOVE_ACTION_ERROR",
  COPY_ACTION_ERROR: "COPY_ACTION_ERROR",
  DELETE_PAGE_ERROR: "DELETE_PAGE_ERROR",
  CLONE_PAGE_ERROR: "CLONE_PAGE_ERROR",
  DELETE_APPLICATION_ERROR: "DELETE_APPLICATION_ERROR",
  DUPLICATE_APPLICATION_ERROR: "DUPLICATE_APPLICATION_ERROR",
  SET_DEFAULT_APPLICATION_PAGE_ERROR: "SET_DEFAULT_APPLICATION_PAGE_ERROR",
  CREATE_ORGANIZATION_ERROR: "CREATE_ORGANIZATION_ERROR",
  ADD_USER_TO_ORG_ERROR: "ADD_USER_TO_ORG_ERROR",
  UPDATE_WIDGET_NAME_ERROR: "UPDATE_WIDGET_NAME_ERROR",
  FETCH_ACTIONS_FOR_PAGE_ERROR: "FETCH_ACTIONS_FOR_PAGE_ERROR",
  EXECUTE_API_ACTION_ERROR: "EXECUTE_API_ACTION_ERROR",
  FETCH_IMPORTED_COLLECTIONS_ERROR: "FETCH_IMPORTED_COLLECTIONS_ERROR",
  FETCH_PROVIDERS_ERROR: "FETCH_PROVIDERS_ERROR",
  SUBMIT_CURL_FORM_ERROR: "SUBMIT_CURL_FORM_ERROR",
  FETCH_PROVIDER_TEMPLATES_ERROR: "FETCH_PROVIDER_TEMPLATES_ERROR",
  ADD_API_TO_PAGE_ERROR: "ADD_API_TO_PAGE_ERROR",
  FETCH_PROVIDERS_CATEGORIES_ERROR: "FETCH_PROVIDERS_CATEGORIES_ERROR",
  FETCH_PROVIDERS_WITH_CATEGORY_ERROR: "FETCH_PROVIDERS_WITH_CATEGORY_ERROR",
  CREATE_MODAL_ERROR: "CREATE_MODAL_ERROR",
  FETCH_PROVIDER_DETAILS_BY_PROVIDER_ID_ERROR:
    "FETCH_PROVIDER_DETAILS_BY_PROVIDER_ID_ERROR",
  SAVE_ACTION_NAME_ERROR: "SAVE_ACTION_NAME_ERROR",
  FETCH_USER_APPLICATIONS_ORGS_ERROR: "FETCH_USER_APPLICATIONS_ORGS_ERROR",
  FORK_APPLICATION_ERROR: "FORK_APPLICATION_ERROR",
  FETCH_ALL_USERS_ERROR: "FETCH_ALL_USERS_ERROR",
  FETCH_ALL_ROLES_ERROR: "FETCH_ALL_ROLES_ERROR",
  UPDATE_USER_DETAILS_ERROR: "UPDATE_USER_DETAILS_ERROR",
  FETCH_ACTIONS_VIEW_MODE_ERROR: "FETCH_ACTION_VIEW_MODE_ERROR",
  SAVE_API_NAME_ERROR: "SAVE_API_NAME_ERROR",
  POPULATE_PAGEDSLS_ERROR: "POPULATE_PAGEDSLS_ERROR",
  FETCH_PAGE_DSL_ERROR: "FETCH_PAGE_DSL_ERROR",
  TOGGLE_ACTION_EXECUTE_ON_LOAD_ERROR: "TOGGLE_ACTION_EXECUTE_ON_LOAD_ERROR",
  COPY_SELECTED_WIDGET_ERROR: "COPY_SELECTED_WIDGET_ERROR",
  PASTE_COPIED_WIDGET_ERROR: "PASTE_COPIED_WIDGET_ERROR",
  WIDGET_ADD_CHILDREN_ERROR: "WIDGET_ADD_CHILDREN_ERROR",
  FAILED_CORRECTING_BINDING_PATHS: "FAILED_CORRECTING_BINDING_PATHS",
};

export const ReduxFormActionTypes: { [key: string]: string } = {
  VALUE_CHANGE: "@@redux-form/CHANGE",
  UPDATE_FIELD_ERROR: "@@redux-form/UPDATE_SYNC_ERRORS",
  ARRAY_REMOVE: "@@redux-form/ARRAY_REMOVE",
  ARRAY_PUSH: "@@redux-form/ARRAY_PUSH",
};

export type ReduxActionErrorType = typeof ReduxActionErrorTypes[keyof typeof ReduxActionErrorTypes];

export interface ReduxAction<T> {
  type: ReduxActionType | ReduxActionErrorType;
  payload: T;
}

export type ReduxActionWithoutPayload = Pick<ReduxAction<undefined>, "type">;

export interface ReduxActionWithMeta<T, M> extends ReduxAction<T> {
  meta: M;
}

export interface ReduxActionWithCallbacks<T, S, E> extends ReduxAction<T> {
  onSuccess?: ReduxAction<S>;
  onError?: ReduxAction<E>;
}

export interface EvaluationReduxAction<T> extends ReduxAction<T> {
  postEvalActions?: ReduxAction<any>[];
}

export interface PromisePayload {
  reject: any;
  resolve: any;
}
export interface ReduxActionWithPromise<T> extends ReduxAction<T> {
  payload: T & PromisePayload;
}

export interface ReduxActionErrorPayload {
  message: string;
  source?: string;
  code?: ERROR_CODES;
}

export interface UpdateCanvasPayload {
  pageWidgetId: string;
  widgets: { [widgetId: string]: WidgetProps };
  currentLayoutId: string;
  currentPageId: string;
  currentPageName: string;
  currentApplicationId: string;
  pageActions: PageAction[][];
}

export interface ShowPropertyPanePayload {
  widgetId: string;
  callForDragOrResize: boolean;
  force: boolean;
}

export interface Page {
  pageName: string;
  pageId: string;
  isDefault: boolean;
  latest?: boolean;
  isHidden?: boolean;
}

export interface ClonePageSuccessPayload {
  pageName: string;
  pageId: string;
  layoutId: string;
  isDefault: boolean;
}

export type PageListPayload = Array<Page>;

export type ApplicationPayload = {
  id: string;
  name: string;
  color?: string;
  icon?: string;
  organizationId: string;
  defaultPageId?: string;
  isPublic?: boolean;
  userPermissions?: string[];
  appIsExample: boolean;
  forkingEnabled?: boolean;
  appLayout?: AppLayoutConfig;
};

export type OrganizationDetails = {
  organization: Org;
  applications: any[];
};

export interface LoadWidgetEditorPayload {
  widgets: WidgetProps[];
}

export interface LoadWidgetSidebarPayload {
  cards: { [id: string]: WidgetCardProps[] };
}

export type InitializeEditorPayload = {
  applicationId: string;
  pageId: string;
};
