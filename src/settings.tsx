import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export const settings: SettingSchemaDesc[] = [
  {
    key: "primarySettings",
    title: "Primary JIRA Account Settings",
    description: "Set up your main JIRA account here.",
    type: "heading",
    default: null
  },
  {
    key: "jiraBaseURL",
    title: "JIRA Base URL",
    description: "Enter your JIRA instance's base URL (e.g., xyz.atlassian.net). Do not include 'https://' or a trailing '/'.",
    type: "string",
    default: "orgname.atlassian.net",
  },
  {
    key: "jiraUsername",
    title: "JIRA Username",
    description: "Enter your JIRA username (usually your email address).",
    type: "string",
    default: "",
  },
  {
    key: "jiraAPIToken",
    title: "JIRA API Token",
    description: "Enter your JIRA API token. You can generate one at https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",
    type: "string",
    default: "",
  },
  {
    key: "jiraAuthType",
    title: "JIRA Authentication Method",
    description: "Choose your authentication method: Basic Auth or Personal Access Tokens.",
    type: 'enum',
    enumPicker: "radio",
    enumChoices: ["Basic Auth", "PAT"],
    default: "Basic Auth"
  },
  {
    key: "jiraAPIVersion",
    title: "JIRA API Version",
    description: "Select the API version your organization uses. Change this only if you use an older on-premise version.",
    type: "enum",
    enumPicker: "select",
    enumChoices: ["3", "2"],
    default: "3",
  },
  {
    key: "enableBlockPropertiesHeading",
    title: "Display Options for JIRA Data",
    description: "Customize how JIRA issue details are shown in your notes.",
    type: "heading",
    default: null
  },
  {
    key: "issueLinkTextFormat",
    title: "Issue Format",
    description: "Issue link text customization.",
    type: "string",
    default: "%statuscategoryicon% %statuscategoryname% - %key%|%summary%"
  },
  {
    key: "issueLinkTextFormatOrgMode",
    title: "Issue Format For Org Mode",
    description: "Issue link text customization for Org Mode.",
    type: "string",
    default: "%statuscategoryicon% %statuscategoryname% - %key%|%summary%"
  },
  {
    key: "updateOnPaste",
    title: "Experimental: Update Issue when you Paste it",
    description: "Automatically update Issue when you Paste it in LogSeq.",
    type: "enum",
    enumPicker: "radio",
    enumChoices: ["Yes", "No"],
    default: "No"
  },
  {
    key: "updateInlineText",
    description: "Automatically hyperlink JIRA issue keys with their summaries.",
    type: "boolean",
    default: true,
    title: "Hyperlink JIRA Issue Keys",
  },
  {
    key: "autoRefresh",
    title: "Experimental: Auto refresh on start",
    description: "Automatically refreshes all links on start of Logseq.",
    type: "enum",
    enumPicker: "radio",
    enumChoices: ["Yes", "No"],
    default: "No"
  },
  {
    key: "enableOrgMode",
    title: "Support Org Mode",
    description: "Enable this flag if you use Org Mode instead of Markdown",
    type: "boolean",
    default: false
  },
  {
    key: "addToBlockProperties",
    title: "Add JIRA Fields as Block Properties",
    description: "Include additional JIRA fields as properties in your text blocks.",
    type: "boolean",
    default: false,
  },
  {
    key: "showSummary",
    description: "Display the issue summary.",
    type: "boolean",
    default: false,
    title: "Show Summary",
  },
  {
    key: "showAssignee",
    description: "Display the issue assignee.",
    type: "boolean",
    default: false,
    title: "Show Assignee",
  },
  {
    key: "showPriority",
    description: "Display the issue priority.",
    type: "boolean",
    default: false,
    title: "Show Priority",
  },
  {
    key: "showFixVersion",
    description: "Display the fix version.",
    type: "boolean",
    default: false,
    title: "Show Fix Version",
  },
  {
    key: "showStatus",
    description: "Display the issue status.",
    type: "boolean",
    default: false,
    title: "Show Status",
  },
  {
    key: "showReporter",
    description: "Display the issue reporter.",
    type: "boolean",
    default: false,
    title: "Show Reporter",
  },
  {
    key: "showResolution",
    description: "Display the issue resolution.",
    type: "boolean",
    default: false,
    title: "Show Resolution",
  },
  {
    key: "appendCustomTags",
    title: "Append your custom tags",
    description: "Append your custom tags.",
    type: "string",
    default: ""
  },

  // Second Account settings

  {
    key: "secondOrgHeading",
    title: "Settings for a Second JIRA Account (Optional)",
    description: "Configure this if you use a second JIRA account.",
    type: "heading",
    default: null
  },
  {
    key: "enableSecond",
    description: "Enable or disable settings for a second JIRA account. Reload the plugin or restart Logseq after changing this setting.",
    type: "boolean",
    default: false,
    title: "Enable Second JIRA Account",
  },
  {
    key: "jiraBaseURL2",
    title: "JIRA Base URL for Second Account",
    description: "Enter the base URL for your second JIRA instance (e.g., xyz.atlassian.net). Do not include 'https://' or a trailing '/'.",
    type: "string",
    default: "orgname.atlassian.net",
  },
  {
    key: "jiraUsername2",
    title: "JIRA Username for Second Account",
    description: "Enter the username for your second JIRA account (usually an email address).",
    type: "string",
    default: "",
  },
  {
    key: "jiraAPIToken2",
    title: "JIRA API Token for Second Account",
    description: "Enter the API token for your second JIRA account. You can generate one at https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",
    type: "string",
    default: "",
  },
  {
    key: "jiraAuthType2",
    title: "JIRA Authentication Method for Second Account",
    description: "Choose the authentication method for your second account: Basic Auth or Personal Access Tokens.",
    type: 'enum',
    enumPicker: "radio",
    enumChoices: ["Basic Auth", "PAT"],
    default: "Basic Auth"
  },
  {
    key: "jiraAPIVersion2",
    title: "JIRA API Version for Second Account",
    description: "Select the API version used by your second JIRA instance. Change this only if you use an older on-premise version.",
    type: "enum",
    enumPicker: "select",
    enumChoices: ["3", "2"],
    default: "3",
  },




  {
    key: "queriesJQL",
    title: "Append issues from JQL as child blocks",
    description: "Run custom JQL queries to blocks",
    type: "heading",
    default: null
  },
  {
    key: "jqlQueryTitle",
    title: "Query Title",
    description: "Title for JQL query. Leave empty to disable. The tickets will be appended as children to this block.",
    type: "string",
    default: "",
  },
  {
    key: "jqlQuery",
    title: "JQL Query",
    description: "Enter a custom JQL query to run. Defaults to open tickets assigned to me. Maximum 50 issues.",
    type: "string",
    default: "assignee = currentUser() AND statusCategory != Done and Updated >= -30d",
  },
];