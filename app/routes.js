const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/conditionalres', function (req, res) {
  var analyseChoice = req.session.data['analyseChoice']
  var brandingOutcome = req.session.data['brandingoutcome']

  if (analyseChoice === 'Branding') {
    if (analyseChoice === 'Branding' && brandingOutcome === 'branded') {
      res.redirect('branded')
    } else if (analyseChoice === 'Branding' && brandingOutcome === 'unbranded') {
      res.redirect('unbranded')
    }
  } else if (analyseChoice === 'image') {
    res.redirect('image')
  } else if (analyseChoice === 'home') {
    res.redirect('home')
  }
})

module.exports = router
