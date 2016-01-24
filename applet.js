const Applet = imports.ui.applet;
const Util = imports.misc.util;

function ForceQuitApplet(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

ForceQuitApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(metadata, orientation, panel_height, instance_id) {

        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);
        
        this.set_applet_icon_symbolic_path(metadata.path + "/kill.png")

        this.set_applet_tooltip(_("Click here to kill a window"));        
    },

    on_applet_clicked: function() {
        Util.spawn(["xkill"]);
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new ForceQuitApplet(metadata, orientation, panel_height, instance_id);
}
