const {db} = require('./dbConnect');
const UserService = {};

UserService.create = (birthname, username, email, firebase_uid, profile_img, birthday, joining_reason) => {
    const sql = `
    INSERT INTO users (birthname, username, email, firebase_uid, profile_img, birthday, joining_reason) VALUES
    ($[birthname], $[username], $[email], $[firebase_uid], $[profile_img], $[birthday], $[joining_reason]);`;

    return db.none(sql, { birthname, username, email, firebase_uid, profile_img, birthday, joining_reason });
};

UserService.read = (id) => {
    const sql = `
    SELECT
        users.*
    FROM users
    WHERE
        users.id = $[id]
    `;

    return db.one(sql, { id });
};

UserService.update = (id, birthname, username, email, firebase_uid, profile_img, birthday) => {
    const sql = `
    UPDATE users
    SET
        birthname = $[birthname],
        username = $[username],
        email = $[email],
        firebase_uid = $[firebase_uid],
        profile_img = $[profile_img],
        birthday = $[birthday]
    WHERE
        id=$[id]
    `;

    return db.none(sql, { id, birthname, username, email, firebase_uid, profile_img, birthday });
};

UserService.delete = (id) => {
    const sql = `
    DELETE FROM users WHERE id=$[id]
    `;

    return db.none(sql, { id });
};

UserService.readAllUsers = () => {
    
    const sql = `
    SELECT 
        users.*
    FROM users
    `;
    
    return db.any(sql);
};

module.exports = UserService;