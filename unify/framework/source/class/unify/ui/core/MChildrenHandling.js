/* ***********************************************************************************************

    Unify Project

    Homepage: unify-project.org
    License: MIT + Apache (V2)
    Copyright: 2012, Sebastian Fastner, Mainz, Germany, http://unify-training.com

*********************************************************************************************** */

core.Class("unify.ui.core.MChildrenHandling", {
  members: {
    // TODO !!
    add : function() {
      this._add.apply(this, arguments);
    },
    
    indexOf : function() {
      return this._indexOf.apply(this, arguments);
    },
    
    setStyle : function() {
      this._setStyle.apply(this, arguments);
    },
    
    getStyle : function() {
      return this._getStyle.apply(this, arguments);
    },
    
    getChildren : function() {
      return this._getChildren.apply(this, arguments);
    },
    
    setLayout : function() {
      this._setLayout.apply(this, arguments);
    },
    
    removeAll : function() {
      this._removeAll.apply(this, arguments);
    },
    
    getLayout : function() {
      return this._getLayout();
    }
  }
});