exports.popover = function(_args) {
    if(_args === undefined) _args = {};
    if(_args.title === undefined) _args.title = 'Popover';

    var win = Ti.UI.createWindow({
        width: 320,
        height: 480,
        opacity: 0
    });

    var fakeWin = Ti.UI.createView({
        width: 300,
        height: 350,
        top: 65,
        backgroundImage: '/images/popover/PopoverPortrait.png'
    });
    win.add(fakeWin);

    win.addEventListener('close', function() {
        win = null;
    });

    win.addEventListener('click', function(e) {
        //alert(e.source);
        if(e.source === win) {
            win.close();
        }
    });

    var view = Ti.UI.createView({
        width:280,
        height:300,
        bottom: 10,
        backgroundColor: 'white',
        borderRadius: 8
    });
    fakeWin.add(view);

    fakeWin.add(Ti.UI.createLabel({
        text: _args.title,
        color:"#fff",
        textAlign:"center",
        height: 'auto',
        top: 10,
        font:{fontFamily : 'Maven Pro',fontSize:18,fontWeight:"normal"}
    }));

    if(_args.view !== undefined) {
        _args.view.top = 0;
        _args.view.left = 0;
        _args.view.bottom = 0;
        _args.view.right = 0;
        _args.view.borderRadius = 8;
        _args.view.width = 280;
        _args.view.height = 300;
        view.add(_args.view);
    }

    var arrow = Ti.UI.createImageView({
        width: 40,
        height: 20,
        top: 49,
        image:'/images/popover/PopoverPortraitArrow.png'
    });
    win.add(arrow);

    if(_args.left !== undefined && arrow.right === undefined) {
        arrow.left = _args.left;
    }

    if(_args.right !== undefined && arrow.left === undefined) {
        arrow.right = _args.right;
    }

    if(arrow.right === undefined && arrow.left === undefined) {
        arrow.left = 15;
    }

    _args.view.open = function() {
        win.open();
        var a1 = Titanium.UI.createAnimation();
        a1.opacity = 1;
        a1.duration = 300;
        win.animate(a1);
    };

    _args.view.close = function() {
        win.hide();
    };

    return _args.view;
};