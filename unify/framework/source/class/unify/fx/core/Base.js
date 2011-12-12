/* ***********************************************************************************************

 Unify Project

 Homepage: unify-project.org
 License: MIT + Apache (V2)
 Copyright: 2011, Sebastian Fastner, Mainz, Germany, http://unify-training.com

 *********************************************************************************************** */

/**
 * Base single animation
 */
qx.Class.define("unify.fx.core.Base", {
  extend: qx.core.Object,
  
  events : {
    /** Start of animation */
    start : "qx.event.type.Event",
    
    /** Stop of animation */
    stop : "qx.event.type.Data"
  },
  
  properties : {
    /** Duration of animation */
    duration : {
      check : "Integer"
    },
    
    /** Easing method of animation */
    easing : {
      check : "Function",
      nullable: true
    },
    
    /** Value to animate to */
    value : {
    }
  },
  
  /**
   * @param widget {unify.ui.core.Widget} Widget that should be animated
   */
  construct : function(widget) {
    this.base(arguments);
    
    this._widget = widget;
  },
  
  members : {
    _widget : null,
    __id : null,
    
    /**
     * Start animation
     *
     * @param percent {Float?null} Start position (0.0 ... 1.0)
     */
    start : function(percent) {
      this._setup();
      
      var duration = this.getDuration();
      
      if (duration > 0) {
        var easing = this.getEasing() || function(i) { return i; };
        this.__id = unify.fx.core.Animation.getInstance().start(this._render, this._verifyRender, this.__finish, duration, easing, percent||0, this);
        this.fireEvent("start");
      } else {
        this._render(1.0, (new Date).valueOf(), true);
        this.__finish(60, -1, true);
      }
    },
    
    /**
     * Stop animation
     */
    stop : function() {
      if (this.__stop()) {
        this.fireDataEvent("stop", "break");
      }
    },
    
    /**
     * Reset animation
     *
     * @param value {var?null} Value to reset to
     */
    reset : function(value) {
      this.__stop();
      this._reset(value);
      this.fireDataEvent("stop", "reset");
    },
    
    /**
     * Get default reset value
     *
     * @return {var} Reset value
     */
    getResetValue : function() {
      return this._getResetValue();
    },
    
    /**
     * Method to setup animation
     */
    _setup : function() {
      
    },
    
    /**
     * Method to reset animation to value
     *
     * @param value {var} Reset to value
     */
    _reset : function(value) {
      
    },
    
    /**
     * Get default reset value
     *
     * @return {var} Reset value
     */
    _getResetValue : function() {
      
    },
    
    /**
     * Render step
     *
     * @param percent {Float} Percentual value of animation position (0.0 ... 1.0)
     * @param now {Integer} Timestamp render step is in
     * @param render {Boolean} Wheter this step should render changes or skip to support frame dropping on slow hardware
     */
    _render : function(percent, now, render) {
      
    },
    
    /**
     * Verify step
     *
     * @return {Boolean} Returns if the current step should be rendered
     */
    _verifyRender : function() {
      return true;
    },
    
    /**
     * Stops animation
     */
    __stop : function() {
      var id = this.__id;
      
      if (id) {
        unify.fx.core.Animation.getInstance().stop(id);
        return true;
      }
      
      return false;
    },
    
    /**
     * Finish callback
     * 
     * @param fps {Integer} Frames per seconds rendered in animation
     * @param id {Integer} ID of animation
     * @param finished {Boolean} Whether the animation is finished or canceld
     */
    __finish : function(fps, id, finished) {
      if (finished) {
        this.fireDataEvent("stop", "done");
      }
    }
  }
});