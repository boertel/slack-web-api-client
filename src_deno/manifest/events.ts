// https://api.slack.com/events?filter=Events
// var events = [].slice.call(document.getElementsByClassName('apiReferenceFilterableList__listItemLink')).map(e => '"' + e.innerText + '"').join(' | '); console.log("export type AnyMafifestEvent = " + events + ";");
export type AnyMafifestEvent =
  | "app_home_opened"
  | "app_mention"
  | "app_rate_limited"
  | "app_requested"
  | "app_uninstalled"
  | "call_rejected"
  | "channel_archive"
  | "channel_created"
  | "channel_deleted"
  | "channel_history_changed"
  | "channel_id_changed"
  | "channel_left"
  | "channel_rename"
  | "channel_shared"
  | "channel_unarchive"
  | "channel_unshared"
  | "dnd_updated"
  | "dnd_updated_user"
  | "email_domain_changed"
  | "emoji_changed"
  | "file_change"
  | "file_comment_added"
  | "file_comment_deleted"
  | "file_comment_edited"
  | "file_created"
  | "file_deleted"
  | "file_public"
  | "file_shared"
  | "file_unshared"
  | "grid_migration_finished"
  | "grid_migration_started"
  | "group_archive"
  | "group_close"
  | "group_deleted"
  | "group_history_changed"
  | "group_left"
  | "group_open"
  | "group_rename"
  | "group_unarchive"
  | "im_close"
  | "im_created"
  | "im_history_changed"
  | "im_open"
  | "invite_requested"
  | "link_shared"
  | "member_joined_channel"
  | "member_left_channel"
  | "message"
  | "message.app_home"
  | "message.channels"
  | "message.groups"
  | "message.im"
  | "message.mpim"
  | "message_metadata_deleted"
  | "message_metadata_posted"
  | "message_metadata_updated"
  | "pin_added"
  | "pin_removed"
  | "reaction_added"
  | "reaction_removed"
  | "resources_added"
  | "resources_removed"
  | "scope_denied"
  | "scope_granted"
  | "shared_channel_invite_accepted"
  | "shared_channel_invite_approved"
  | "shared_channel_invite_declined"
  | "shared_channel_invite_received"
  | "star_added"
  | "star_removed"
  | "subteam_created"
  | "subteam_members_changed"
  | "subteam_self_added"
  | "subteam_self_removed"
  | "subteam_updated"
  | "team_access_granted"
  | "team_access_revoked"
  | "team_domain_change"
  | "team_join"
  | "team_rename"
  | "tokens_revoked"
  | "url_verification"
  | "user_change"
  | "user_huddle_changed"
  | "user_profile_changed"
  | "user_resource_denied"
  | "user_resource_granted"
  | "user_resource_removed"
  | "user_status_changed"
  | "workflow_deleted"
  | "workflow_published"
  | "workflow_step_deleted"
  | "workflow_step_execute"
  | "workflow_unpublished";
