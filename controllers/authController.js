const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
try{
    const {name ,email ,password} =req.body
    const hashpassword = await bcrypt.hash(password ,10)
    await User.create({name ,email ,password:hashpassword})
    res.redirect('/')
}
catch(err){
    console.error(err);
    res.status(500).send('Error registering user');
}

}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials'); 
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, { httpOnly: true });
    res.redirect('/jobs'); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
