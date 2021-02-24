(function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],v=0,d=[];v<l.length;v++)i=l[v],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1852:function(e,t,n){"use strict";n("34de")},"1ada":function(e,t,n){},"1c874":function(e,t,n){},"1d5c":function(e,t,n){"use strict";n("1ada")},"34de":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",[n("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"black"}}),e._l(e.appTabs,(function(t){return n("v-tab",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),n("v-spacer"),n("v-btn",{on:{click:function(t){return e.setSliceType(0)}}},[e._v("A")]),n("v-btn",{on:{click:function(t){return e.setSliceType(2)}}},[e._v("S")]),n("v-btn",{on:{click:function(t){return e.setSliceType(1)}}},[e._v("C")]),n("v-btn",{on:{click:function(t){return e.setSliceType(4)}}},[e._v("R")]),n("v-btn",{on:{click:function(t){return e.setSliceType(3)}}},[e._v("MP")])],1),n("v-main",[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("controls",{attrs:{overlays:e.overlayList}})],1),n("v-col",{attrs:{cols:"8"}},[n("glviewer",{attrs:{overlays:e.overlayList}})],1)],1)],1),n("v-footer",{attrs:{app:""}},[n("v-row",[n("v-col",{attrs:{align:"center",justify:"center"}},[n("span",{staticClass:"text-caption"},[e._v(e._s(e.coordinateString))])])],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-5",attrs:{id:"controls"}},[n("v-row",{staticClass:"my-2 mx-2 align-center"},[n("h3",[e._v("Overlay list")]),n("v-spacer"),n("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:e.onAddOverlay}},[e._v("Add overlay")])],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-expansion-panels",[n("draggable",{staticClass:"row mx-2 my-2",attrs:{handle:".drag-handle"},model:{value:e.overlays,callback:function(t){e.overlays=t},expression:"overlays"}},e._l(e.overlays,(function(t,o){return n("v-expansion-panel",{key:o},[n("v-expansion-panel-header",[n("v-row",{staticClass:"align-center",attrs:{"no-gutters":""}},[n("v-icon",{staticClass:"mx-2 drag-handle"},[e._v(" mdi-drag-horizontal-variant ")]),n("v-icon",{staticClass:"mx-2",on:{click:function(t){return t.stopPropagation(),e.toggleEye(t)}}},[e._v(" "+e._s(e.eyeIcon)+" ")]),e._v(e._s(t.name)+" ")],1)],1),n("v-expansion-panel-content",[n("v-row",[n("v-select",{attrs:{items:e.colorMaps,label:"Color map"},model:{value:t.colorMap,callback:function(n){e.$set(t,"colorMap",n)},expression:"overlay.colorMap"}})],1),n("v-row",[n("v-col",{staticClass:"px-4"},[n("p",[e._v("Intensity range")]),n("v-range-slider",{staticClass:"align-center",attrs:{max:t.intensityMax,min:t.intensityMin,"hide-details":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:t.intensityRange[0],"hide-details":"","single-line":"",type:"number"},on:{input:function(n){return e.$set(t.intensityRange,0,n)}}})]},proxy:!0},{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:t.intensityRange[1],"hide-details":"","single-line":"",type:"number"},on:{input:function(n){return e.$set(t.intensityRange,1,n)}}})]},proxy:!0}],null,!0),model:{value:t.intensityRange,callback:function(n){e.$set(t,"intensityRange",n)},expression:"overlay.intensityRange"}})],1)],1),n("v-row",[n("v-col",[n("p",[e._v("Opacity")]),n("v-slider",{attrs:{step:"1","thumb-label":"",ticks:""},model:{value:t.opacity,callback:function(n){e.$set(t,"opacity",n)},expression:"overlay.opacity"}})],1)],1)],1)],1)})),1)],1)],1)],1)},l=[],s=n("b76a"),c=n.n(s),u={props:{overlays:Array},name:"controls",components:{draggable:c.a},data:function(){return{colorSelected:"gray",colorMaps:["gray","Plasma","Viridis","Inferno"],eyeIcon:"mdi-eye",overlays_:this.overlays,draggable:!0}},methods:{toggleEye:function(){this.eyeIcon="mdi-eye"},onColorChange:function(e,t){console.log(e),console.log(t)},onAddOverlay:function(){alert("adding overlays in this demo is not implemented yet! :)")}}},v=u,d=(n("e920"),n("2877")),f=n("6544"),m=n.n(f),p=n("8336"),h=n("62ad"),g=n("cd55"),y=n("49e2"),x=n("c865"),_=n("0393"),b=n("132d"),T=n("5963"),E=n("0fd9"),S=n("b974"),P=n("ba0d"),R=n("2fa4"),w=n("8654"),A=Object(d["a"])(v,i,l,!1,null,"085cf504",null),C=A.exports;m()(A,{VBtn:p["a"],VCol:h["a"],VExpansionPanel:g["a"],VExpansionPanelContent:y["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:_["a"],VIcon:b["a"],VRangeSlider:T["a"],VRow:E["a"],VSelect:S["a"],VSlider:P["a"],VSpacer:R["a"],VTextField:w["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"viewer"}})},U=[],L=(n("fb6a"),n("b680"),n("d3b7"),n("cfc3"),n("8b09"),n("5cc6"),n("8a59"),n("84c3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("0037")),M=(n("4160"),n("ac1f"),n("466d"),n("159b"),function(e,t,n){var o=this;this.program=I(e,t,n);var a=/uniform[^;]+[ ](\w+);/g,r=/uniform[^;]+[ ](\w+);/;this.uniforms={};var i=t.match(a),l=n.match(a);for(var s in i&&i.forEach((function(e){var t=e.match(r);o.uniforms[t[1]]=-1})),l&&l.forEach((function(e){var t=e.match(r);o.uniforms[t[1]]=-1})),this.uniforms)this.uniforms[s]=e.getUniformLocation(this.program,s)});M.prototype.use=function(e){e.useProgram(this.program)};var I=function(e,t,n){var o=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(o,t),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS))return alert("Vertex shader failed to compile, see console for log"),console.log(e.getShaderInfoLog(o)),null;var a=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(a,n),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS))return alert("Fragment shader failed to compile, see console for log"),console.log(e.getShaderInfoLog(a)),null;var r=e.createProgram();return e.attachShader(r,o),e.attachShader(r,a),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(alert("Shader failed to link, see console for log"),console.log(e.getProgramInfoLog(r)),null)},F=n("20e7"),V="#version 300 es\n#line 4\nlayout(location=0) in vec3 pos;\nuniform mat4 mvpMtx;\nout vec3 vColor;\nvoid main(void) {\n\tgl_Position = mvpMtx * vec4((pos.xyz - 0.5), 1.0);\n\tvColor = pos;\n}",B="#version 300 es\n#line 14\nprecision highp int;\nprecision highp float;\nuniform vec3 rayDir;\nuniform vec3 texVox;\nuniform highp sampler3D volume;\nuniform highp sampler2D colormap;\nin vec3 vColor;\nout vec4 fColor;\nvec3 GetBackPosition (vec3 startPosition) {\n vec3 invR = 1.0 / rayDir;\n vec3 tbot = invR * (vec3(0.0)-startPosition);\n vec3 ttop = invR * (vec3(1.0)-startPosition);\n vec3 tmax = max(ttop, tbot);\n vec2 t = min(tmax.xx, tmax.yz);\n return startPosition + (rayDir * min(t.x, t.y));\n}\nvoid main() {\n    fColor = vec4(0.0,0.0,0.0,0.0);\n\tvec3 start = vColor;\n\t//fColor = vec4(start, 1.0); return;\n\tvec3 backPosition = GetBackPosition(start);\n\t//fColor = vec4(backPosition, 1.0); return;\n    vec3 dir = backPosition - start;\n    float len = length(dir);\n\tfloat lenVox = length((texVox * start) - (texVox * backPosition));\n\tfloat sliceSize = len / lenVox; //e.g. if ray length is 1.0 and traverses 50 voxels, each voxel is 0.02 in unit cube \n\tfloat stepSize = sliceSize; //quality: larger step is faster traversal, but fewer samples\n\tfloat opacityCorrection = stepSize/sliceSize;\n    dir = normalize(dir);\n\tvec4 deltaDir = vec4(dir.xyz * stepSize, stepSize);\n\tvec4 samplePos = vec4(start.xyz, 0.0); //ray position\n\t//start: OPTIONAL fast pass: rapid traversal until first hit\n\tfloat stepSizeFast = sliceSize * 1.9;\n\tvec4 deltaDirFast = vec4(dir.xyz * stepSizeFast, stepSizeFast);\n\twhile (samplePos.a <= len) {\n\t\tfloat val = texture(volume, samplePos.xyz).r;\n\t\tif (val > 0.01) break;\n\t\tsamplePos += deltaDirFast; //advance ray position\t\n\t}\n\tif (samplePos.a > len) return;\n\tsamplePos -= deltaDirFast;\n\tif (samplePos.a < 0.0) \n\t\tvec4 samplePos = vec4(start.xyz, 0.0); //ray position\n\t//end: fast pass\n\tvec4 colAcc = vec4(0.0,0.0,0.0,0.0);\n\tconst float earlyTermination = 0.95;\n    float ran = fract(sin(gl_FragCoord.x * 12.9898 + gl_FragCoord.y * 78.233) * 43758.5453);\n    samplePos += deltaDir * ran; //jitter ray\n\twhile (samplePos.a <= len) {\n\t\tfloat val = texture(volume, samplePos.xyz).r;\n\t\tsamplePos += deltaDir; //advance ray position\t\n\t\tif (val < 0.01) continue;\n\t\tvec4 colorSample = texture(colormap, vec2(val, 0.5)).rgba;\n\t\tcolorSample.a = 1.0-pow((1.0 - colorSample.a), opacityCorrection);\n\t\tcolorSample.rgb *= colorSample.a;\n\t\tcolAcc= (1.0 - colAcc.a) * colorSample + colAcc;\n\t\tif ( colAcc.a > earlyTermination )\n\t\t\tbreak;\t\t\t\n\t}\n\tcolAcc.a = colAcc.a / earlyTermination;\n\tfColor = colAcc;\n\t//fColor = vec4(backPosition, 1.0); return;\n}",O="#version 300 es\n#line 81\nlayout(location=0) in vec3 pos;\nuniform int axCorSag;\nuniform float slice;\nuniform vec4 leftBottomWidthHeight;\nout vec3 texPos;\nvoid main(void) {\n\tgl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n\tgl_Position.x = leftBottomWidthHeight.x + (pos.x * leftBottomWidthHeight.b);\n\tgl_Position.y = leftBottomWidthHeight.y + (pos.y * leftBottomWidthHeight.a);\n\tif (axCorSag == 1) \n\t\ttexPos = vec3(pos.x, slice, pos.y);\t\n\telse if (axCorSag == 2) \n\t\ttexPos = vec3(slice, pos.x, pos.y);\t\n\telse\n\t\ttexPos = vec3(pos.xy, slice);\n}",k="#version 300 es\n#line 102\nprecision highp int;\nprecision highp float;\nuniform highp sampler3D volume;\nuniform highp sampler2D colormap;\nin vec3 texPos;\nout vec4 color;\nvoid main() {\n    //color = vec4(texPos, 1.0); //show texture sample location\n    //color = texture(volume, texPos); //show color index\n    float val = texture(volume, texPos).r;\n\t//color = texture(colormap, vec2(val, 0.5)); //apply color scheme, use texture Alpha\n\tcolor = vec4(texture(colormap, vec2(val, 0.5)).rgb, 1.0); //apply color scheme, use texture Alpha\t\n}",W="#version 300 es\n#line 119\nlayout(location=0) in vec3 pos;\nuniform vec4 leftBottomWidthHeight;\nvoid main(void) {\n\tgl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n\tgl_Position.x = leftBottomWidthHeight.x + (pos.x * leftBottomWidthHeight.b);\n\tgl_Position.y = leftBottomWidthHeight.y + (pos.y * leftBottomWidthHeight.a);\n}",H="#version 300 es\n#line 130\nprecision highp int;\nprecision highp float;\nuniform vec4 lineColor;\nout vec4 color;\nvoid main() {\n\tcolor = lineColor;\n\t//color = vec4(1.0, 0.0, 0.0, 1.0);\t\n}",X=new o["a"],z=.005,N=[1,0,0,1],G=[.5,.5,.5],j=[0,0,0,1],$=0,Y=1,q=2,J=3,K=4,Q=J,Z=120,ee=15,te=null,ne=null,oe=null,ae=null,re=null,ie=null,le=0,se=[{leftBottomWidthHeight:[1,0,0,1],axCorSag:$},{leftBottomWidthHeight:[1,0,0,1],axCorSag:$},{leftBottomWidthHeight:[1,0,0,1],axCorSag:$},{leftBottomWidthHeight:[1,0,0,1],axCorSag:$}];function ce(e,t){Q==K&&(Z=e,ee=t,Ee(ve(),te))}function ue(e){Q=e,Ee(ve(),te)}function ve(){var e=document.querySelector("#gl").getContext("webgl2");return e||null}function de(e,t){var n,o=t.volume,a=o.hdr.cal_min,r=o.hdr.cal_max,i=e.length,l=new Uint8ClampedArray(i),s=1;for(r>a&&(s=255/(r-a)),n=0;n<i-1;n++){var c=e[n];c=c*o.hdr.scl_slope+o.hdr.scl_inter,l[n]=(c-a)*s}return l}function fe(e,t){var n,o=t.volume,a=e.length,r=1/0,i=-1/0;for(n=0;n<a-1;n++)isFinite(e[n])&&(e[n]<r&&(r=e[n]),e[n]>i&&(i=e[n]));isFinite(o.hdr.scl_slope)&&isFinite(o.hdr.scl_inter)&&0!==o.hdr.scl_slope?(r=r*o.hdr.scl_slope+o.hdr.scl_inter,i=i*o.hdr.scl_slope+o.hdr.scl_inter):(o.hdr.scl_slope=1,o.hdr.scl_inter=0),o.hdr.global_min=r,o.hdr.global_max=i,(!isFinite(o.hdr.cal_min)||!isFinite(o.hdr.cal_max)||o.hdr.cal_min>=o.hdr.cal_max)&&(o.hdr.cal_min=r,o.hdr.cal_max=i)}function me(e){var t=null,n=null,o=e.volumeURL,a=new XMLHttpRequest;a.open("GET",o,!0),a.responseType="arraybuffer",a.onerror=function(){console.log="Error Loading Volume"},a.onload=function(){var o=a.response;o?(t=L["readHeader"](o),n=L["isCompressed"](o)?L["readImage"](t,L["decompress"](o)):L["readImage"](t,o)):(alert("Unable to load buffer properly from volume?"),console.log("no buffer?")),e.volume.hdr=t,e.volume.img=n,te=e,ge(ve(),e.colorMap),he(ve(),e)},a.send()}function pe(e){console.log("niivue: init"),ae=new M(e,O,k),ae.use(e),e.uniform1i(ae.uniforms["volume"],0),e.uniform1i(ae.uniforms["colormap"],1),re=new M(e,W,H),ie=new M(e,V,B),ie.use(e),e.uniform1i(ie.uniforms["volume"],0),e.uniform1i(ie.uniforms["colormap"],1)}function he(e,t){var n=[0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0],o=e.createVertexArray();e.bindVertexArray(o);var a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);var r=t.volume.hdr,i=t.volume.img,l=null;2===r.datatypeCode?l=new Uint8Array(i):4===r.datatypeCode?l=new Int16Array(i):16===r.datatypeCode?l=new Float32Array(i):512===r.datatypeCode&&(l=new Uint16Array(i)),fe(l,t);var s=de(l,t);oe&&e.deleteTexture(oe),oe=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_3D,oe),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texStorage3D(e.TEXTURE_3D,1,e.R8,r.dims[1],r.dims[2],r.dims[3]),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,r.dims[1],r.dims[2],r.dims[3],e.RED,e.UNSIGNED_BYTE,s),Ee(e,t)}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=ye([0,255],[0,255],[0,255],[0,128],[0,255]);"Plasma"===t&&(n=ye([13,156,237,240],[8,23,121,249],[135,158,83,33],[0,56,80,88],[0,64,192,255])),"Viridis"===t&&(n=ye([68,49,53,253],[1,104,183,231],[84,142,121,37],[0,56,80,88],[0,65,192,255])),"Inferno"===t&&(n=ye([0,120,237,240],[0,28,105,249],[4,109,37,33],[0,56,80,88],[0,64,192,255])),null!==ne&&e.deleteTexture(ne),ne=e.createTexture(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.texStorage2D(e.TEXTURE_2D,1,e.RGBA8,256,1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texSubImage2D(e.TEXTURE_2D,0,0,0,256,1,e.RGBA,e.UNSIGNED_BYTE,n),console.log("set colormap")}function ye(e,t,n,o,a){for(var r=new Uint8ClampedArray(1024),i=0;i<a.length-1;i++)for(var l=a[i],s=a[i+1],c=s-l,u=4*l,v=l;v<=s;v++){var d=(v-l)/c;r[u]=e[i]+d*(e[i+1]-e[i]),u++,r[u]=t[i]+d*(t[i+1]-t[i]),u++,r[u]=n[i]+d*(n[i+1]-n[i]),u++,r[u]=o[i]+d*(o[i+1]-o[i]),u++}return r}function xe(e,t){var n=t.volume.hdr,o=[1,n.dims[1]*n.pixDims[1],n.dims[2]*n.pixDims[2],n.dims[3]*n.pixDims[3]],a=Math.max(o[1],Math.max(o[2],o[3])),r=[o[1]/a,o[2]/a,o[3]/a],i=[e.canvas.clientHeight/e.canvas.clientWidth,1];i[0]>1&&(i[1]=e.canvas.clientWidth/e.canvas.clientHeight,i[0]=1);var l=[n.dims[1],n.dims[2],n.dims[3]];return{volScale:r,AR:i,vox:l}}function _e(e,t,n,o){if(Q!=K){console.log("Click pixels (x,y):",n,o);var a=xe(e,t),r=a.volScale,i=a.AR;if(!(le<1||e.canvas.height<1||i[0]<=0||i[1]<=0||r[0]<=0||r[1]<=0||r[2]<=0)){var l=2*(n/e.canvas.width-.5),s=2*((e.canvas.height-o)/e.canvas.height-.5);console.log("Click clip space (x,y):",l,s);for(var c=0;c<le;c++){var u=se[c].axCorSag;if(!(u>q)){var v=se[c].leftBottomWidthHeight,d=(l-v[0])/v[2],f=(s-v[1])/v[3];if(d>=0&&d<1&&f>=0&&f<1)return u===$&&(G[0]=d,G[1]=f),u===Y&&(G[0]=d,G[2]=f),u===q&&(G[1]=d,G[2]=f),void Ee(e,t)}}}}}function be(e,t,n){var o=[G[0],G[1],G[2]];if(1===n&&(o=[G[0],G[2],G[1]]),2===n&&(o=[G[1],G[2],G[0]]),ae.use(e),e.uniform1i(ae.uniforms["axCorSag"],n),e.uniform1f(ae.uniforms["slice"],o[2]),e.uniform4f(ae.uniforms["leftBottomWidthHeight"],t[0],t[1],t[2],t[3]),e.drawArrays(e.TRIANGLE_STRIP,5,4),se[le].leftBottomWidthHeight=t,se[le].axCorSag=n,le+=1,!(z<=0)){re.use(e),e.uniform4fv(re.uniforms["lineColor"],N);var a=t[0]+t[2]*o[0];e.uniform4f(re.uniforms["leftBottomWidthHeight"],a-z,t[1],z,t[3]),e.drawArrays(e.TRIANGLE_STRIP,5,4);var r=t[1]+t[3]*o[1];e.uniform4f(re.uniforms["leftBottomWidthHeight"],t[0],r-z,t[2],z),e.drawArrays(e.TRIANGLE_STRIP,5,4)}}function Te(e,t){var n=xe(e,t),o=n.volScale,a=(n.AR,n.vox);ie.use(e),e.canvas.width<e.canvas.height?e.viewport(0,.5*(e.canvas.height-e.canvas.width),e.canvas.width,e.canvas.width):e.viewport(.5*(e.canvas.width-e.canvas.height),0,e.canvas.height,e.canvas.height),e.clearColor(.2,0,0,1);var r=F["a"].create(),i=.1;F["a"].translate(r,r,[0,0,i]);var l=(90-ee-o[0])*Math.PI/180;F["a"].rotate(r,r,l,[-1,0,0]),l=Z*Math.PI/180,F["a"].rotate(r,r,l,[0,0,1]),F["a"].scale(r,r,o);var s=F["a"].create();F["a"].invert(s,r);var c=F["c"].fromValues(0,0,-1,1);F["c"].transformMat4(c,c,s);var u=F["b"].fromValues(c[0],c[1],c[2]);F["b"].normalize(u,u);var v=1e-5;return Math.abs(u[0])<v&&(u[0]=v),Math.abs(u[1])<v&&(u[1]=v),Math.abs(u[2])<v&&(u[2]=v),e.disable(e.DEPTH_TEST),e.enable(e.CULL_FACE),e.cullFace(e.FRONT),e.uniformMatrix4fv(ie.uniforms["mvpMtx"],!1,r),e.uniform3fv(ie.uniforms["rayDir"],u),e.uniform3fv(ie.uniforms["texVox"],a),e.drawArrays(e.TRIANGLE_STRIP,0,14),"azimuth: "+Z.toFixed(0)+" elevation: "+ee.toFixed(0)}function Ee(e,t){if(console.log(t.volumeURL),e.clearColor(j[0],j[1],j[2],j[3]),e.clear(e.COLOR_BUFFER_BIT),Q===K)return Te(e,t);var n=xe(e,t),o=n.volScale,a=n.AR;e.viewport(0,0,e.canvas.width,e.canvas.height);var r=o[0]*a[0],i=o[1]*a[1];le=0,se[0].leftBottomWidthHeight=[r,i,0,0,0],Q===$?be(e,[-r,-i,2*r,2*i],0):Q===Y?(r=o[0]*a[0],i=o[2]*a[1],be(e,[-r,-i,2*r,2*i],1)):Q===q?(r=o[1]*a[0],i=o[2]*a[1],be(e,[-r,-i,2*r,2*i],2)):(be(e,[-r,-i,r,i],0),r=o[0]*a[0],i=o[2]*a[1],be(e,[-r,0,r,i],1),r=o[1]*a[0],i=o[2]*a[1],be(e,[0,0,r,i],2)),e.finish();var l=G[0].toFixed(2)+"×"+G[1].toFixed(2)+"×"+G[2].toFixed(2);return X.$emit("crosshair-pos-change",l),l}var Se={name:"glviewer",props:{overlays:Array,shader:String},created:function(){X.$on("slice-type-change",(function(e){ue(e)}))},data:function(){return{selectedOverlay:0,mouseDown:!1}},watch:{overlays:{deep:!0,handler:function(){}}},methods:{onWindowResize:function(){var e=document.querySelector("#gl"),t=document.querySelector("#viewer");e.width=t.offsetWidth-1,e.height=t.offsetHeight-1,Ee(this.gl,this.overlays[this.selectedOverlay])}},mounted:function(){var e=this,t=document.createElement("canvas"),n=document.querySelector("#viewer");t.id="gl",t.width=n.offsetWidth-1,t.height=n.offsetHeight-1,n.appendChild(t);var o=document.querySelector("#gl"),a=o.getContext("webgl2");a.canvas.addEventListener("mousedown",(function(t){e.mouseDown=!0;var n=o.getBoundingClientRect();_e(e.gl,e.overlays[0],t.clientX-n.left,t.clientY-n.top),ce(t.clientX-n.left,t.clientY-n.top)})),a.canvas.addEventListener("mousemove",(function(t){if(e.mouseDown){var n=o.getBoundingClientRect();_e(e.gl,e.overlays[0],t.clientX-n.left,t.clientY-n.top),ce(t.clientX-n.left,t.clientY-n.top)}})),a.canvas.addEventListener("mouseup",(function(){e.mouseDown=!1})),window.addEventListener("resize",this.onWindowResize),this.gl=a,this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.FRONT),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA),pe(this.gl),me(this.overlays[this.selectedOverlay])}},Pe=Se,Re=(n("1852"),Object(d["a"])(Pe,D,U,!1,null,"7b44d84e",null)),we=Re.exports,Ae={name:"App",components:{controls:C,glviewer:we},created:function(){var e=this;X.$on("crosshair-pos-change",(function(t){e.coordinateString=t,console.log(t)}))},data:function(){return{tab:null,appTabs:["Menu","Draw","Edit","Scripting"],coordinateString:"0x0x0",overlayList:[{volumeURL:"./mni152.nii.gz",volume:{hdr:null,img:null},name:"mni152.nii.gz",intensityMin:0,intensityMax:100,intensityRange:[0,100],colorMap:"gray",opacity:100}]}},methods:{setSliceType:function(e){X.$emit("slice-type-change",e)}}},Ce=Ae,De=(n("1d5c"),n("7496")),Ue=n("553a"),Le=n("f6c4"),Me=n("71a3"),Ie=n("fe57"),Fe=n("9a96"),Ve=n("71d9"),Be=Object(d["a"])(Ce,a,r,!1,null,"73eed2b6",null),Oe=Be.exports;m()(Be,{VApp:De["a"],VBtn:p["a"],VCol:h["a"],VFooter:Ue["a"],VMain:Le["a"],VRow:E["a"],VSpacer:R["a"],VTab:Me["a"],VTabs:Ie["a"],VTabsSlider:Fe["a"],VToolbar:Ve["a"]});var ke=n("f309");n("bf40");o["a"].use(ke["a"]);var We=new ke["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:We,render:function(e){return e(Oe)}}).$mount("#app")},e920:function(e,t,n){"use strict";n("1c874")}});
//# sourceMappingURL=app.866f2d91.js.map