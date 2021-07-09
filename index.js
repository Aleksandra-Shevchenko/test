(()=>{"use strict";var t=document.querySelectorAll('a[href*="#"]');!function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}}();var e="slider_disable-transition",i="slider__control_hide",s="slider__item_active",r="active";function n(t,e){var s="string"==typeof t?document.querySelector(t):t;for(var r in this._$root=s,this._$wrapper=s.querySelector(".slider__wrapper"),this._$items=s.querySelector(".slider__items"),this._$itemList=s.querySelectorAll(".slider__item"),this._$controlPrev=s.querySelector('.slider__control[data-slide="prev"]'),this._$controlNext=s.querySelector('.slider__control[data-slide="next"]'),this._$indicatorList=s.querySelectorAll(".slider__indicators>li"),this._minOrder=0,this._maxOrder=0,this._$itemWithMinOrder=null,this._$itemWithMaxOrder=null,this._minTranslate=0,this._maxTranslate=0,this._direction="next",this._balancingItemsFlag=!1,this._activeItems=[],this._transform=0,this._hasSwipeState=!1,this.__swipeStartPos=0,this._transform=0,this._intervalId=null,this._config={loop:!0,autoplay:!1,interval:5e3,refresh:!0,swipe:!0},e)this._config.hasOwnProperty(r)&&(this._config[r]=e[r]);var n=this._$itemList,a=n[0].offsetWidth,o=this._$wrapper.offsetWidth,l=Math.round(o/a);this._widthItem=a,this._widthWrapper=o,this._itemsInVisibleArea=l,this._transformStep=100/l;for(var h=0,c=n.length;h<c;h++)n[h].dataset.index=h,n[h].dataset.order=h,n[h].dataset.translate=0,h<l&&this._activeItems.push(h);if(this._config.loop){var _=n.length-1,d=100*-n.length;n[_].dataset.order=-1,n[_].dataset.translate=100*-n.length,n[_].style.transform="translateX("+d+"%)",this.__refreshExtremeValues()}else this._$controlPrev&&this._$controlPrev.classList.add(i);this._setActiveClass(),this._addEventListener(),this._updateIndicators(),this._autoplay()}function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}n.prototype._addEventListener=function(){var t=this._$root,e=this._$items,i=this._config;function s(t){this._autoplay("stop");var e=0===t.type.search("touch")?t.touches[0]:t;this._swipeStartPos=e.clientX,this._hasSwipeState=!0}function r(t){if(this._hasSwipeState){var e=0===t.type.search("touch")?t.changedTouches[0]:t,i=this._swipeStartPos-e.clientX;i>50?(this._direction="next",this._move()):i<-50&&(this._direction="prev",this._move()),this._hasSwipeState=!1,this._config.loop&&this._autoplay()}}t.addEventListener("click",function(t){var e=t.target;if(this._autoplay("stop"),e.classList.contains("slider__control"))t.preventDefault(),this._direction=e.dataset.slide,this._move();else if(e.dataset.slideTo){var i=parseInt(e.dataset.slideTo);this._moveTo(i)}this._config.loop&&this._autoplay()}.bind(this)),t.addEventListener("mouseenter",function(t){this._autoplay("stop")}.bind(this)),t.addEventListener("mouseleave",function(t){this._autoplay()}.bind(this)),i.refresh&&window.addEventListener("resize",function(){window.requestAnimationFrame(this._refresh.bind(this))}.bind(this)),i.loop&&(e.addEventListener("transition-start",function(){this._balancingItemsFlag||(this._balancingItemsFlag=!0,window.requestAnimationFrame(this._balancingItems.bind(this)))}.bind(this)),e.addEventListener("transitionend",function(){this._balancingItemsFlag=!1}.bind(this))),i.swipe&&(t.addEventListener("touchstart",s.bind(this)),t.addEventListener("mousedown",s.bind(this)),document.addEventListener("touchend",r.bind(this)),document.addEventListener("mouseup",r.bind(this))),t.addEventListener("dragstart",function(t){t.preventDefault()}.bind(this)),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?this._autoplay("stop"):"visible"===document.visibilityState&&this._config.loop&&this._autoplay()}.bind(this))},n.prototype.__refreshExtremeValues=function(){var t=this._$itemList;this._minOrder=+t[0].dataset.order,this._maxOrder=this._minOrder,this._$itemByMinOrder=t[0],this._$itemByMaxOrder=t[0],this._minTranslate=+t[0].dataset.translate,this._maxTranslate=this._minTranslate;for(var e=0,i=t.length;e<i;e++){var s=t[e],r=+s.dataset.order;r<this._minOrder?(this._minOrder=r,this._$itemByMinOrder=s,this._minTranslate=+s.dataset.translate):r>this._maxOrder&&(this._maxOrder=r,this._$itemByMaxOrder=s,this._minTranslate=+s.dataset.translate)}},n.prototype._balancingItems=function(){if(this._balancingItemsFlag){var t,e=this._$wrapper.getBoundingClientRect(),i=e.width/this._itemsInVisibleArea/2,s=this._$itemList.length;if("next"===this._direction){var r=e.left,n=this._$itemByMinOrder;t=this._minTranslate,n.getBoundingClientRect().right<r-i&&(n.dataset.order=this._minOrder+s,t+=100*s,n.dataset.translate=t,n.style.transform="translateX(".concat(t,"%)"),this.__refreshExtremeValues())}else{var a=e.right,o=this._$itemByMaxOrder;t=this._maxTranslate,o.getBoundingClientRect().left>a+i&&(o.dataset.order=this._maxOrder-s,t-=100*s,o.dataset.translate=t,o.style.transform="translateX(".concat(t,"%)"),this.__refreshExtremeValues())}requestAnimationFrame(this._balancingItems.bind(this))}},n.prototype._setActiveClass=function(){for(var t=this._activeItems,e=this._$itemList,i=0,r=e.length;i<r;i++){var n=e[i],a=+n.dataset.index;t.indexOf(a)>-1?n.classList.add(s):n.classList.remove(s)}},n.prototype._updateIndicators=function(){var t=this._$indicatorList,e=this._$itemList;if(t.length)for(var i=0,n=e.length;i<n;i++)e[i].classList.contains(s)?t[i].classList.add(r):t[i].classList.remove(r)},n.prototype._move=function(){var t="next"===this._direction?-this._transformStep:this._transformStep,e=this._transform+t;if(!this._config.loop){var s=this._transformStep*(this._$itemList.length-this._itemsInVisibleArea);if((e=Math.round(10*e)/10)<-s||e>0)return;this._$controlPrev.classList.remove(i),this._$controlNext.classList.remove(i),e===-s?this._$controlNext.classList.add(i):0===e&&this._$controlPrev.classList.add(i)}var r,n,a,o=[],l=0;if("next"===this._direction)for(l=0,r=this._activeItems.length;l<r;l++)n=this._activeItems[l],(a=++n)>this._$itemList.length-1&&(a-=this._$itemList.length),o.push(a);else for(l=0,r=this._activeItems.length;l<r;l++)n=this._activeItems[l],(a=--n)<0&&(a+=this._$itemList.length),o.push(a);this._activeItems=o,this._setActiveClass(),this._updateIndicators(),this._transform=e,this._$items.style.transform="translateX("+e+"%)",this._$items.dispatchEvent(new CustomEvent("transition-start",{bubbles:!0}))},n.prototype._moveToNext=function(){this._direction="next",this._move()},n.prototype._moveToPrev=function(){this._direction="prev",this._move()},n.prototype._moveTo=function(t){var e,i,s=this._$indicatorList,n=null,a=null;for(e=0,i=s.length;e<i;e++){var o=s[e];if(o.classList.contains(r)){var l=+o.dataset.slideTo;(null===a||Math.abs(t-l)<a)&&(n=l,a=Math.abs(t-n))}}if(0!=(a=t-n))for(this._direction=a>0?"next":"prev",e=1;e<=Math.abs(a);e++)this._move()},n.prototype._autoplay=function(t){if(this._config.autoplay)return"stop"===t?(clearInterval(this._intervalId),void(this._intervalId=null)):void(null===this._intervalId&&(this._intervalId=setInterval(function(){this._direction="next",this._move()}.bind(this),this._config.interval)))},n.prototype._refresh=function(){var t=this._$itemList,s=t[0].offsetWidth,r=this._$wrapper.offsetWidth,n=Math.round(r/s);if(n!==this._itemsInVisibleArea){this._autoplay("stop"),this._$items.classList.add(e),this._$items.style.transform="translateX(0)",this._widthItem=s,this._widthWrapper=r,this._itemsInVisibleArea=n,this._transform=0,this._transformStep=100/n,this._balancingItemsFlag=!1,this._activeItems=[];for(var a=0,o=t.length;a<o;a++){var l=t[a],h=a;l.dataset.index=h,l.dataset.order=h,l.dataset.translate=0,l.style.transform="translateX(0)",h<n&&this._activeItems.push(h)}if(this._setActiveClass(),this._updateIndicators(),window.requestAnimationFrame(function(){this._$items.classList.remove(e)}.bind(this)),this._config.loop){var c=t.length-1,_=100*-t.length;t[c].dataset.order=-1,t[c].dataset.translate=100*-t.length,t[c].style.transform="translateX(".concat(_,"%)"),this.__refreshExtremeValues(),this._autoplay()}else this._$controlPrev&&this._$controlPrev.classList.add(i)}},n.prototype.next=function(){this._moveToNext()},n.prototype.prev=function(){this._moveToPrev()},n.prototype.moveTo=function(t){this._moveTo(t)},n.prototype.refresh=function(){this._refresh()};var o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitBtnSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=document.querySelector(i)}var e,i;return e=t,(i=[{key:"_showInputError",value:function(t,e){var i=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),i.textContent=e,i.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(t,e){this._hasInvalidInput(t)?(e.setAttribute("disabled",!0),e.classList.add(this._inactiveButtonClass)):(e.removeAttribute("disabled"),e.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var t=this,e=Array.from(this._formElement.querySelectorAll(this._inputSelector)),i=this._formElement.querySelector(this._submitBtnSelector);this._toggleButtonState(e,i),e.forEach((function(s){s.addEventListener("input",(function(){t._checkInputValidity(s),t._toggleButtonState(e,i)}))}))}},{key:"resetValidationState",value:function(){var t=this,e=this._formElement.querySelector(this._formSelector),i=Array.from(e.querySelectorAll(this._inputSelector)),s=e.querySelector(this._submitBtnSelector);this._toggleButtonState(i,s),i.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(e.prototype,i),t}();function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}document.addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll(".slider"),e=0,i=t.length;e<i;e++)new n(t[e],{loop:!1,autoplay:!0,interval:5e3,refresh:!0})})),new o({formSelector:".footer__form",inputSelector:".footer__input",submitButtonSelector:".footer__btn",inactiveButtonClass:"footer__btn_inactive",inputErrorClass:"footer__input-error",errorClass:"footer__input-error_active"},".footer").enableValidation();var h,c=function(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}(t))){i&&(t=i);var s=0,r=function(){};return{s:r,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){o=!0,n=t},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw n}}}}(t);try{var _=function(){var t=h.value;t.addEventListener("click",(function(e){e.preventDefault();var i=t.getAttribute("href").substring(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})}))};for(c.s();!(h=c.n()).done;)_()}catch(t){c.e(t)}finally{c.f()}})();
//# sourceMappingURL=index.js.map