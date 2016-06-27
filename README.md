<img src="https://raw.githubusercontent.com/mimoduo/Stamp/master/global/images/logo.jpg" alt="Stamp logo of two mirrored triangles with the word Stamp sitting below" />

**Stamp* is library for automating the email template workflow using Jade and Gulp in unison.

##Features

**Gulp** as a preprocessor

_gulp-jade:_ html template engine<br>
_gulp-postcss:_ css post processor<br>
_gulp-inline-css:_ inlines styles from an external stylesheet<br>
_gulp-inline-source:_ embeds styles from an external stylesheet<br>
_gulp-html2txt:_ converts compiled html templates into txt versions

**Jade** as an HTML compiler

Jade was chosen for Stamp because it provides a level of inheritance perfect for sharing markup and characteristics between several templates.

**Postcss** as a CSS post processor

Postcss was chosen for Stamp because it can serve as a simple, yet flexible, tool that will evolve with the needs of each individual template.

##Hierarchical Structure

Stamp is structured to provide multiple levels of shared characteristics while still allowing for the author to individualize each email template.

###Global Level

* Solves various issues prevelant in email clients.
* Sets up the ability for full column table rows on small screens.
* Provides a system for showing and hiding content.
* Contains the head section of every email template.

###Template Level

* Provides a build system that can support multiple templates.
* Provides a template for all pages pertaining to that template.
* Contains styles that are more focused on design rather than solving email client quirks.
* Can override the title element from the global level.

###Pages Level

* Can override any blocks on the template level.
* Houses content for each individual page.
* Can override the title element from the template level.

##Solved Email Client Quirks

* Prevent link appearance on data-like content in apple clients.
* Prevent odd image scaling in outlook.
* Prevent images from stretching vertically.
* Prevent odd borders from showing around linked images.
* Prevent text from scaling oddly in some clients.
* Columns not being styled properly in some clients.
* Ensure that the strong element is bolded in all clients.
* Typography not properly inherited in gmail.
