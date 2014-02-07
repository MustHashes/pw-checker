pw-checker
==========

Simple implementation of an algorithm to check the entropy of a supplied password.


Goals:

- Calculate score using zxcvbn (this is awesome)
- Prompt user for game parameters
- Animate canvas with black hats, social media icons (transparent canvas & divs vs. all in canvas?)

Gameplay:
- The user can choose 1 of 3 difficulties.  Easy (guard 5 sites with 5 passwords), medium (5 sites, 3 passwords), hard (5 sites, 1 password >:p)
- The goal is to survive 5 rounds of attackers (correllating to the 5 levels of security in zxcvbn which correllate to time it would take to crack the password).  Only the strongest passwords survive, but even this isn't a guarantee of win because if they use a strong password to guard an insecure site they lose :p
- Afterwards, we display how long each password would survive an actual attack according to its zxcvbn crack time value.
- We don't explicitly tell the user how their passwords "scored", but we will color the barriers according to relative strength.
- This should not be that hard to implement.  Once we get this down, we can implement "active mode" (e.g. user gets to supply input mid-game to defend themselves).


References:
-----------

[Dropbox's password strength estimator](https://tech.dropbox.com/2012/04/zxcvbn-realistic-password-strength-estimation/)

[zxcvbn on github](https://github.com/lowe/zxcvbn)

[John the ripper -- also available on homebrew](http://www.openwall.com/john/)

[NIST Guidelines for estimating entropy in passwords *Appendix A*](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf)
