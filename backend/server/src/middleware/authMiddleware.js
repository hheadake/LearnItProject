const jwt = require('../lib/jwt');
const { SECRET } = require('../config/constants');

exports.auth = async (req, res, next) => {

    const token = req.cookies['token'];
    
    if (token) {
    try {
       const decodedToken =  await jwt.verify(token, SECRET);
      
        req.user = decodedToken;
        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;
       next();
        
    } catch (error) {
        res.clearCookie('token')
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
    
    
    } else {
        next();
    }
    
    
    }
    
// use when u need to hide information from non-users
exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
    next();
};