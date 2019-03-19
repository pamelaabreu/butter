const {db} = require('./dbConnect');
const TagService = {};


TagService.readAllUsers = () => {
    const sql = `
    SELECT 
        tags.*
    FROM tags
    `;
    return db.any(sql);
};

module.exports = TagService;