const {db} = require('./dbConnect');
const NotificationService = {};

NotificationService.create = (user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id) => {
    const sql = `
    INSERT INTO notifications (user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id) VALUES
    ($[user_action_id], $[notification_type], $[follower_action_id], $[like_action_id], $[comment_action_id]);`;

    return db.one(sql, { user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id });
};

NotficationService.read = (id) => {
    const sql = `
    SELECT
        notifications.*
    FROM notifications
    WHERE
        notifications.id = $[id]
    `;

    return db.one(sql, { id });
};

NotficationService.update = (user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id) => {
    const updated_at = Date.now();
    const sql = `
    UPDATE notifications
    SET
        updated_at = $[updated_at],
        user_action_id = $[user_action_id],
        notification_type = $[notification_type],
        follower_action_id = $[follower_action_id],
        like_action_id = $[like_action_id],
        comment_action_id = $[comment_action_id]
    WHERE
        id=$[id]
    `;

    return db.none(sql, { id, updated_at, user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id });
};

NotficationService.delete = (id) => {
    const sql = `
    DELETE FROM notifications WHERE id=$[id]
    `;

    return db.none(sql, { id });
};

module.exports = NotficationService;