jQuery((function(e){var t=parseInt(pictureSize.min),r=jQuery("#contributor-picture"),i=jQuery("#contributor-picture-thumbnail");jQuery("#slug").attr("readonly",!0);var a=function(e,r){var i,a,o,n,s,d,u,c,l,p=e.get("width"),g=e.get("height"),m=t,h=t,y=m,v=h,w=2*t;r.set("canSkipCrop",(s=!1,d=m,u=h,c=p,l=g,!!(!0==(n=!1)&&!0===s||!0===n&&u===l||!0===s&&d===c||d===c&&u===l||c<=d))),p/g>1?m=1*(h=g>w?w:g):h=(m=p>w?w:p)/1,i=(p-m)/2,a=(g-h)/2;var b=g>t||p>t;return o={handles:!0,keys:!0,instance:!0,persistent:!0,imageWidth:p,imageHeight:g,minWidth:y>m?m:y,minHeight:v>h?h:v,x1:b?i-1:i,y1:b?a-1:a,x2:b?m+i-1:m+i,y2:b?h+a-1:h+a},o.aspectRatio=m+":"+h,o};jQuery(document).ajaxComplete((function(e,t,a){a.data.indexOf("action=add-tag")>=0&&(window.tinyMCE.activeEditor.setContent(""),i.attr("src","").hide(),r.val(""))})),jQuery(document).ajaxSend((function(e,t,r){if(r.data.indexOf("action=add-tag")>=0){window.tinyMCE.triggerSave();var i=new URLSearchParams(r.data);i.set("contributor_description",window.tinyMCE.activeEditor.getContent()),r.data=i.toString()}})),jQuery(".term-description-wrap").remove(),jQuery("#contributor-media-picture").hide(),jQuery("#wpbody-content > div.wrap.nosubsub > form").css("margin",0),jQuery("#btn-media").on("click",(function(e){e.preventDefault(),jQuery("#plupload-browse-button").click()})),jQuery("#plupload-browse-button").on("click",(function(e){var o=wp.media.controller.CustomizeImageCropper.extend({doCrop:function(e){var r=e.get("cropDetails"),i=parseInt(t);return r.dst_width=i,r.dst_height=i,wp.ajax.post("crop-image",{nonce:e.get("nonces").edit,id:e.get("id"),cropDetails:r})}}),n=wp.media({button:{text:"Done",close:!1},states:[new wp.media.controller.Library({title:"Select a picture",library:wp.media.query({type:"image"}),multiple:!1,date:!1,priority:20,suggestedWidth:t,suggestedHeight:t}),new o({imgSelectOptions:a})]});e.preventDefault(),n.open(),n.on("cropped",(function(e){r.val(e.url),i.attr("src",e.url).show()})),n.on("insert",(function(){var e=n.state().get("selection").first().toJSON();r.val(e.url),i.attr("src",e.url).show()})),n.on("select",(function(){var e=n.state().get("selection").first().toJSON();if(e.width<t||e.height<t){var a='<div class="media-uploader-status errors"><div class="upload-errors"><div class="upload-error">\n<span class="upload-error-filename">Your image is too small.</span><span class="upload-error-message">The image must be '+t+" by "+t+" pixels. Your image is "+e.width+" by "+e.height+" pixels.</span></div></div></div>";jQuery(".media-sidebar").html(a)}else e.width!==t||e.height!==t?n.setState("cropper"):(r.val(e.url),i.attr("src",e.url).show(),n.close())}))}))}));