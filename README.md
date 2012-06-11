## Quick Dictionary

![画像1](https://github.com/KAZUAKI/QuickDict/blob/master/screen.png)


This dictionary app is using iOS5 built-in dictionary. (English-Japanese/English-English)
I'd been using this for myself and it's handy. So I decided to share this. 

This has not been finished project. So there are some problems.


According to Apple developer's class reference for UIReferenceLibraryViewController, it can not be used for standalone app.

[UIReferenceLibraryViewController class reference page](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIReferenceLibraryViewControllerClassRef/Reference/Reference.html )



### Modules I used

1. [benCoding.Dictionary module](https://github.com/benbahrenburg/benCoding.Dictionary "リンクのタイトル")
    * This module call iOS5 built-in dictionary. Thanks Ben!
2. [popover](https://github.com/mattapperson/TiPopover/)
    * popover effect! Thanks Matt! 


### Module I made

Also I needed to make the following module by myself. Because UIReferenceLibraryViewController detect device language and I could not show English-English dictionary. So this module overrides the language.

[TiLanguageSet](https://github.com/KAZUAKI/TiLanguageSet)


Enjoy.

kazuaki konno


