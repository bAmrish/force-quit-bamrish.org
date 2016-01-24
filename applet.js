
const Applet    = imports.ui.applet;
const Util      = imports.misc.util;
const Settings  = imports.ui.settings;

function ForceQuitApplet(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

ForceQuitApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _preferences: {},

    _init: function(metadata, orientation, panel_height, instance_id) {

        this.metadata = metadata;
        this.instance_id = instance_id;
        this.orientation = orientation;
        this.panel_height = panel_height;

        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);
        
        this.settings = new Settings.AppletSettings(this._preferences, this.metadata.uuid, instance_id);

        this.settings.bindProperty(Settings.BindingDirection.BIDIRECTIONAL,
            "darkIcon", "darkIcon", this.on_dark_icon_changed, null);

        
        this.on_dark_icon_changed();

        //this.set_applet_icon_symbolic_path(metadata.path + "/kill.png");

        this.set_applet_tooltip(_("Click here to kill a window"));        
    },

    on_applet_clicked: function() {
        Util.spawn(["xkill"]);
    },

    on_dark_icon_changed: function(){
        
        if(this._preferences.darkIcon == true){
            this.set_applet_icon_symbolic_path(this.metadata.path + "/dark-kill.png");        
        } else {
            this.set_applet_icon_symbolic_path(this.metadata.path + "/light-kill.png");
        }
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new ForceQuitApplet(metadata, orientation, panel_height, instance_id);
}
