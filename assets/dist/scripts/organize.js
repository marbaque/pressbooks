!function(t){function e(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}({10:function(t,e,a){t.exports=a("EO+/")},"EO+/":function(t,e){var a={oldPart:null,newPart:null,defaultOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",connectWith:".chapters",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(t,e){a.oldPart=e.item.parents("table").attr("id")},stop:function(t,e){a.newPart=e.item.parents("table").attr("id"),a.update(e.item)}},frontMatterOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(t,e){},stop:function(t,e){a.fmupdate(e.item)}},backMatterOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(t,e){},stop:function(t,e){a.bmupdate(e.item)}},update:function(t){jQuery.ajax({beforeSend:function(){jQuery.blockUI.defaults.applyPlatformOpacityRules=!1,jQuery.blockUI({message:jQuery("#loader.chapter")})},url:ajaxurl,type:"POST",data:{action:"pb_update_chapter",new_part_order:jQuery("#"+a.newPart).sortable("serialize"),old_part_order:jQuery("#"+a.oldPart).sortable("serialize"),new_part:a.newPart.replace(/^part-([0-9]+)$/i,"$1"),old_part:a.oldPart.replace(/^part-([0-9]+)$/i,"$1"),id:jQuery(t).attr("id").replace(/^chapter-([0-9]+)$/i,"$1"),_ajax_nonce:PB_OrganizeToken.orderNonce},cache:!1,dataType:"html",error:function(t,e,a){jQuery("#message").html('<p><strong>There has been an error updating your chapter data. Usually, <a href="'+window.location.href+'">refreshing the page</a> helps.</strong></p>').addClass("error")},success:function(t){"NOCHANGE"===t&&jQuery("#message").html("<p><strong>No changes were registered.</strong></p>").addClass("error")},complete:function(){jQuery.unblockUI()}})},fmupdate:function(t){jQuery.ajax({beforeSend:function(){jQuery.blockUI.defaults.applyPlatformOpacityRules=!1,jQuery.blockUI({message:jQuery("#loader.fm")})},url:ajaxurl,type:"POST",data:{action:"pb_update_front_matter",front_matter_order:jQuery("#front-matter").sortable("serialize"),_ajax_nonce:PB_OrganizeToken.orderNonce},cache:!1,dataType:"html",error:function(t,e,a){jQuery("#message").html('<p><strong>There has been an error updating your front matter data Usually, <a href="'+window.location.href+'">refreshing the page</a> helps.</strong></p>').addClass("error")},success:function(t){"NOCHANGE"===t&&jQuery("#message").html("<p><strong>No changes were registered.</strong></p>").addClass("error")},complete:function(){jQuery.unblockUI()}})},bmupdate:function(t){jQuery.ajax({beforeSend:function(){jQuery.blockUI.defaults.applyPlatformOpacityRules=!1,jQuery.blockUI({message:jQuery("#loader.bm")})},url:ajaxurl,type:"POST",data:{action:"pb_update_back_matter",back_matter_order:jQuery("#back-matter").sortable("serialize"),_ajax_nonce:PB_OrganizeToken.orderNonce},cache:!1,dataType:"html",error:function(t,e,a){jQuery("#message").html('<p><strong>There has been an error updating your back matter data. Usually, <a href="'+window.location.href+'">refreshing the page</a> helps.</strong></p>').addClass("error")},success:function(t){"NOCHANGE"===t&&jQuery("#message").html("<p><strong>No changes were registered.</strong></p>").addClass("error")},complete:function(){jQuery.unblockUI()}})}};jQuery(document).ready(function(t){t("table.chapters").sortable(a.defaultOptions).disableSelection(),t("table#front-matter").sortable(a.frontMatterOptions).disableSelection(),t("table#back-matter").sortable(a.backMatterOptions).disableSelection(),t("input[name=blog_public]").change(function(){var e=void 0;e=1===parseInt(this.value,10)?1:0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_global_privacy_options",blog_public:e,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){0===e?(t("h4.publicize-alert > span").text(PB_OrganizeToken.private),t("label span.public").css("font-weight","normal"),t("label span.private").css("font-weight","bold"),t(".publicize-alert").removeClass("public").addClass("private")):1===e&&(t("h4.publicize-alert > span").text(PB_OrganizeToken.public),t("label span.public").css("font-weight","bold"),t("label span.private").css("font-weight","normal"),t(".publicize-alert").removeClass("private").addClass("public"))},error:function(t,e,a){}})}),t(".chapter_privacy").change(function(){var e=t(this).parent().prev(".column-status"),a=t(this).attr("id");a=a.split("_"),a=a[a.length-1],t(this).is(":checked")?post_status="private":post_status="publish",t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_privacy_options",post_id:a,post_status:post_status,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){"private"===post_status?e.text(PB_OrganizeToken.private):e.text(PB_OrganizeToken.published)},error:function(t,e,a){}})}),t(".chapter_show_title_check").change(function(){var e=t(this).attr("id");e=e.split("_"),e=e[e.length-1],t(this).is(":checked")?chapter_show_title=1:chapter_show_title=0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_show_title_options",post_id:e,chapter_show_title:chapter_show_title,type:"pb_show_title",_ajax_nonce:PB_OrganizeToken.showTitleNonce}})}),t(".chapter_export_check").change(function(){var e=t(this).attr("id");e=e.split("_"),e=e[e.length-1],t(this).is(":checked")?chapter_export=1:chapter_export=0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_export_options",post_id:e,chapter_export:chapter_export,type:"pb_export",_ajax_nonce:PB_OrganizeToken.exportNonce}})}),t(".fm_privacy").change(function(){var e=t(this).parent().prev(".column-status"),a=t(this).attr("id");a=a.split("_"),a=a[a.length-1],t(this).is(":checked")?post_status="private":post_status="publish",t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_privacy_options",post_id:a,post_status:post_status,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){"private"===post_status?e.text(PB_OrganizeToken.private):e.text(PB_OrganizeToken.published)},error:function(t,e,a){}})}),t(".fm_show_title_check").change(function(){var e=t(this).attr("id");e=e.split("_"),e=e[e.length-1],t(this).is(":checked")?chapter_show_title=1:chapter_show_title=0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_show_title_options",post_id:e,chapter_show_title:chapter_show_title,type:"pb_show_title",_ajax_nonce:PB_OrganizeToken.showTitleNonce}})}),t(".fm_export_check").change(function(){var e=t(this).attr("id");e=e.split("_"),e=e[e.length-1],t(this).is(":checked")?chapter_export=1:chapter_export=0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_export_options",post_id:e,chapter_export:chapter_export,type:"pb_export",_ajax_nonce:PB_OrganizeToken.exportNonce}})}),t(".bm_privacy").change(function(){var e=t(this).parent().prev(".column-status"),a=t(this).attr("id");a=a.split("_"),a=a[a.length-1],t(this).is(":checked")?post_status="private":post_status="publish",t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_privacy_options",post_id:a,post_status:post_status,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){"private"===post_status?e.text(PB_OrganizeToken.private):e.text(PB_OrganizeToken.published)},error:function(t,e,a){}})}),t(".bm_show_title_check").change(function(){var e=t(this).attr("id");e=e.split("_"),e=e[e.length-1],t(this).is(":checked")?chapter_show_title=1:chapter_show_title=0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_show_title_options",post_id:e,chapter_show_title:chapter_show_title,type:"pb_show_title",_ajax_nonce:PB_OrganizeToken.showTitleNonce}})}),t(".bm_export_check").change(function(){var e=t(this).attr("id");e=e.split("_"),e=e[e.length-1],t(this).is(":checked")?chapter_export=1:chapter_export=0,t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_export_options",post_id:e,chapter_export:chapter_export,type:"pb_export",_ajax_nonce:PB_OrganizeToken.exportNonce}})});var e=[];t("table thead th").click(function(){var a=t(this).index()+1,r=t(this).parents("table").index(),o=r+"_"+a;e[o]?(t(this).parents("table").find("tr td:nth-of-type("+a+")").find("input[type=checkbox]:checked").click(),e[o]=!1):(t(this).parents("table").find("tr td:nth-of-type("+a+")").find("input[type=checkbox]:not(:checked)").click(),e[o]=!0)}),t(window).on("beforeunload",function(){if(t.active>0)return"Changes you made may not be saved..."})})}});