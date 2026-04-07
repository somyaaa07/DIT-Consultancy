const User        = require('./User');
const Company     = require('./Company');
const Job         = require('./Job');
const Application = require('./Application');
const Blog     =require('./Blog');
const Enquiry     = require('./Enquiry'); 
// Relations banao
Company.belongsTo(User,    { foreignKey: 'owner_id', as: 'owner' });
User.hasMany(Company,      { foreignKey: 'owner_id' });

Job.belongsTo(Company,     { foreignKey: 'company_id', as: 'company' });
Company.hasMany(Job,        { foreignKey: 'company_id' });

Job.belongsTo(User,        { foreignKey: 'posted_by', as: 'poster' });

Application.belongsTo(Job,  { foreignKey: 'job_id', as: 'job' });
Application.belongsTo(User, { foreignKey: 'user_id', as: 'applicant' });
Job.hasMany(Application,    { foreignKey: 'job_id' });
User.hasMany(Application,   { foreignKey: 'user_id' });

module.exports = { User, Company, Job, Application , Blog , Enquiry};
