const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/conditionalres', function (req, res) {
  var analyseChoice = req.session.data['analyseChoice']
  var referOutcome = req.session.data['referoutcome']

  if (analyseChoice === 'Refer') {
    if (analyseChoice === 'Refer' && referOutcome === 'branded') {
      res.redirect('branded')
    } else if (analyseChoice === 'Refer' && referOutcome === 'unbranded') {
      res.redirect('unbranded')
    }
  } else if (analyseChoice === 'image') {
    res.redirect('image')
  } else if (analyseChoice === 'home') {
    res.redirect('home')
  }
})

module.exports = router
