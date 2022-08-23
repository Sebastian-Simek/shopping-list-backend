module.exports = async (req, res, next) => {
  try { 
    if(!req.user || req.user.email !== 'admin@admin.com')
      throw new Error('You are unauthorized');
    next();
  } catch(e) {
    e.status = 403;
    next(e);
  }
};
  
