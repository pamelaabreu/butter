const {db} = require('./dbConnect');
const NotficationService = {};

NotficationService.create = (user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id) => {
    const sql = `
    INSERT INTO notfications (user_action_id, notification_type, follower_action_id, like_action_id, comment_action_id) VALUES
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

module.exports = NotficationService;