(()=>{var Fu=Object.defineProperty;var Bu=(r,e,t)=>e in r?Fu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ce=(r,e,t)=>Bu(r,typeof e!="symbol"?e+"":e,t);var Uo="170";var zu=0,Mr=1,hi=2,Nh=0,Oh=1,Sr=2;var ui=5,bi=100,ku=101,Hu=102;var Vu=200,An=201,Gu=202,Wu=203,No=204,Vn=205,qu=206,Xu=207,ju=208,Yu=209,$u=210,Zu=211,Ju=212,Ku=213,Qu=214,ed=0,td=1,nd=2,id=3,rd=4,sd=5,ad=6,od=7;var Fh=0;var Bh=300,cr=301,hr=302,Oo=303,Fo=304,_a=306,Gr=1e3,Wr=1001,Bo=1002,gn=1003,ld=1004;var ds=1005;var tn=1006,Ka=1007;var rr=1008;var si=1009,zh=1010,kh=1011,qr=1012,oc=1013,Ei=1014,kn=1015,Di=1016,lc=1017,cc=1018,ur=1020,Hh=35902,Vh=1021,Gh=1022,nn=1023,Wh=1024,qh=1025,Xr=1026,dr=1027,Xh=1028,hc=1029,jh=1030,uc=1031;var dc=1033,Ws=33776,qs=33777,Xs=33778,js=33779,zo=35840,ko=35841,Ho=35842,Vo=35843,Go=36196,Wo=37492,qo=37496,Xo=37808,jo=37809,Yo=37810,$o=37811,Zo=37812,Jo=37813,Ko=37814,Qo=37815,el=37816,tl=37817,nl=37818,il=37819,rl=37820,sl=37821,Ys=36492,al=36494,ol=36495,Yh=36283,ll=36284,cl=36285,hl=36286;var $s=2300,ul=2301,Qa=2302,Tc=2400,Ec=2401,Ac=2402;var nr="",Et="srgb",br="srgb-linear",Ma="linear",ht="srgb";var Gi=7680;var cd=512,hd=513,ud=514,dd=515,pd=516,md=517,fd=518,gd=519,Rc=35044;var Cc="300 es",pr=2e3,Zs=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=1234567,ar=Math.PI/180,jr=180/Math.PI;function Ui(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ut[255&r]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[255&e]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[63&t|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[255&n]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function It(r,e,t){return Math.max(e,Math.min(t,r))}function dl(r,e){return(r%e+e)%e}function zr(r,e,t){return(1-t)*r+t*e}function ir(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Dt={DEG2RAD:ar,RAD2DEG:jr,generateUUID:Ui,clamp:It,euclideanModulo:dl,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:zr,damp:function(r,e,t,n){return zr(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(dl(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Pc=r);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*ar},radToDeg:function(r){return r*jr},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Bt,denormalize:ir},ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],y=i[0],m=i[3],g=i[6],x=i[1],v=i[4],_=i[7],R=i[2],A=i[5],P=i[8];return s[0]=a*y+o*x+l*R,s[3]=a*m+o*v+l*A,s[6]=a*g+o*_+l*P,s[1]=c*y+h*x+u*R,s[4]=c*m+h*v+u*A,s[7]=c*g+h*_+u*P,s[2]=d*y+p*x+f*R,s[5]=d*m+p*v+f*A,s[8]=d*g+p*_+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eo=new He;function $h(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vd(){let r=Js("canvas");return r.style.display="block",r}var Ic={};function Br(r){r in Ic||(Ic[r]=!0,console.warn(r))}var tt={enabled:!0,workingColorSpace:br,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===ht&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?Ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Hn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function or(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Uc=[.3127,.329],Nc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Wi;tt.define({[br]:{primaries:Lc,whitePoint:Uc,transfer:Ma,toXYZ:Nc,fromXYZ:Oc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:Lc,whitePoint:Uc,transfer:ht,toXYZ:Nc,fromXYZ:Oc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});var pl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Js("canvas")),Wi.width=e.width,Wi.height=e.height;let n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Hn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Hn(t[n]/255)):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xd=0,Ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(to(i[a].image)):s.push(to(i[a]))}else s=to(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function to(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yd=0,$t=class r extends ai{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Ui(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=Bh,$t.DEFAULT_ANISOTROPY=1;var dt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(p+1)/2,R=(g+1)/2,A=(h+d)/4,P=(u+y)/4,L=(f+m)/4;return v>_&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=P/n):_>R?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=P/s,i=L/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-f)*(m-f)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-f)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ks(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qs=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*y,x=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let R=Math.sqrt(v),A=Math.atan2(R,g*x);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let _=o*x;if(l=l*m+d*_,c=c*m+p*_,h=h*m+f*_,u=u*m+y*_,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new S,Fc=new rn,wn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),ms.subVectors(this.max,Ir),qi.subVectors(e.a,Ir),Xi.subVectors(e.b,Ir),ji.subVectors(e.c,Ir),Jn.subVectors(Xi,qi),Kn.subVectors(ji,Xi),gi.subVectors(qi,ji);let t=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!!io(t,qi,Xi,ji,ms)&&(t=[1,0,0,0,1,0,0,0,1],!!io(t,qi,Xi,ji,ms)&&(fs.crossVectors(Jn,Kn),t=[fs.x,fs.y,fs.z],io(t,qi,Xi,ji,ms)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(pn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Un=[new S,new S,new S,new S,new S,new S,new S,new S],pn=new S,ps=new wn,qi=new S,Xi=new S,ji=new S,Jn=new S,Kn=new S,gi=new S,Ir=new S,ms=new S,fs=new S,vi=new S;function io(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){vi.fromArray(r,s);let o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _d=new wn,Lr=new S,ro=new S,sn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(ro)),this.expandByPoint(Lr.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new S,so=new S,gs=new S,Qn=new S,ao=new S,vs=new S,oo=new S,Ai=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(so);let s=.5*e.distanceTo(t),a=-this.direction.dot(gs),o=Qn.dot(this.direction),l=-Qn.dot(gs),c=Qn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(so).addScaledVector(gs,d),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){ao.subVectors(t,e),vs.subVectors(n,e),oo.crossVectors(ao,vs);let a,o=this.direction.dot(oo);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Qn.subVectors(this.origin,e);let l=a*this.direction.dot(vs.crossVectors(Qn,vs));if(l<0)return null;let c=a*this.direction.dot(ao.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(oo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,y,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,y,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d+y*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Sd)}lookAt(e,t,n){let i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ei.crossVectors(n,jt),ei.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ei.crossVectors(n,jt)),ei.normalize(),xs.crossVectors(jt,ei),i[0]=ei.x,i[4]=xs.x,i[8]=jt.x,i[1]=ei.y,i[5]=xs.y,i[9]=jt.y,i[2]=ei.z,i[6]=xs.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],y=n[6],m=n[10],g=n[14],x=n[3],v=n[7],_=n[11],R=n[15],A=i[0],P=i[4],L=i[8],B=i[12],W=i[1],X=i[5],V=i[9],T=i[13],F=i[2],j=i[6],K=i[10],J=i[14],ae=i[3],ge=i[7],me=i[11],ie=i[15];return s[0]=a*A+o*W+l*F+c*ae,s[4]=a*P+o*X+l*j+c*ge,s[8]=a*L+o*V+l*K+c*me,s[12]=a*B+o*T+l*J+c*ie,s[1]=h*A+u*W+d*F+p*ae,s[5]=h*P+u*X+d*j+p*ge,s[9]=h*L+u*V+d*K+p*me,s[13]=h*B+u*T+d*J+p*ie,s[2]=f*A+y*W+m*F+g*ae,s[6]=f*P+y*X+m*j+g*ge,s[10]=f*L+y*V+m*K+g*me,s[14]=f*B+y*T+m*J+g*ie,s[3]=x*A+v*W+_*F+R*ae,s[7]=x*P+v*X+_*j+R*ge,s[11]=x*L+v*V+_*K+R*me,s[15]=x*B+v*T+_*J+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],y=e[13],m=e[14],g=e[15],x=u*m*c-y*d*c+y*l*p-o*m*p-u*l*g+o*d*g,v=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,_=h*y*c-f*u*c+f*o*p-a*y*p-h*o*g+a*u*g,R=f*u*l-h*y*l-f*o*d+a*y*d+h*o*m-a*u*m,A=t*x+n*v+i*_+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=x*P,e[1]=(y*d*s-u*m*s-y*i*p+n*m*p+u*i*g-n*d*g)*P,e[2]=(o*m*s-y*l*s+y*i*c-n*m*c-o*i*g+n*l*g)*P,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*P,e[4]=v*P,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*g+t*d*g)*P,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*P,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*P,e[8]=_*P,e[9]=(f*u*s-h*y*s-f*n*p+t*y*p+h*n*g-t*u*g)*P,e[10]=(a*y*s-f*o*s+f*n*c-t*y*c-a*n*g+t*o*g)*P,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=R*P,e[13]=(h*y*i-f*u*i+f*n*d-t*y*d-h*n*m+t*u*m)*P,e[14]=(f*o*i-a*y*i-f*n*l+t*y*l+a*n*m-t*o*m)*P,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,y=a*h,m=a*u,g=o*u,x=l*c,v=l*h,_=l*u,R=n.x,A=n.y,P=n.z;return i[0]=(1-(y+g))*R,i[1]=(p+_)*R,i[2]=(f-v)*R,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(d+g))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(f+v)*P,i[9]=(m-x)*P,i[10]=(1-(d+y))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Yi.set(i[0],i[1],i[2]).length(),a=Yi.set(i[4],i[5],i[6]).length(),o=Yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);let l=1/s,c=1/a,h=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===pr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Zs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,y;if(o===pr)f=(a+s)*u,y=-2*u;else{if(o!==Zs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new S,mn=new Oe,Md=new S(0,0,0),Sd=new S(1,1,1),ei=new S,xs=new S,jt=new S,Bc=new Oe,zc=new rn,Tn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},bd=0,kc=new S,$i=new rn,On=new Oe,ys=new S,Dr=new S,wd=new S,Td=new rn,Hc=new S(1,0,0),Vc=new S(0,1,0),Gc=new S(0,0,1),Wc={type:"added"},Ed={type:"removed"},Zi={type:"childadded",child:null},lo={type:"childremoved",child:null},xt=class r extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new S,t=new Tn,n=new rn,i=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new He}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Dr,ys,this.up):On.lookAt(ys,Dr,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(On),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};xt.DEFAULT_UP=new S(0,1,0),xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new S,Fn=new S,co=new S,Bn=new S,Ji=new S,Ki=new S,qc=new S,ho=new S,uo=new S,po=new S,mo=new dt,fo=new dt,go=new dt,ii=class r{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fn.subVectors(i,t),Fn.subVectors(n,t),co.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(Fn),l=fn.dot(co),c=Fn.dot(Fn),h=Fn.dot(co),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)!==null&&Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return mo.setScalar(0),fo.setScalar(0),go.setScalar(0),mo.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,n),go.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(mo,s.x),a.addScaledVector(fo,s.y),a.addScaledVector(go,s.z),a}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Fn.subVectors(e,t),fn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),.5*fn.cross(Fn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ji.subVectors(i,n),Ki.subVectors(s,n),ho.subVectors(e,n);let l=Ji.dot(ho),c=Ki.dot(ho);if(l<=0&&c<=0)return t.copy(n);uo.subVectors(e,i);let h=Ji.dot(uo),u=Ki.dot(uo);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ji,a);po.subVectors(e,s);let p=Ji.dot(po),f=Ki.dot(po);if(f>=0&&p<=f)return t.copy(s);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Ki,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return qc.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(qc,o);let g=1/(m+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(Ji,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},_s={h:0,s:0,l:0};function vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=dl(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vo(a,s,e+1/3),this.g=vo(a,s,e),this.b=vo(a,s,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return tt.fromWorkingColorSpace(Nt.copy(this),e),65536*Math.round(It(255*Nt.r,0,255))+256*Math.round(It(255*Nt.g,0,255))+Math.round(It(255*Nt.b,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Nt.copy(this),t);let n=Nt.r,i=Nt.g,s=Nt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Et){tt.fromWorkingColorSpace(Nt.copy(this),e);let t=Nt.r,n=Nt.g,i=Nt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(_s);let n=zr(ti.h,_s.h,t),i=zr(ti.s,_s.s,t),s=zr(ti.l,_s.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new Ie;Ie.NAMES=Zh;var Ad=0,Gn=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ui(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Vn,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Vn&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},oi=class extends Gn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sf=Rd();function Rd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Tt=new S,Ms=new ne,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var ea=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var De=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cd=0,en=new Oe,xo=new xt,Qi=new S,Yt=new wn,Ur=new wn,Pt=new S,nt=class r extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Yt.min,Ur.min),Yt.expandByPoint(Pt),Pt.addVectors(Yt.max,Ur.max),Yt.expandByPoint(Pt)):(Yt.expandByPoint(Ur.min),Yt.expandByPoint(Ur.max))}Yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),Pt.add(Qi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new S,l[L]=new S;let c=new S,h=new S,u=new S,d=new ne,p=new ne,f=new ne,y=new S,m=new S;function g(L,B,W){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,W),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,B),f.fromBufferAttribute(s,W),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let X=1/(p.x*f.y-f.x*p.y);isFinite(X)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(X),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(X),o[L].add(y),o[B].add(y),o[W].add(y),l[L].add(m),l[B].add(m),l[W].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,B=x.length;L<B;++L){let W=x[L],X=W.start;for(let V=X,T=X+W.count;V<T;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let v=new S,_=new S,R=new S,A=new S;function P(L){R.fromBufferAttribute(i,L),A.copy(R);let B=o[L];v.copy(B),v.sub(R.multiplyScalar(R.dot(B))).normalize(),_.crossVectors(A,B);let W=_.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,W)}for(let L=0,B=x.length;L<B;++L){let W=x[L],X=W.start;for(let V=X,T=X+W.count;V<T;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let y=0,m=l.length;y<m;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xc=new Oe,xi=new Ai,Ss=new sn,jc=new S,bs=new S,ws=new S,Ts=new S,yo=new S,Es=new S,Yc=new S,As=new S,Pe=class extends xt{constructor(e=new nt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(yo.fromBufferAttribute(u,e),a?Es.addScaledVector(yo,h):Es.addScaledVector(yo.sub(t),h))}t.add(Es)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),xi.copy(e.ray).recast(e.near),Ss.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Ss,jc)===null||xi.origin.distanceToSquared(jc)>(e.far-e.near)**2))return;Xc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Xc),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,xi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let m=d[f],g=a[m.materialIndex];for(let x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));x<v;x+=3)i=Rs(this,g,e,n,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);f<y;f+=3)i=Rs(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let m=d[f],g=a[m.materialIndex];for(let x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));x<v;x+=3)i=Rs(this,g,e,n,c,h,u,x,x+1,x+2),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);f<y;f+=3)i=Rs(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function Rs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,bs),r.getVertexPosition(l,ws),r.getVertexPosition(c,Ts);let h=function(u,d,p,f,y,m,g,x){let v;if(v=d.side===1?f.intersectTriangle(g,m,y,!0,x):f.intersectTriangle(y,m,g,d.side===0,x),v===null)return null;As.copy(x),As.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(As);return _<p.near||_>p.far?null:{distance:_,point:As.clone(),object:u}}(r,e,t,n,bs,ws,Ts,Yc);if(h){let u=new S;ii.getBarycoord(Yc,bs,ws,Ts,u),i&&(h.uv=ii.getInterpolatedAttribute(i,o,l,c,u,new ne)),s&&(h.uv1=ii.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new S,materialIndex:0};ii.getNormal(bs,ws,Ts,d.normal),h.face=d,h.barycoord=u}return h}var an=class r extends nt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(y,m,g,x,v,_,R,A,P,L,B){let W=_/P,X=R/L,V=_/2,T=R/2,F=A/2,j=P+1,K=L+1,J=0,ae=0,ge=new S;for(let me=0;me<K;me++){let ie=me*X-T;for(let oe=0;oe<j;oe++){let fe=oe*W-V;ge[y]=fe*x,ge[m]=ie*v,ge[g]=F,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[m]=0,ge[g]=A>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(oe/P),u.push(1-me/L),J+=1}}for(let me=0;me<L;me++)for(let ie=0;ie<P;ie++){let oe=d+ie+j*me,fe=d+ie+j*(me+1),ye=d+(ie+1)+j*(me+1),re=d+(ie+1)+j*me;l.push(oe,fe,re),l.push(fe,ye,re),ae+=6}o.addGroup(p,ae,B),p+=ae,d+=J}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(r){let e={};for(let t=0;t<r.length;t++){let n=mr(r[t]);for(let i in n)e[i]=n[i]}return e}function Jh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Pd={clone:mr,merge:zt},rt=class extends Gn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$r=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new S,$c=new ne,Zc=new ne,kt=class extends $r{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*jr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ar*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*jr*Math.atan(Math.tan(.5*ar*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,$c,Zc),t.subVectors(Zc,$c)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ar*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},er=-90,gl=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(er,1,e,t);i.layers=this.layers,this.add(i);let s=new kt(er,1,e,t);s.layers=this.layers,this.add(s);let a=new kt(er,1,e,t);a.layers=this.layers,this.add(a);let o=new kt(er,1,e,t);o.layers=this.layers,this.add(o);let l=new kt(er,1,e,t);l.layers=this.layers,this.add(l);let c=new kt(er,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Zs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},na=class extends $t{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:cr,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new na(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),s=new rt({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Pe(i,s),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=tn),new gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},_o=new S,Id=new S,Ld=new He,zn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_o.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ld.getNormalMatrix(e),i=this.coplanarPoint(_o).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new sn,Cs=new S,fr=class{constructor(e=new zn,t=new zn,n=new zn,i=new zn,s=new zn,a=new zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],y=i[10],m=i[11],g=i[12],x=i[13],v=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,m-p,_-g).normalize(),n[1].setComponents(l+s,d+c,m+p,_+g).normalize(),n[2].setComponents(l+a,d+h,m+f,_+x).normalize(),n[3].setComponents(l-a,d-h,m-f,_-x).normalize(),n[4].setComponents(l-o,d-u,m-y,_-v).normalize(),t===pr)n[5].setComponents(l+o,d+u,m+y,_+v).normalize();else{if(t!==Zs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}}(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Ri=class r extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],y=[],m=[];for(let g=0;g<h;g++){let x=g*d-a;for(let v=0;v<c;v++){let _=v*u-s;f.push(_,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let v=x+c*g,_=x+c*(g+1),R=x+1+c*(g+1),A=x+1+c*g;p.push(v,_,A),p.push(_,R,A)}this.setIndex(p),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(y,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ve={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},bn={basic:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:zt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:zt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:zt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:zt([ue.common,ue.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:zt([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};bn.physical={uniforms:zt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ps={r:0,b:0,g:0},_i=new Tn,Ud=new Oe;function Nd(r,e,t,n,i,s,a){let o=new Ie(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function y(m,g){m.getRGB(Ps,Jh(r)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,y(o,h)},render:function(m){let g=!1,x=f(m);x===null?y(o,h):x&&x.isColor&&(y(x,1),g=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let x=f(g);x&&(x.isCubeTexture||x.mapping===_a)?(c===void 0&&(c=new Pe(new an(1,1,1),new rt({name:"BackgroundCubeMaterial",uniforms:mr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,_,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),_i.copy(g.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(_i)),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ht,u===x&&d===x.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pe(new Ri(2,2),new rt({name:"BackgroundMaterial",uniforms:mr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Od(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let x=[],v=[],_=[];for(let R=0;R<t;R++)x[R]=0,v[R]=0,_[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:v,attributeDivisors:_,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let x=0,v=g.length;x<v;x++)g[x]=0}function u(g){d(g,0)}function d(g,x){let v=s.newAttributes,_=s.enabledAttributes,R=s.attributeDivisors;v[g]=1,_[g]===0&&(r.enableVertexAttribArray(g),_[g]=1),R[g]!==x&&(r.vertexAttribDivisor(g,x),R[g]=x)}function p(){let g=s.newAttributes,x=s.enabledAttributes;for(let v=0,_=x.length;v<_;v++)x[v]!==g[v]&&(r.disableVertexAttribArray(v),x[v]=0)}function f(g,x,v,_,R,A,P){P===!0?r.vertexAttribIPointer(g,x,v,R,A):r.vertexAttribPointer(g,x,v,_,R,A)}function y(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,x,v,_,R){let A=!1,P=function(L,B,W){let X=W.wireframe===!0,V=n[L.id];V===void 0&&(V={},n[L.id]=V);let T=V[B.id];T===void 0&&(T={},V[B.id]=T);let F=T[X];return F===void 0&&(F=c(r.createVertexArray()),T[X]=F),F}(_,v,x);s!==P&&(s=P,o(s.object)),A=function(L,B,W,X){let V=s.attributes,T=B.attributes,F=0,j=W.getAttributes();for(let K in j)if(j[K].location>=0){let J=V[K],ae=T[K];if(ae===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;F++}return s.attributesNum!==F||s.index!==X}(g,_,v,R),A&&function(L,B,W,X){let V={},T=B.attributes,F=0,j=W.getAttributes();for(let K in j)if(j[K].location>=0){let J=T[K];J===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),V[K]=ae,F++}s.attributes=V,s.attributesNum=F,s.index=X}(g,_,v,R),R!==null&&e.update(R,r.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,function(L,B,W,X){h();let V=X.attributes,T=W.getAttributes(),F=B.defaultAttributeValues;for(let j in T){let K=T[j];if(K.location>=0){let J=V[j];if(J===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let ae=J.normalized,ge=J.itemSize,me=e.get(J);if(me===void 0)continue;let ie=me.buffer,oe=me.type,fe=me.bytesPerElement,ye=oe===r.INT||oe===r.UNSIGNED_INT||J.gpuType===oc;if(J.isInterleavedBufferAttribute){let re=J.data,b=re.stride,E=J.offset;if(re.isInstancedInterleavedBuffer){for(let D=0;D<K.locationSize;D++)d(K.location+D,re.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let D=0;D<K.locationSize;D++)u(K.location+D);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let D=0;D<K.locationSize;D++)f(K.location+D,ge/K.locationSize,oe,ae,b*fe,(E+ge/K.locationSize*D)*fe,ye)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)d(K.location+re,J.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<K.locationSize;re++)u(K.location+re);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let re=0;re<K.locationSize;re++)f(K.location+re,ge/K.locationSize,oe,ae,ge*fe,ge/K.locationSize*re*fe,ye)}}else if(F!==void 0){let ae=F[j];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(K.location,ae);break;case 3:r.vertexAttrib3fv(K.location,ae);break;case 4:r.vertexAttrib4fv(K.location,ae);break;default:r.vertexAttrib1fv(K.location,ae)}}}}p()}(g,x,v,_),R!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:y,resetDefaultState:m,dispose:function(){y();for(let g in n){let x=n[g];for(let v in x){let _=x[v];for(let R in _)l(_[R].object),delete _[R];delete x[v]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let x=n[g.id];for(let v in x){let _=x[v];for(let R in _)l(_[R].object),delete _[R];delete x[v]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let x in n){let v=n[x];if(v[g.id]===void 0)continue;let _=v[g.id];for(let R in _)l(_[R].object),delete _[R];delete v[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Fd(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function Bd(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===nn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==si&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==kn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function zd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new zn,o=new He,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,p!==!0||y===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(y===null||y.length<m)&&(y=new Float32Array(m));for(let x=0,v=d;x!==f;++x,v+=4)a.copy(h[x]).applyMatrix4(g,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!y)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let g=s?0:n,x=4*g,v=m.clippingState||null;l.value=v,v=c(p,u,x,d);for(let _=0;_!==x;++_)v[_]=t[_];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function kd(r){let e=new WeakMap;function t(i,s){return s===Oo?i.mapping=cr:s===Fo&&(i.mapping=hr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Oo||s===Fo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new vl(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var li=class extends $r{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jc=[.125,.215,.35,.446,.526,.582],Nr=20,Mo=new li,Kc=new Ie,So=null,bo=0,wo=0,To=!1,Si=(1+Math.sqrt(5))/2,tr=1/Si,Qc=[new S(-Si,tr,0),new S(Si,tr,0),new S(-tr,0,Si),new S(tr,0,Si),new S(0,Si,-tr),new S(0,Si,tr),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,bo,wo),this._renderer.xr.enabled=To,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Di,format:nn,colorSpace:br,depthBuffer:!1},i=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Jc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Jc[d-a+4-1]:d===0&&(f=0),c.push(f);let y=1/(p-2),m=-y,g=1+y,x=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,_=6,R=3,A=2,P=1,L=new Float32Array(R*_*v),B=new Float32Array(A*_*v),W=new Float32Array(P*_*v);for(let V=0;V<v;V++){let T=V%3*2/3-1,F=V>2?0:-1,j=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];L.set(j,R*_*V),B.set(x,A*_*V);let K=[V,V,V,V,V,V];W.set(K,P*_*V)}let X=new nt;X.setAttribute("position",new pt(L,R)),X.setAttribute("uv",new pt(B,A)),X.setAttribute("faceIndex",new pt(W,P)),o.push(X),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Nr),h=new S(0,1,0);return new rt({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,i){let s=new kt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Kc),l.toneMapping=0,l.autoClear=!1;let u=new oi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Pe(new an,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Kc),p=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):m===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let g=this._cubeSize;Is(i,m*g,y>2?g:0,g,g),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===cr||e.mapping===hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Is(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qc[(i-s-1)%Qc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Pe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,y=isFinite(s)?1+Math.floor(3*f):Nr;y>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let m=[],g=0;for(let _=0;_<Nr;++_){let R=_/f,A=Math.exp(-R*R/2);m.push(A),_===0?g+=A:_<y&&(g+=2*A)}for(let _=0;_<m.length;_++)m[_]=m[_]/g;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;let v=this._sizeLods[i];Is(t,3*v*(i>x-4?i-x+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Mo)}};function eh(r,e,t){let n=new xn(r,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function th(){return new rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nh(){return new rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hd(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Oo||s===Fo,o=s===cr||s===hr;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new gr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p}(h)?(t===null&&(t=new gr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Vd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gd(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let m=0,g=y.length;m<g;m+=3){let x=y[m+0],v=y[m+1],_=y[m+2];c.push(x,v,v,_,_,x)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let m=0,g=y.length/3-1;m<g;m+=3){let x=m+0,v=m+1,_=m+2;c.push(x,v,v,_,_,x)}}}let p=new($h(c)?ta:ea)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Wd(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function qd(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Xd(r,e,t){let n=new WeakMap,i=new dt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let L=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],x=0;d===!0&&(x=1),p===!0&&(x=2),f===!0&&(x=3);let v=a.attributes.position.count*x,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*_*4*h),A=new Qs(R,v,_,h);A.type=kn,A.needsUpdate=!0;let P=4*x;for(let B=0;B<h;B++){let W=y[B],X=m[B],V=g[B],T=v*_*4*B;for(let F=0;F<W.count;F++){let j=F*P;d===!0&&(i.fromBufferAttribute(W,F),R[T+j+0]=i.x,R[T+j+1]=i.y,R[T+j+2]=i.z,R[T+j+3]=0),p===!0&&(i.fromBufferAttribute(X,F),R[T+j+4]=i.x,R[T+j+5]=i.y,R[T+j+6]=i.z,R[T+j+7]=0),f===!0&&(i.fromBufferAttribute(V,F),R[T+j+8]=i.x,R[T+j+9]=i.y,R[T+j+10]=i.z,R[T+j+11]=V.itemSize===4?i.w:1)}}u={count:h,texture:A,size:new ne(v,_)},n.set(a,u),a.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function jd(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var ia=class extends $t{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==Xr&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xr&&(n=Ei),n===void 0&&h===dr&&(n=ur),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qh=new $t,ih=new ia(1,1),eu=new Qs,tu=new fl,nu=new na,rh=[],sh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function wr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=rh[i];if(s===void 0&&(s=new Float32Array(i),rh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sa(r,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $d(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function Zd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function Jd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function Kd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;lh.set(n),r.uniformMatrix2fv(this.addr,!1,lh),Ct(t,n)}}function Qd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;oh.set(n),r.uniformMatrix3fv(this.addr,!1,oh),Ct(t,n)}}function ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;ah.set(n),r.uniformMatrix4fv(this.addr,!1,ah),Ct(t,n)}}function tp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function np(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function ip(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function sp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function op(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function cp(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(ih.compareFunction=515,s=ih):s=Qh,t.setTexture2D(e||s,i)}function hp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tu,i)}function up(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nu,i)}function dp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eu,i)}function pp(r,e){r.uniform1fv(this.addr,e)}function mp(r,e){let t=wr(e,this.size,2);r.uniform2fv(this.addr,t)}function fp(r,e){let t=wr(e,this.size,3);r.uniform3fv(this.addr,t)}function gp(r,e){let t=wr(e,this.size,4);r.uniform4fv(this.addr,t)}function vp(r,e){let t=wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xp(r,e){let t=wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yp(r,e){let t=wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _p(r,e){r.uniform1iv(this.addr,e)}function Mp(r,e){r.uniform2iv(this.addr,e)}function Sp(r,e){r.uniform3iv(this.addr,e)}function bp(r,e){r.uniform4iv(this.addr,e)}function wp(r,e){r.uniform1uiv(this.addr,e)}function Tp(r,e){r.uniform2uiv(this.addr,e)}function Ep(r,e){r.uniform3uiv(this.addr,e)}function Ap(r,e){r.uniform4uiv(this.addr,e)}function Rp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qh,s[a])}function Cp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||tu,s[a])}function Pp(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||nu,s[a])}function Ip(r,e,t){let n=this.cache,i=e.length,s=Sa(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||eu,s[a])}var xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return Yd;case 35664:return $d;case 35665:return Zd;case 35666:return Jd;case 35674:return Kd;case 35675:return Qd;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}(t.type)}},yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return fp;case 35666:return gp;case 35674:return vp;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return _p;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return bp;case 5125:return wp;case 36294:return Tp;case 36295:return Ep;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}(t.type)}},_l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function ch(r,e){r.seq.push(e),r.map[e.id]=e}function Lp(r,e,t){let n=r.name,i=n.length;for(Eo.lastIndex=0;;){let s=Eo.exec(n),a=Eo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){ch(t,c===void 0?new xl(o,r,e):new yl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new _l(o),ch(t,h)),t=h}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Lp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function hh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Dp=0,uh=new He;function dh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function Up(r,e){let t=function(n){tt._getMatrix(uh,tt.workingColorSpace,n);let i=`mat3( ${uh.elements.map(s=>s.toFixed(4))} )`;switch(tt.getTransfer(n)){case Ma:return[i,"LinearTransferOETF"];case ht:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}}(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Np(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ls=new S;function Op(){return tt.getLuminanceCoefficients(Ls),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ls.x.toFixed(4)}, ${Ls.y.toFixed(4)}, ${Ls.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Or(r){return r!==""}function ph(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(r){return r.replace(Fp,zp)}var Bp=new Map;function zp(r,e){let t=Ve[e];if(t===void 0){let n=Bp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ml(t)}var kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(r){return r.replace(kp,Hp)}function Hp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(X){let V="SHADOWMAP_TYPE_BASIC";return X.shadowMapType===1?V="SHADOWMAP_TYPE_PCF":X.shadowMapType===2?V="SHADOWMAP_TYPE_PCF_SOFT":X.shadowMapType===3&&(V="SHADOWMAP_TYPE_VSM"),V}(t),c=function(X){let V="ENVMAP_TYPE_CUBE";if(X.envMap)switch(X.envMapMode){case cr:case hr:V="ENVMAP_TYPE_CUBE";break;case _a:V="ENVMAP_TYPE_CUBE_UV"}return V}(t),h=function(X){let V="ENVMAP_MODE_REFLECTION";return X.envMap&&X.envMapMode===hr&&(V="ENVMAP_MODE_REFRACTION"),V}(t),u=function(X){let V="ENVMAP_BLENDING_NONE";if(X.envMap)switch(X.combine){case 0:V="ENVMAP_BLENDING_MULTIPLY";break;case 1:V="ENVMAP_BLENDING_MIX";break;case 2:V="ENVMAP_BLENDING_ADD"}return V}(t),d=function(X){let V=X.envMapCubeUVHeight;if(V===null)return null;let T=Math.log2(V)-2,F=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,T),112)),texelHeight:F,maxMip:T}}(t),p=function(X){return[X.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",X.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}(t),f=function(X){let V=[];for(let T in X){let F=X[T];F!==!1&&V.push("#define "+T+" "+F)}return V.join(`
`)}(s),y=i.createProgram(),m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Or).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Or).join(`
`),g.length>0&&(g+=`
`)):(m=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),g=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ve.tonemapping_pars_fragment:"",t.toneMapping!==0?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),Op(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=Ml(a),a=ph(a,t),a=mh(a,t),o=Ml(o),o=ph(o,t),o=mh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+m+a,_=x+g+o,R=hh(i,i.VERTEX_SHADER,v),A=hh(i,i.FRAGMENT_SHADER,_);function P(X){if(r.debug.checkShaderErrors){let V=i.getProgramInfoLog(y).trim(),T=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(A).trim(),j=!0,K=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,R,A);else{let J=dh(i,R,"vertex"),ae=dh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+V+`
`+J+`
`+ae)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):T!==""&&F!==""||(K=!1);K&&(X.diagnostics={runnable:j,programLog:V,vertexShader:{log:T,prefix:m},fragmentShader:{log:F,prefix:g}})}i.deleteShader(R),i.deleteShader(A),L=new lr(i,y),B=function(V,T){let F={},j=V.getProgramParameter(T,V.ACTIVE_ATTRIBUTES);for(let K=0;K<j;K++){let J=V.getActiveAttrib(T,K),ae=J.name,ge=1;J.type===V.FLOAT_MAT2&&(ge=2),J.type===V.FLOAT_MAT3&&(ge=3),J.type===V.FLOAT_MAT4&&(ge=4),F[ae]={type:J.type,location:V.getAttribLocation(T,ae),locationSize:ge}}return F}(i,y)}let L,B;i.attachShader(y,R),i.attachShader(y,A),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),this.getUniforms=function(){return L===void 0&&P(this),L},this.getAttributes=function(){return B===void 0&&P(this),B};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=i.getProgramParameter(y,37297)),W},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}var Gp=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bl(e),t.set(e,n)),n}},bl=class{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}};function Wp(r,e,t,n,i,s,a){let o=new Yr,l=new Sl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,x,v,_){let R=v.fog,A=_.geometry,P=m.isMeshStandardMaterial?v.environment:null,L=(m.isMeshStandardMaterial?t:e).get(m.envMap||P),B=L&&L.mapping===_a?L.image.height:null,W=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let X=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,V=X!==void 0?X.length:0,T,F,j,K,J=0;if(A.morphAttributes.position!==void 0&&(J=1),A.morphAttributes.normal!==void 0&&(J=2),A.morphAttributes.color!==void 0&&(J=3),W){let jn=bn[W];T=jn.vertexShader,F=jn.fragmentShader}else T=m.vertexShader,F=m.fragmentShader,l.update(m),j=l.getVertexShaderID(m),K=l.getFragmentShaderID(m);let ae=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),me=_.isInstancedMesh===!0,ie=_.isBatchedMesh===!0,oe=!!m.map,fe=!!m.matcap,ye=!!L,re=!!m.aoMap,b=!!m.lightMap,E=!!m.bumpMap,D=!!m.normalMap,N=!!m.displacementMap,C=!!m.emissiveMap,U=!!m.metalnessMap,w=!!m.roughnessMap,I=m.anisotropy>0,z=m.clearcoat>0,ee=m.dispersion>0,k=m.iridescence>0,Q=m.sheen>0,Z=m.transmission>0,te=I&&!!m.anisotropyMap,ce=z&&!!m.clearcoatMap,pe=z&&!!m.clearcoatNormalMap,we=z&&!!m.clearcoatRoughnessMap,Ue=k&&!!m.iridescenceMap,$e=k&&!!m.iridescenceThicknessMap,Ge=Q&&!!m.sheenColorMap,ve=Q&&!!m.sheenRoughnessMap,Ke=!!m.specularMap,lt=!!m.specularColorMap,Ze=!!m.specularIntensityMap,Me=Z&&!!m.transmissionMap,We=Z&&!!m.thicknessMap,st=!!m.gradientMap,Xn=!!m.alphaMap,Fi=m.alphaTest>0,_t=!!m.alphaHash,Zt=!!m.extensions,In=0;m.toneMapped&&(ae!==null&&ae.isXRRenderTarget!==!0||(In=r.toneMapping));let H={shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:T,fragmentShader:F,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:K,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ie,batchingColor:ie&&_._colorsTexture!==null,instancing:me,instancingColor:me&&_.instanceColor!==null,instancingMorph:me&&_.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:br,alphaToCoverage:!!m.alphaToCoverage,map:oe,matcap:fe,envMap:ye,envMapMode:ye&&L.mapping,envMapCubeUVHeight:B,aoMap:re,lightMap:b,bumpMap:E,normalMap:D,displacementMap:d&&N,emissiveMap:C,normalMapObjectSpace:D&&m.normalMapType===1,normalMapTangentSpace:D&&m.normalMapType===0,metalnessMap:U,roughnessMap:w,anisotropy:I,anisotropyMap:te,clearcoat:z,clearcoatMap:ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:we,dispersion:ee,iridescence:k,iridescenceMap:Ue,iridescenceThicknessMap:$e,sheen:Q,sheenColorMap:Ge,sheenRoughnessMap:ve,specularMap:Ke,specularColorMap:lt,specularIntensityMap:Ze,transmission:Z,transmissionMap:Me,thicknessMap:We,gradientMap:st,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Xn,alphaTest:Fi,alphaHash:_t,combine:m.combine,mapUv:oe&&y(m.map.channel),aoMapUv:re&&y(m.aoMap.channel),lightMapUv:b&&y(m.lightMap.channel),bumpMapUv:E&&y(m.bumpMap.channel),normalMapUv:D&&y(m.normalMap.channel),displacementMapUv:N&&y(m.displacementMap.channel),emissiveMapUv:C&&y(m.emissiveMap.channel),metalnessMapUv:U&&y(m.metalnessMap.channel),roughnessMapUv:w&&y(m.roughnessMap.channel),anisotropyMapUv:te&&y(m.anisotropyMap.channel),clearcoatMapUv:ce&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:pe&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(m.sheenRoughnessMap.channel),specularMapUv:Ke&&y(m.specularMap.channel),specularColorMapUv:lt&&y(m.specularColorMap.channel),specularIntensityMapUv:Ze&&y(m.specularIntensityMap.channel),transmissionMapUv:Me&&y(m.transmissionMap.channel),thicknessMapUv:We&&y(m.thicknessMap.channel),alphaMapUv:Xn&&y(m.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(D||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!A.attributes.uv&&(oe||Xn),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:_.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:J,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:In,decodeVideoTexture:oe&&m.map.isVideoTexture===!0&&tt.getTransfer(m.map.colorSpace)===ht,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&tt.getTransfer(m.emissiveMap.colorSpace)===ht,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Zt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&m.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return H.vertexUv1s=c.has(1),H.vertexUv2s=c.has(2),H.vertexUv3s=c.has(3),c.clear(),H},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let x in m.defines)g.push(x),g.push(m.defines[x]);return m.isRawShaderMaterial===!1&&(function(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}(g,m),function(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],x;if(g){let v=bn[g];x=Pd.clone(v.uniforms)}else x=m.uniforms;return x},acquireProgram:function(m,g){let x;for(let v=0,_=h.length;v<_;v++){let R=h[v];if(R.cacheKey===g){x=R,++x.usedTimes;break}}return x===void 0&&(x=new Vp(r,g,m,s),h.push(x)),x},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function qp(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Xp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xh(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Xp),n.length>1&&n.sort(o||vh),i.length>1&&i.sort(o||vh)}}}function jp(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new xh,r.set(e,[i])):t>=n.length?(i=new xh,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Yp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ie};break;case"SpotLight":t={position:new S,direction:new S,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new S,halfWidth:new S,halfHeight:new S}}return r[e.id]=t,t}}}var $p=0;function Zp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jp(r){let e=new Yp,t=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new S);let i=new S,s=new Oe,a=new Oe;return{setup:function(o){let l=0,c=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,d=0,p=0,f=0,y=0,m=0,g=0,x=0,v=0,_=0,R=0;o.sort(Zp);for(let P=0,L=o.length;P<L;P++){let B=o[P],W=B.color,X=B.intensity,V=B.distance,T=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)l+=W.r*X,c+=W.g*X,h+=W.b*X;else if(B.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(B.sh.coefficients[F],X);R++}else if(B.isDirectionalLight){let F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let j=B.shadow,K=t.get(B);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.directionalShadow[u]=K,n.directionalShadowMap[u]=T,n.directionalShadowMatrix[u]=B.shadow.matrix,m++}n.directional[u]=F,u++}else if(B.isSpotLight){let F=e.get(B);F.position.setFromMatrixPosition(B.matrixWorld),F.color.copy(W).multiplyScalar(X),F.distance=V,F.coneCos=Math.cos(B.angle),F.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),F.decay=B.decay,n.spot[p]=F;let j=B.shadow;if(B.map&&(n.spotLightMap[v]=B.map,v++,j.updateMatrices(B),B.castShadow&&_++),n.spotLightMatrix[p]=j.matrix,B.castShadow){let K=t.get(B);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.spotShadow[p]=K,n.spotShadowMap[p]=T,x++}p++}else if(B.isRectAreaLight){let F=e.get(B);F.color.copy(W).multiplyScalar(X),F.halfWidth.set(.5*B.width,0,0),F.halfHeight.set(0,.5*B.height,0),n.rectArea[f]=F,f++}else if(B.isPointLight){let F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),F.distance=B.distance,F.decay=B.decay,B.castShadow){let j=B.shadow,K=t.get(B);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,n.pointShadow[d]=K,n.pointShadowMap[d]=T,n.pointShadowMatrix[d]=B.shadow.matrix,g++}n.point[d]=F,d++}else if(B.isHemisphereLight){let F=e.get(B);F.skyColor.copy(B.color).multiplyScalar(X),F.groundColor.copy(B.groundColor).multiplyScalar(X),n.hemi[y]=F,y++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let A=n.hash;A.directionalLength===u&&A.pointLength===d&&A.spotLength===p&&A.rectAreaLength===f&&A.hemiLength===y&&A.numDirectionalShadows===m&&A.numPointShadows===g&&A.numSpotShadows===x&&A.numSpotMaps===v&&A.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=x+v-_,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=R,A.directionalLength=u,A.pointLength=d,A.spotLength=p,A.rectAreaLength=f,A.hemiLength=y,A.numDirectionalShadows=m,A.numPointShadows=g,A.numSpotShadows=x,A.numSpotMaps=v,A.numLightProbes=R,n.version=$p++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let y=0,m=o.length;y<m;y++){let g=o[y];if(g.isDirectionalLight){let x=n.directional[c];x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),c++}else if(g.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let x=n.rectArea[d];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),x.halfWidth.set(.5*g.width,0,0),x.halfHeight.set(0,.5*g.height,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let x=n.hemi[p];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(f),p++}}},state:n}}function yh(r){let e=new Jp(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Kp(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new yh(r),e.set(t,[s])):n>=i.length?(s=new yh(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var wl=class extends Gn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qp(r,e,t){let n=new fr,i=new ne,s=new ne,a=new dt,o=new wl({depthPacking:3201}),l=new Tl,c={},h=t.maxTextureSize,u={[zu]:1,[Mr]:0,[hi]:2},d=new rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new nt;f.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function x(A,P){let L=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(P,null,L,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(P,null,L,p,y,null)}function v(A,P,L,B){let W=null,X=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(X!==void 0)W=X;else if(W=L.isPointLight===!0?l:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let V=W.uuid,T=P.uuid,F=c[V];F===void 0&&(F={},c[V]=F);let j=F[T];j===void 0&&(j=W.clone(),F[T]=j,P.addEventListener("dispose",R)),W=j}return W.visible=P.visible,W.wireframe=P.wireframe,W.side=B===3?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],W.alphaMap=P.alphaMap,W.alphaTest=P.alphaTest,W.map=P.map,W.clipShadows=P.clipShadows,W.clippingPlanes=P.clippingPlanes,W.clipIntersection=P.clipIntersection,W.displacementMap=P.displacementMap,W.displacementScale=P.displacementScale,W.displacementBias=P.displacementBias,W.wireframeLinewidth=P.wireframeLinewidth,W.linewidth=P.linewidth,L.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(r.properties.get(W).light=L),W}function _(A,P,L,B,W){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&W===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let V=e.update(A),T=A.material;if(Array.isArray(T)){let F=V.groups;for(let j=0,K=F.length;j<K;j++){let J=F[j],ae=T[J.materialIndex];if(ae&&ae.visible){let ge=v(A,ae,B,W);A.onBeforeShadow(r,A,P,L,V,ge,J),r.renderBufferDirect(L,null,V,ge,A,J),A.onAfterShadow(r,A,P,L,V,ge,J)}}}else if(T.visible){let F=v(A,T,B,W);A.onBeforeShadow(r,A,P,L,V,F,null),r.renderBufferDirect(L,null,V,F,A,null),A.onAfterShadow(r,A,P,L,V,F,null)}}let X=A.children;for(let V=0,T=X.length;V<T;V++)_(X[V],P,L,B,W)}function R(A){A.target.removeEventListener("dispose",R);for(let P in c){let L=c[P],B=A.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}this.render=function(A,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let B=r.getRenderTarget(),W=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),V=r.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let T=g!==3&&this.type===3,F=g===3&&this.type!==3;for(let j=0,K=A.length;j<K;j++){let J=A[j],ae=J.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;i.copy(ae.mapSize);let ge=ae.getFrameExtents();if(i.multiply(ge),s.copy(ae.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ge.x),i.x=s.x*ge.x,ae.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ge.y),i.y=s.y*ge.y,ae.mapSize.y=s.y)),ae.map===null||T===!0||F===!0){let ie=this.type!==3?{minFilter:gn,magFilter:gn}:{};ae.map!==null&&ae.map.dispose(),ae.map=new xn(i.x,i.y,ie),ae.map.texture.name=J.name+".shadowMap",ae.camera.updateProjectionMatrix()}r.setRenderTarget(ae.map),r.clear();let me=ae.getViewportCount();for(let ie=0;ie<me;ie++){let oe=ae.getViewport(ie);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a),ae.updateMatrices(J,ie),n=ae.getFrustum(),_(P,L,ae.camera,J,this.type)}ae.isPointLightShadow!==!0&&this.type===3&&x(ae,L),ae.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(B,W,X)}}var em={[ed]:1,[nd]:6,[rd]:7,[id]:5,[td]:0,[ad]:2,[od]:4,[sd]:3};function tm(r,e){let t=new function(){let w=!1,I=new dt,z=null,ee=new dt(0,0,0,0);return{setMask:function(k){z===k||w||(r.colorMask(k,k,k,k),z=k)},setLocked:function(k){w=k},setClear:function(k,Q,Z,te,ce){ce===!0&&(k*=te,Q*=te,Z*=te),I.set(k,Q,Z,te),ee.equals(I)===!1&&(r.clearColor(k,Q,Z,te),ee.copy(I))},reset:function(){w=!1,z=null,ee.set(-1,0,0,0)}}},n=new function(){let w=!1,I=!1,z=null,ee=null,k=null;return{setReversed:function(Q){if(I!==Q){let Z=e.get("EXT_clip_control");I?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);let te=k;k=null,this.setClear(te)}I=Q},getReversed:function(){return I},setTest:function(Q){Q?ye(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(Q){z===Q||w||(r.depthMask(Q),z=Q)},setFunc:function(Q){if(I&&(Q=em[Q]),ee!==Q){switch(Q){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}ee=Q}},setLocked:function(Q){w=Q},setClear:function(Q){k!==Q&&(I&&(Q=1-Q),r.clearDepth(Q),k=Q)},reset:function(){w=!1,z=null,ee=null,k=null,I=!1}}},i=new function(){let w=!1,I=null,z=null,ee=null,k=null,Q=null,Z=null,te=null,ce=null;return{setTest:function(pe){w||(pe?ye(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(pe){I===pe||w||(r.stencilMask(pe),I=pe)},setFunc:function(pe,we,Ue){z===pe&&ee===we&&k===Ue||(r.stencilFunc(pe,we,Ue),z=pe,ee=we,k=Ue)},setOp:function(pe,we,Ue){Q===pe&&Z===we&&te===Ue||(r.stencilOp(pe,we,Ue),Q=pe,Z=we,te=Ue)},setLocked:function(pe){w=pe},setClear:function(pe){ce!==pe&&(r.clearStencil(pe),ce=pe)},reset:function(){w=!1,I=null,z=null,ee=null,k=null,Q=null,Z=null,te=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,y=null,m=null,g=null,x=null,v=null,_=new Ie(0,0,0),R=0,A=!1,P=null,L=null,B=null,W=null,X=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),T=!1,F=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),T=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),T=F>=2);let K=null,J={},ae=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),me=new dt().fromArray(ae),ie=new dt().fromArray(ge);function oe(w,I,z,ee){let k=new Uint8Array(4),Q=r.createTexture();r.bindTexture(w,Q),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Z=0;Z<z;Z++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(I,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,k):r.texImage2D(I+Z,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,k);return Q}let fe={};function ye(w){o[w]!==!0&&(r.enable(w),o[w]=!0)}function re(w){o[w]!==!1&&(r.disable(w),o[w]=!1)}fe[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),ye(r.DEPTH_TEST),n.setFunc(3),N(!1),C(1),ye(r.CULL_FACE),D(0);let b={[bi]:r.FUNC_ADD,[ku]:r.FUNC_SUBTRACT,[Hu]:r.FUNC_REVERSE_SUBTRACT};b[103]=r.MIN,b[104]=r.MAX;let E={[Vu]:r.ZERO,[An]:r.ONE,[Gu]:r.SRC_COLOR,[No]:r.SRC_ALPHA,[$u]:r.SRC_ALPHA_SATURATE,[ju]:r.DST_COLOR,[qu]:r.DST_ALPHA,[Wu]:r.ONE_MINUS_SRC_COLOR,[Vn]:r.ONE_MINUS_SRC_ALPHA,[Yu]:r.ONE_MINUS_DST_COLOR,[Xu]:r.ONE_MINUS_DST_ALPHA,[Zu]:r.CONSTANT_COLOR,[Ju]:r.ONE_MINUS_CONSTANT_COLOR,[Ku]:r.CONSTANT_ALPHA,[Qu]:r.ONE_MINUS_CONSTANT_ALPHA};function D(w,I,z,ee,k,Q,Z,te,ce,pe){if(w!==0){if(d===!1&&(ye(r.BLEND),d=!0),w===5)k=k||I,Q=Q||z,Z=Z||ee,I===f&&k===g||(r.blendEquationSeparate(b[I],b[k]),f=I,g=k),z===y&&ee===m&&Q===x&&Z===v||(r.blendFuncSeparate(E[z],E[ee],E[Q],E[Z]),y=z,m=ee,x=Q,v=Z),te.equals(_)!==!1&&ce===R||(r.blendColor(te.r,te.g,te.b,ce),_.copy(te),R=ce),p=w,A=!1;else if(w!==p||pe!==A){if(f===bi&&g===bi||(r.blendEquation(r.FUNC_ADD),f=bi,g=bi),pe)switch(w){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}y=null,m=null,x=null,v=null,_.set(0,0,0),R=0,p=w,A=pe}}else d===!0&&(re(r.BLEND),d=!1)}function N(w){P!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),P=w)}function C(w){w!==0?(ye(r.CULL_FACE),w!==L&&(w===1?r.cullFace(r.BACK):w===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),L=w}function U(w,I,z){w?(ye(r.POLYGON_OFFSET_FILL),W===I&&X===z||(r.polygonOffset(I,z),W=I,X=z)):re(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:ye,disable:re,bindFramebuffer:function(w,I){return l[w]!==I&&(r.bindFramebuffer(w,I),l[w]=I,w===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=I),w===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(w,I){let z=h,ee=!1;if(w){z=c.get(I),z===void 0&&(z=[],c.set(I,z));let k=w.textures;if(z.length!==k.length||z[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,Z=k.length;Q<Z;Q++)z[Q]=r.COLOR_ATTACHMENT0+Q;z.length=k.length,ee=!0}}else z[0]!==r.BACK&&(z[0]=r.BACK,ee=!0);ee&&r.drawBuffers(z)},useProgram:function(w){return u!==w&&(r.useProgram(w),u=w,!0)},setBlending:D,setMaterial:function(w,I){w.side===2?re(r.CULL_FACE):ye(r.CULL_FACE);let z=w.side===1;I&&(z=!z),N(z),w.blending===1&&w.transparent===!1?D(0):D(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),n.setFunc(w.depthFunc),n.setTest(w.depthTest),n.setMask(w.depthWrite),t.setMask(w.colorWrite);let ee=w.stencilWrite;i.setTest(ee),ee&&(i.setMask(w.stencilWriteMask),i.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),i.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),U(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:N,setCullFace:C,setLineWidth:function(w){w!==B&&(T&&r.lineWidth(w),B=w)},setPolygonOffset:U,setScissorTest:function(w){w?ye(r.SCISSOR_TEST):re(r.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=r.TEXTURE0+V-1),K!==w&&(r.activeTexture(w),K=w)},bindTexture:function(w,I,z){z===void 0&&(z=K===null?r.TEXTURE0+V-1:K);let ee=J[z];ee===void 0&&(ee={type:void 0,texture:void 0},J[z]=ee),ee.type===w&&ee.texture===I||(K!==z&&(r.activeTexture(z),K=z),r.bindTexture(w,I||fe[w]),ee.type=w,ee.texture=I)},unbindTexture:function(){let w=J[K];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,I){let z=a.get(I);z===void 0&&(z=new WeakMap,a.set(I,z));let ee=z.get(w);ee===void 0&&(ee=r.getUniformBlockIndex(I,w.name),z.set(w,ee))},uniformBlockBinding:function(w,I){let z=a.get(I).get(w);s.get(I)!==z&&(r.uniformBlockBinding(I,z,w.__bindingPointIndex),s.set(I,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){me.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),me.copy(w))},viewport:function(w){ie.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),ie.copy(w))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},K=null,J={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,y=null,m=null,g=null,x=null,v=null,_=new Ie(0,0,0),R=0,A=!1,P=null,L=null,B=null,W=null,X=null,me.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function _h(r,e,t,n){let i=function(s){switch(s){case si:case zh:return{byteLength:1,components:1};case qr:case kh:case Di:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case Ei:case oc:case kn:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(n);switch(t){case Vh:case Wh:return r*e;case qh:return r*e*2;case Xh:case hc:return r*e/i.components*i.byteLength;case jh:case uc:return r*e*2/i.components*i.byteLength;case Gh:return r*e*3/i.components*i.byteLength;case nn:case dc:return r*e*4/i.components*i.byteLength;case Ws:case qs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xs:case js:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ko:case Vo:return Math.max(r,16)*Math.max(e,8)/4;case zo:case Ho:return Math.max(r,8)*Math.max(e,8)/2;case Go:case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qo:case Xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ys:case al:case ol:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yh:case ll:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,E){return p?new OffscreenCanvas(b,E):Js("canvas")}function y(b,E,D){let N=1,C=re(b);if((C.width>D||C.height>D)&&(N=D/Math.max(C.width,C.height)),N<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let U=Math.floor(N*C.width),w=Math.floor(N*C.height);u===void 0&&(u=f(U,w));let I=E?f(U,w):u;return I.width=U,I.height=w,I.getContext("2d").drawImage(b,0,0,U,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+U+"x"+w+")."),I}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),b}return b}function m(b){return b.generateMipmaps}function g(b){r.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(b,E,D,N,C=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let U=E;if(E===r.RED&&(D===r.FLOAT&&(U=r.R32F),D===r.HALF_FLOAT&&(U=r.R16F),D===r.UNSIGNED_BYTE&&(U=r.R8)),E===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(U=r.R8UI),D===r.UNSIGNED_SHORT&&(U=r.R16UI),D===r.UNSIGNED_INT&&(U=r.R32UI),D===r.BYTE&&(U=r.R8I),D===r.SHORT&&(U=r.R16I),D===r.INT&&(U=r.R32I)),E===r.RG&&(D===r.FLOAT&&(U=r.RG32F),D===r.HALF_FLOAT&&(U=r.RG16F),D===r.UNSIGNED_BYTE&&(U=r.RG8)),E===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(U=r.RG8UI),D===r.UNSIGNED_SHORT&&(U=r.RG16UI),D===r.UNSIGNED_INT&&(U=r.RG32UI),D===r.BYTE&&(U=r.RG8I),D===r.SHORT&&(U=r.RG16I),D===r.INT&&(U=r.RG32I)),E===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(U=r.RGB8UI),D===r.UNSIGNED_SHORT&&(U=r.RGB16UI),D===r.UNSIGNED_INT&&(U=r.RGB32UI),D===r.BYTE&&(U=r.RGB8I),D===r.SHORT&&(U=r.RGB16I),D===r.INT&&(U=r.RGB32I)),E===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(U=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(U=r.RGBA16UI),D===r.UNSIGNED_INT&&(U=r.RGBA32UI),D===r.BYTE&&(U=r.RGBA8I),D===r.SHORT&&(U=r.RGBA16I),D===r.INT&&(U=r.RGBA32I)),E===r.RGB&&D===r.UNSIGNED_INT_5_9_9_9_REV&&(U=r.RGB9_E5),E===r.RGBA){let w=C?Ma:tt.getTransfer(N);D===r.FLOAT&&(U=r.RGBA32F),D===r.HALF_FLOAT&&(U=r.RGBA16F),D===r.UNSIGNED_BYTE&&(U=w===ht?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(U=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(U=r.RGB5_A1)}return U!==r.R16F&&U!==r.R32F&&U!==r.RG16F&&U!==r.RG32F&&U!==r.RGBA16F&&U!==r.RGBA32F||e.get("EXT_color_buffer_float"),U}function _(b,E){let D;return b?E===null||E===Ei||E===ur?D=r.DEPTH24_STENCIL8:E===kn?D=r.DEPTH32F_STENCIL8:E===qr&&(D=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ei||E===ur?D=r.DEPTH_COMPONENT24:E===kn?D=r.DEPTH_COMPONENT32F:E===qr&&(D=r.DEPTH_COMPONENT16),D}function R(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function A(b){let E=b.target;E.removeEventListener("dispose",A),function(D){let N=n.get(D);if(N.__webglInit===void 0)return;let C=D.source,U=d.get(C);if(U){let w=U[N.__cacheKey];w.usedTimes--,w.usedTimes===0&&L(D),Object.keys(U).length===0&&d.delete(C)}n.remove(D)}(E),E.isVideoTexture&&h.delete(E)}function P(b){let E=b.target;E.removeEventListener("dispose",P),function(D){let N=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(N.__webglFramebuffer[U]))for(let w=0;w<N.__webglFramebuffer[U].length;w++)r.deleteFramebuffer(N.__webglFramebuffer[U][w]);else r.deleteFramebuffer(N.__webglFramebuffer[U]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[U])}else{if(Array.isArray(N.__webglFramebuffer))for(let U=0;U<N.__webglFramebuffer.length;U++)r.deleteFramebuffer(N.__webglFramebuffer[U]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let U=0;U<N.__webglColorRenderbuffer.length;U++)N.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[U]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let C=D.textures;for(let U=0,w=C.length;U<w;U++){let I=n.get(C[U]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(C[U])}n.remove(D)}(E)}function L(b){let E=n.get(b);r.deleteTexture(E.__webglTexture);let D=b.source;delete d.get(D)[E.__cacheKey],a.memory.textures--}let B=0;function W(b,E){let D=n.get(b);if(b.isVideoTexture&&function(N){let C=a.render.frame;h.get(N)!==C&&(h.set(N,C),N.update())}(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){let N=b.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void K(D,b,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+E)}let X={[Gr]:r.REPEAT,[Wr]:r.CLAMP_TO_EDGE,[Bo]:r.MIRRORED_REPEAT},V={[gn]:r.NEAREST,[ld]:r.NEAREST_MIPMAP_NEAREST,[ds]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[Ka]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},T={[cd]:r.NEVER,[gd]:r.ALWAYS,[hd]:r.LESS,[dd]:r.LEQUAL,[ud]:r.EQUAL,[fd]:r.GEQUAL,[pd]:r.GREATER,[md]:r.NOTEQUAL};function F(b,E){if(E.type!==kn||e.has("OES_texture_float_linear")!==!1||E.magFilter!==tn&&E.magFilter!==Ka&&E.magFilter!==ds&&E.magFilter!==rr&&E.minFilter!==tn&&E.minFilter!==Ka&&E.minFilter!==ds&&E.minFilter!==rr||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,X[E.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,V[E.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,V[E.minFilter]),E.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,T[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gn||E.minFilter!==ds&&E.minFilter!==rr||E.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function j(b,E){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",A));let N=E.source,C=d.get(N);C===void 0&&(C={},d.set(N,C));let U=function(w){let I=[];return I.push(w.wrapS),I.push(w.wrapT),I.push(w.wrapR||0),I.push(w.magFilter),I.push(w.minFilter),I.push(w.anisotropy),I.push(w.internalFormat),I.push(w.format),I.push(w.type),I.push(w.generateMipmaps),I.push(w.premultiplyAlpha),I.push(w.flipY),I.push(w.unpackAlignment),I.push(w.colorSpace),I.join()}(E);if(U!==b.__cacheKey){C[U]===void 0&&(C[U]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),C[U].usedTimes++;let w=C[b.__cacheKey];w!==void 0&&(C[b.__cacheKey].usedTimes--,w.usedTimes===0&&L(E)),b.__cacheKey=U,b.__webglTexture=C[U].texture}return D}function K(b,E,D){let N=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(N=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(N=r.TEXTURE_3D);let C=j(b,E),U=E.source;t.bindTexture(N,b.__webglTexture,r.TEXTURE0+D);let w=n.get(U);if(U.version!==w.__version||C===!0){t.activeTexture(r.TEXTURE0+D);let I=tt.getPrimaries(tt.workingColorSpace),z=E.colorSpace===nr?null:tt.getPrimaries(E.colorSpace),ee=E.colorSpace===nr||I===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let k=y(E.image,!1,i.maxTextureSize);k=ye(E,k);let Q=s.convert(E.format,E.colorSpace),Z=s.convert(E.type),te,ce=v(E.internalFormat,Q,Z,E.colorSpace,E.isVideoTexture);F(N,E);let pe=E.mipmaps,we=E.isVideoTexture!==!0,Ue=w.__version===void 0||C===!0,$e=U.dataReady,Ge=R(E,k);if(E.isDepthTexture)ce=_(E.format===dr,E.type),Ue&&(we?t.texStorage2D(r.TEXTURE_2D,1,ce,k.width,k.height):t.texImage2D(r.TEXTURE_2D,0,ce,k.width,k.height,0,Q,Z,null));else if(E.isDataTexture)if(pe.length>0){we&&Ue&&t.texStorage2D(r.TEXTURE_2D,Ge,ce,pe[0].width,pe[0].height);for(let ve=0,Ke=pe.length;ve<Ke;ve++)te=pe[ve],we?$e&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,te.width,te.height,Q,Z,te.data):t.texImage2D(r.TEXTURE_2D,ve,ce,te.width,te.height,0,Q,Z,te.data);E.generateMipmaps=!1}else we?(Ue&&t.texStorage2D(r.TEXTURE_2D,Ge,ce,k.width,k.height),$e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,k.width,k.height,Q,Z,k.data)):t.texImage2D(r.TEXTURE_2D,0,ce,k.width,k.height,0,Q,Z,k.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,ce,pe[0].width,pe[0].height,k.depth);for(let ve=0,Ke=pe.length;ve<Ke;ve++)if(te=pe[ve],E.format!==nn)if(Q!==null)if(we){if($e)if(E.layerUpdates.size>0){let lt=_h(te.width,te.height,E.format,E.type);for(let Ze of E.layerUpdates){let Me=te.data.subarray(Ze*lt/te.data.BYTES_PER_ELEMENT,(Ze+1)*lt/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Ze,te.width,te.height,1,Q,Me)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,te.width,te.height,k.depth,Q,te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ce,te.width,te.height,k.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?$e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,te.width,te.height,k.depth,Q,Z,te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,ce,te.width,te.height,k.depth,0,Q,Z,te.data)}else{we&&Ue&&t.texStorage2D(r.TEXTURE_2D,Ge,ce,pe[0].width,pe[0].height);for(let ve=0,Ke=pe.length;ve<Ke;ve++)te=pe[ve],E.format!==nn?Q!==null?we?$e&&t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,te.width,te.height,Q,te.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,ce,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?$e&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,te.width,te.height,Q,Z,te.data):t.texImage2D(r.TEXTURE_2D,ve,ce,te.width,te.height,0,Q,Z,te.data)}else if(E.isDataArrayTexture)if(we){if(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,ce,k.width,k.height,k.depth),$e)if(E.layerUpdates.size>0){let ve=_h(k.width,k.height,E.format,E.type);for(let Ke of E.layerUpdates){let lt=k.data.subarray(Ke*ve/k.data.BYTES_PER_ELEMENT,(Ke+1)*ve/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ke,k.width,k.height,1,Q,Z,lt)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Q,Z,k.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,k.width,k.height,k.depth,0,Q,Z,k.data);else if(E.isData3DTexture)we?(Ue&&t.texStorage3D(r.TEXTURE_3D,Ge,ce,k.width,k.height,k.depth),$e&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Q,Z,k.data)):t.texImage3D(r.TEXTURE_3D,0,ce,k.width,k.height,k.depth,0,Q,Z,k.data);else if(E.isFramebufferTexture){if(Ue)if(we)t.texStorage2D(r.TEXTURE_2D,Ge,ce,k.width,k.height);else{let ve=k.width,Ke=k.height;for(let lt=0;lt<Ge;lt++)t.texImage2D(r.TEXTURE_2D,lt,ce,ve,Ke,0,Q,Z,null),ve>>=1,Ke>>=1}}else if(pe.length>0){if(we&&Ue){let ve=re(pe[0]);t.texStorage2D(r.TEXTURE_2D,Ge,ce,ve.width,ve.height)}for(let ve=0,Ke=pe.length;ve<Ke;ve++)te=pe[ve],we?$e&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Q,Z,te):t.texImage2D(r.TEXTURE_2D,ve,ce,Q,Z,te);E.generateMipmaps=!1}else if(we){if(Ue){let ve=re(k);t.texStorage2D(r.TEXTURE_2D,Ge,ce,ve.width,ve.height)}$e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,Z,k)}else t.texImage2D(r.TEXTURE_2D,0,ce,Q,Z,k);m(E)&&g(N),w.__version=U.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function J(b,E,D,N,C,U){let w=s.convert(D.format,D.colorSpace),I=s.convert(D.type),z=v(D.internalFormat,w,I,D.colorSpace),ee=n.get(E),k=n.get(D);if(k.__renderTarget=E,!ee.__hasExternalTextures){let Q=Math.max(1,E.width>>U),Z=Math.max(1,E.height>>U);C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?t.texImage3D(C,U,z,Q,Z,E.depth,0,w,I,null):t.texImage2D(C,U,z,Q,Z,0,w,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),fe(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,N,C,k.__webglTexture,0,oe(E)):(C===r.TEXTURE_2D||C>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,N,C,k.__webglTexture,U),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(b,E,D){if(r.bindRenderbuffer(r.RENDERBUFFER,b),E.depthBuffer){let N=E.depthTexture,C=N&&N.isDepthTexture?N.type:null,U=_(E.stencilBuffer,C),w=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=oe(E);fe(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I,U,E.width,E.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,I,U,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,U,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,w,r.RENDERBUFFER,b)}else{let N=E.textures;for(let C=0;C<N.length;C++){let U=N[C],w=s.convert(U.format,U.colorSpace),I=s.convert(U.type),z=v(U.internalFormat,w,I,U.colorSpace),ee=oe(E);D&&fe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,z,E.width,E.height):fe(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,z,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(b){let E=n.get(b),D=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){let N=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),N){let C=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,N.removeEventListener("dispose",C)};N.addEventListener("dispose",C),E.__depthDisposeCallback=C}E.__boundDepthTexture=N}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(C.depthTexture);U.__renderTarget=C,U.__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);let w=U.__webglTexture,I=oe(C);if(C.depthTexture.format===Xr)fe(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,w,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,w,0);else{if(C.depthTexture.format!==dr)throw new Error("Unknown depthTexture format");fe(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,w,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,w,0)}})(E.__webglFramebuffer,b)}else if(D){E.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[N]),E.__webglDepthbuffer[N]===void 0)E.__webglDepthbuffer[N]=r.createRenderbuffer(),ae(E.__webglDepthbuffer[N],b,!1);else{let C=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=E.__webglDepthbuffer[N];r.bindRenderbuffer(r.RENDERBUFFER,U),r.framebufferRenderbuffer(r.FRAMEBUFFER,C,r.RENDERBUFFER,U)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ae(E.__webglDepthbuffer,b,!1);else{let N=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,N,r.RENDERBUFFER,C)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let me=[],ie=[];function oe(b){return Math.min(i.maxSamples,b.samples)}function fe(b){let E=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(b,E){let D=b.colorSpace,N=b.format,C=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==br&&D!==nr&&(tt.getTransfer(D)===ht?N===nn&&C===si||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),E}function re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=function(){let b=B;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),B+=1,b},this.resetTextureUnits=function(){B=0},this.setTexture2D=W,this.setTexture2DArray=function(b,E){let D=n.get(b);b.version>0&&D.__version!==b.version?K(D,b,E):t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(b,E){let D=n.get(b);b.version>0&&D.__version!==b.version?K(D,b,E):t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(b,E){let D=n.get(b);b.version>0&&D.__version!==b.version?function(N,C,U){if(C.image.length!==6)return;let w=j(N,C),I=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+U);let z=n.get(I);if(I.version!==z.__version||w===!0){t.activeTexture(r.TEXTURE0+U);let ee=tt.getPrimaries(tt.workingColorSpace),k=C.colorSpace===nr?null:tt.getPrimaries(C.colorSpace),Q=C.colorSpace===nr||ee===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let Z=C.isCompressedTexture||C.image[0].isCompressedTexture,te=C.image[0]&&C.image[0].isDataTexture,ce=[];for(let Me=0;Me<6;Me++)ce[Me]=Z||te?te?C.image[Me].image:C.image[Me]:y(C.image[Me],!0,i.maxCubemapSize),ce[Me]=ye(C,ce[Me]);let pe=ce[0],we=s.convert(C.format,C.colorSpace),Ue=s.convert(C.type),$e=v(C.internalFormat,we,Ue,C.colorSpace),Ge=C.isVideoTexture!==!0,ve=z.__version===void 0||w===!0,Ke=I.dataReady,lt,Ze=R(C,pe);if(F(r.TEXTURE_CUBE_MAP,C),Z){Ge&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,$e,pe.width,pe.height);for(let Me=0;Me<6;Me++){lt=ce[Me].mipmaps;for(let We=0;We<lt.length;We++){let st=lt[We];C.format!==nn?we!==null?Ge?Ke&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,st.width,st.height,we,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,$e,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,st.width,st.height,we,Ue,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,$e,st.width,st.height,0,we,Ue,st.data)}}}else{if(lt=C.mipmaps,Ge&&ve){lt.length>0&&Ze++;let Me=re(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,$e,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(te){Ge?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ce[Me].width,ce[Me].height,we,Ue,ce[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,$e,ce[Me].width,ce[Me].height,0,we,Ue,ce[Me].data);for(let We=0;We<lt.length;We++){let st=lt[We].image[Me].image;Ge?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,st.width,st.height,we,Ue,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,$e,st.width,st.height,0,we,Ue,st.data)}}else{Ge?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,we,Ue,ce[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,$e,we,Ue,ce[Me]);for(let We=0;We<lt.length;We++){let st=lt[We];Ge?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,we,Ue,st.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,$e,we,Ue,st.image[Me])}}}m(C)&&g(r.TEXTURE_CUBE_MAP),z.__version=I.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}(D,b,E):t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(b,E,D){let N=n.get(b);E!==void 0&&J(N.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&ge(b)},this.setupRenderTarget=function(b){let E=b.texture,D=n.get(b),N=n.get(E);b.addEventListener("dispose",P);let C=b.textures,U=b.isWebGLCubeRenderTarget===!0,w=C.length>1;if(w||(N.__webglTexture===void 0&&(N.__webglTexture=r.createTexture()),N.__version=E.version,a.memory.textures++),U){D.__webglFramebuffer=[];for(let I=0;I<6;I++)if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer[I]=[];for(let z=0;z<E.mipmaps.length;z++)D.__webglFramebuffer[I][z]=r.createFramebuffer()}else D.__webglFramebuffer[I]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer=[];for(let I=0;I<E.mipmaps.length;I++)D.__webglFramebuffer[I]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(w)for(let I=0,z=C.length;I<z;I++){let ee=n.get(C[I]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&fe(b)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){let z=C[I];D.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[I]);let ee=s.convert(z.format,z.colorSpace),k=s.convert(z.type),Q=v(z.internalFormat,ee,k,z.colorSpace,b.isXRRenderTarget===!0),Z=oe(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,Q,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+I,r.RENDERBUFFER,D.__webglColorRenderbuffer[I])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(U){t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture),F(r.TEXTURE_CUBE_MAP,E);for(let I=0;I<6;I++)if(E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)J(D.__webglFramebuffer[I][z],b,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,z);else J(D.__webglFramebuffer[I],b,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);m(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){for(let I=0,z=C.length;I<z;I++){let ee=C[I],k=n.get(ee);t.bindTexture(r.TEXTURE_2D,k.__webglTexture),F(r.TEXTURE_2D,ee),J(D.__webglFramebuffer,b,ee,r.COLOR_ATTACHMENT0+I,r.TEXTURE_2D,0),m(ee)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(I=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(I,N.__webglTexture),F(I,E),E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)J(D.__webglFramebuffer[z],b,E,r.COLOR_ATTACHMENT0,I,z);else J(D.__webglFramebuffer,b,E,r.COLOR_ATTACHMENT0,I,0);m(E)&&g(I),t.unbindTexture()}b.depthBuffer&&ge(b)},this.updateRenderTargetMipmap=function(b){let E=b.textures;for(let D=0,N=E.length;D<N;D++){let C=E[D];if(m(C)){let U=x(b),w=n.get(C).__webglTexture;t.bindTexture(U,w),g(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(fe(b)===!1){let E=b.textures,D=b.width,N=b.height,C=r.COLOR_BUFFER_BIT,U=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=n.get(b),I=E.length>1;if(I)for(let z=0;z<E.length;z++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let z=0;z<E.length;z++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(C|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(C|=r.STENCIL_BUFFER_BIT)),I){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,w.__webglColorRenderbuffer[z]);let ee=n.get(E[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,D,N,0,0,D,N,C,r.NEAREST),l===!0&&(me.length=0,ie.length=0,me.push(r.COLOR_ATTACHMENT0+z),b.depthBuffer&&b.resolveDepthBuffer===!1&&(me.push(U),ie.push(U),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),I)for(let z=0;z<E.length;z++){t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,w.__webglColorRenderbuffer[z]);let ee=n.get(E[z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let E=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}},this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=J,this.useMultisampledRTT=fe}function im(r,e){return{convert:function(t,n=""){let i,s=tt.getTransfer(n);if(t===si)return r.UNSIGNED_BYTE;if(t===lc)return r.UNSIGNED_SHORT_4_4_4_4;if(t===cc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===zh)return r.BYTE;if(t===kh)return r.SHORT;if(t===qr)return r.UNSIGNED_SHORT;if(t===oc)return r.INT;if(t===Ei)return r.UNSIGNED_INT;if(t===kn)return r.FLOAT;if(t===Di)return r.HALF_FLOAT;if(t===Vh)return r.ALPHA;if(t===Gh)return r.RGB;if(t===nn)return r.RGBA;if(t===Wh)return r.LUMINANCE;if(t===qh)return r.LUMINANCE_ALPHA;if(t===Xr)return r.DEPTH_COMPONENT;if(t===dr)return r.DEPTH_STENCIL;if(t===Xh)return r.RED;if(t===hc)return r.RED_INTEGER;if(t===jh)return r.RG;if(t===uc)return r.RG_INTEGER;if(t===dc)return r.RGBA_INTEGER;if(t===Ws||t===qs||t===Xs||t===js)if(s===ht){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Ws)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===qs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Xs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===js)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Ws)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===qs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Xs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===js)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===zo||t===ko||t===Ho||t===Vo){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===zo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ko)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ho)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Vo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Go||t===Wo||t===qo){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Go||t===Wo)return s===ht?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===qo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Xo||t===jo||t===Yo||t===$o||t===Zo||t===Jo||t===Ko||t===Qo||t===el||t===tl||t===nl||t===il||t===rl||t===sl){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Xo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===jo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Yo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===$o)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Zo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Jo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ko)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Qo)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===el)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===tl)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===nl)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===il)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===rl)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===sl)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ys||t===al||t===ol){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Ys)return s===ht?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===al)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ol)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Yh||t===ll||t===cl||t===hl){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Ys)return i.COMPRESSED_RED_RGTC1_EXT;if(t===ll)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===cl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===hl)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ur?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var El=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},At=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rm={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new $t;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends ai{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,y=new Al,m=t.getContextAttributes(),g=null,x=null,v=[],_=[],R=new ne,A=null,P=new kt;P.viewport=new dt;let L=new kt;L.viewport=new dt;let B=[P,L],W=new El,X=null,V=null;function T(ie){let oe=_.indexOf(ie.inputSource);if(oe===-1)return;let fe=v[oe];fe!==void 0&&(fe.update(ie.inputSource,ie.frame,c||a),fe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",j);for(let ie=0;ie<v.length;ie++){let oe=_[ie];oe!==null&&(_[ie]=null,v[ie].disconnect(oe))}X=null,V=null,y.reset(),e.setRenderTarget(g),p=null,d=null,u=null,i=null,x=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function j(ie){for(let oe=0;oe<ie.removed.length;oe++){let fe=ie.removed[oe],ye=_.indexOf(fe);ye>=0&&(_[ye]=null,v[ye].disconnect(fe))}for(let oe=0;oe<ie.added.length;oe++){let fe=ie.added[oe],ye=_.indexOf(fe);if(ye===-1){for(let b=0;b<v.length;b++){if(b>=_.length){_.push(fe),ye=b;break}if(_[b]===null){_[b]=fe,ye=b;break}}if(ye===-1)break}let re=v[ye];re&&re.connect(fe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=v[ie];return oe===void 0&&(oe=new kr,v[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=v[ie];return oe===void 0&&(oe=new kr,v[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=v[ie];return oe===void 0&&(oe=new kr,v[ie]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new xn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,fe=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?dr:Xr,fe=m.stencil?ur:Ei);let re={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new xn(d.textureWidth,d.textureHeight,{format:nn,type:si,depthTexture:new ia(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let K=new S,J=new S;function ae(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let oe=ie.near,fe=ie.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),W.near=L.near=P.near=oe,W.far=L.far=P.far=fe,X===W.near&&V===W.far||(i.updateRenderState({depthNear:W.near,depthFar:W.far}),X=W.near,V=W.far),P.layers.mask=2|ie.layers.mask,L.layers.mask=4|ie.layers.mask,W.layers.mask=P.layers.mask|L.layers.mask;let ye=ie.parent,re=W.cameras;ae(W,ye);for(let b=0;b<re.length;b++)ae(re[b],ye);re.length===2?function(b,E,D){K.setFromMatrixPosition(E.matrixWorld),J.setFromMatrixPosition(D.matrixWorld);let N=K.distanceTo(J),C=E.projectionMatrix.elements,U=D.projectionMatrix.elements,w=C[14]/(C[10]-1),I=C[14]/(C[10]+1),z=(C[9]+1)/C[5],ee=(C[9]-1)/C[5],k=(C[8]-1)/C[0],Q=(U[8]+1)/U[0],Z=w*k,te=w*Q,ce=N/(-k+Q),pe=ce*-k;if(E.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(pe),b.translateZ(ce),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),C[10]===-1)b.projectionMatrix.copy(E.projectionMatrix),b.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{let we=w+ce,Ue=I+ce,$e=Z-pe,Ge=te+(N-pe),ve=z*I/Ue*we,Ke=ee*I/Ue*we;b.projectionMatrix.makePerspective($e,Ge,ve,Ke,we,Ue),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}(W,P,L):W.projectionMatrix.copy(P.projectionMatrix),function(b,E,D){D===null?b.matrix.copy(E.matrixWorld):(b.matrix.copy(D.matrixWorld),b.matrix.invert(),b.matrix.multiply(E.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(E.projectionMatrix),b.projectionMatrixInverse.copy(E.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*jr*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}(ie,W,ye)},this.getCamera=function(){return W},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)};let ge=null,me=new Kh;me.setAnimationLoop(function(ie,oe){if(h=oe.getViewerPose(c||a),f=oe,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ye=!1;fe.length!==W.cameras.length&&(W.cameras.length=0,ye=!0);for(let b=0;b<fe.length;b++){let E=fe[b],D=null;if(p!==null)D=p.getViewport(E);else{let C=u.getViewSubImage(d,E);D=C.viewport,b===0&&(e.setRenderTargetTextures(x,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(x))}let N=B[b];N===void 0&&(N=new kt,N.layers.enable(b),N.viewport=new dt,B[b]=N),N.matrix.fromArray(E.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(E.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(D.x,D.y,D.width,D.height),b===0&&(W.matrix.copy(N.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ye===!0&&W.cameras.push(N)}let re=i.enabledFeatures;if(re&&re.includes("depth-sensing")){let b=u.getDepthInformation(fe[0]);b&&b.isValid&&b.texture&&y.init(e,b,i.renderState)}}for(let fe=0;fe<v.length;fe++){let ye=_[fe],re=v[fe];ye!==null&&re!==void 0&&re.update(ye,oe,c||a)}ge&&ge(ie,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),f=null}),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}},Mi=new Tn,sm=new Oe;function am(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Mi.copy(l),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),i.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Mi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Jh(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function om(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let y=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let g=f[m];if(typeof y=="number"||typeof y=="boolean"){if(g!==y)return f[m]=y,!0}else if(g.equals(y)===!1)return g.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(m){let g=m.uniforms,x=0,v=16;for(let R=0,A=g.length;R<A;R++){let P=Array.isArray(g[R])?g[R]:[g[R]];for(let L=0,B=P.length;L<B;L++){let W=P[L],X=Array.isArray(W.value)?W.value:[W.value];for(let V=0,T=X.length;V<T;V++){let F=c(X[V]),j=x%v,K=j%F.boundary,J=j+K;x+=K,J!==0&&v-J<F.storage&&(x+=v-J),W.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=F.storage}}}let _=x%v;_>0&&(x+=v-_),m.__size=x,m.__cache={}}(u),p=function(m){let g=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=g;let x=r.createBuffer(),v=m.__size,_=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,v,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,x),x}(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let y=e.render.frame;s[u.id]!==y&&(function(m){let g=i[m.id],x=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let _=0,R=x.length;_<R;_++){let A=Array.isArray(x[_])?x[_]:[x[_]];for(let P=0,L=A.length;P<L;P++){let B=A[P];if(l(B,_,P,v)===!0){let W=B.__offset,X=Array.isArray(B.value)?B.value:[B.value],V=0;for(let T=0;T<X.length;T++){let F=X[T],j=c(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,W+V,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),s[u.id]=y)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var ra=class{constructor(e={}){let{canvas:t=vd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),y=new Int32Array(4),m=null,g=null,x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=0,this.toneMappingExposure=1;let _=this,R=!1,A=0,P=0,L=null,B=-1,W=null,X=new dt,V=new dt,T=null,F=new Ie(0),j=0,K=t.width,J=t.height,ae=1,ge=null,me=null,ie=new dt(0,0,K,J),oe=new dt(0,0,K,J),fe=!1,ye=new fr,re=!1,b=!1,E=new Oe,D=new Oe,N=new S,C=new dt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},w=!1;function I(){return L===null?ae:1}let z,ee,k,Q,Z,te,ce,pe,we,Ue,$e,Ge,ve,Ke,lt,Ze,Me,We,st,Xn,Fi,_t,Zt,In,H=n;function jn(M,O){return t.getContext(M,O)}try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",Ln,!1),t.addEventListener("webglcontextrestored",Bi,!1),t.addEventListener("webglcontextcreationerror",pi,!1),H===null){let O="webgl2";if(H=jn(O,M),H===null)throw jn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}function Rr(){z=new Vd(H),z.init(),_t=new im(H,z),ee=new Bd(H,z,e,_t),k=new tm(H,z),ee.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),Q=new qd(H),Z=new qp,te=new nm(H,z,k,Z,ee,_t,Q),ce=new kd(_),pe=new Hd(_),we=new Dd(H),Zt=new Od(H,we),Ue=new Gd(H,we,Q,Zt),$e=new jd(H,Ue,we,Q),st=new Xd(H,ee,te),Ze=new zd(Z),Ge=new Wp(_,ce,pe,z,ee,Zt,Ze),ve=new am(_,Z),Ke=new jp,lt=new Kp(z),We=new Nd(_,ce,pe,k,$e,p,l),Me=new Qp(_,$e,ee),In=new om(H,Q,ee,k),Xn=new Fd(H,z,Q),Fi=new Wd(H,z,Q),Q.programs=Ge.programs,_.capabilities=ee,_.extensions=z,_.properties=Z,_.renderLists=Ke,_.shadowMap=Me,_.state=k,_.info=Q}Rr();let wt=new Rl(_,H);function Ln(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Bi(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=Q.autoReset,O=Me.enabled,q=Me.autoUpdate,$=Me.needsUpdate,G=Me.type;Rr(),Q.autoReset=M,Me.enabled=O,Me.autoUpdate=q,Me.needsUpdate=$,Me.type=G}function pi(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qe(M){let O=M.target;O.removeEventListener("dispose",Qe),function(q){(function($){let G=Z.get($).programs;G!==void 0&&(G.forEach(function(se){Ge.releaseProgram(se)}),$.isShaderMaterial&&Ge.releaseShaderCache($))})(q),Z.remove(q)}(O)}function zi(M,O,q){M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,Ne(M,O,q),M.side=0,M.needsUpdate=!0,Ne(M,O,q),M.side=2):Ne(M,O,q)}this.xr=wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let M=z.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=z.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize(K,J,!1))},this.getSize=function(M){return M.set(K,J)},this.setSize=function(M,O,q=!0){wt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(K=M,J=O,t.width=Math.floor(M*ae),t.height=Math.floor(O*ae),q===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O))},this.getDrawingBufferSize=function(M){return M.set(K*ae,J*ae).floor()},this.setDrawingBufferSize=function(M,O,q){K=M,J=O,ae=q,t.width=Math.floor(M*q),t.height=Math.floor(O*q),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(ie)},this.setViewport=function(M,O,q,$){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,O,q,$),k.viewport(X.copy(ie).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,O,q,$){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,O,q,$),k.scissor(V.copy(oe).multiplyScalar(ae).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){k.setScissorTest(fe=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){me=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(M=!0,O=!0,q=!0){let $=0;if(M){let G=!1;if(L!==null){let se=L.texture.format;G=se===dc||se===uc||se===hc}if(G){let se=L.texture.type,he=se===si||se===Ei||se===qr||se===ur||se===lc||se===cc,xe=We.getClearColor(),Te=We.getClearAlpha(),Le=xe.r,Be=xe.g,Re=xe.b;he?(f[0]=Le,f[1]=Be,f[2]=Re,f[3]=Te,H.clearBufferuiv(H.COLOR,0,f)):(y[0]=Le,y[1]=Be,y[2]=Re,y[3]=Te,H.clearBufferiv(H.COLOR,0,y))}else $|=H.COLOR_BUFFER_BIT}O&&($|=H.DEPTH_BUFFER_BIT),q&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ln,!1),t.removeEventListener("webglcontextrestored",Bi,!1),t.removeEventListener("webglcontextcreationerror",pi,!1),Ke.dispose(),lt.dispose(),Z.dispose(),ce.dispose(),pe.dispose(),$e.dispose(),Zt.dispose(),In.dispose(),Ge.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Hi),wt.removeEventListener("sessionend",hn),Y.stop()},this.renderBufferDirect=function(M,O,q,$,G,se){O===null&&(O=U);let he=G.isMesh&&G.matrixWorld.determinant()<0,xe=function(ze,mt,ut,_e,Ae){mt.isScene!==!0&&(mt=U),te.resetTextureUnits();let Lt=mt.fog,Dn=_e.isMeshStandardMaterial?mt.environment:null,Yn=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:br,et=(_e.isMeshStandardMaterial?pe:ce).get(_e.envMap||Dn),Jt=_e.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Kt=!!ut.attributes.tangent&&(!!_e.normalMap||_e.anisotropy>0),$n=!!ut.morphAttributes.position,Vt=!!ut.morphAttributes.normal,Ya=!!ut.morphAttributes.color,Cr=0;_e.toneMapped&&(L!==null&&L.isXRRenderTarget!==!0||(Cr=_.toneMapping));let us=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$a=us!==void 0?us.length:0,qe=Z.get(_e),Vi=g.state.lights;if(re===!0&&(b===!0||ze!==W)){let Qt=ze===W&&_e.id===B;Ze.setState(_e,ze,Qt)}let un=!1;_e.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==Vi.state.version||qe.outputColorSpace!==Yn||Ae.isBatchedMesh&&qe.batching===!1?un=!0:Ae.isBatchedMesh||qe.batching!==!0?Ae.isBatchedMesh&&qe.batchingColor===!0&&Ae.colorTexture===null||Ae.isBatchedMesh&&qe.batchingColor===!1&&Ae.colorTexture!==null||Ae.isInstancedMesh&&qe.instancing===!1?un=!0:Ae.isInstancedMesh||qe.instancing!==!0?Ae.isSkinnedMesh&&qe.skinning===!1?un=!0:Ae.isSkinnedMesh||qe.skinning!==!0?Ae.isInstancedMesh&&qe.instancingColor===!0&&Ae.instanceColor===null||Ae.isInstancedMesh&&qe.instancingColor===!1&&Ae.instanceColor!==null||Ae.isInstancedMesh&&qe.instancingMorph===!0&&Ae.morphTexture===null||Ae.isInstancedMesh&&qe.instancingMorph===!1&&Ae.morphTexture!==null||qe.envMap!==et||_e.fog===!0&&qe.fog!==Lt?un=!0:qe.numClippingPlanes===void 0||qe.numClippingPlanes===Ze.numPlanes&&qe.numIntersection===Ze.numIntersection?(qe.vertexAlphas!==Jt||qe.vertexTangents!==Kt||qe.morphTargets!==$n||qe.morphNormals!==Vt||qe.morphColors!==Ya||qe.toneMapping!==Cr||qe.morphTargetsCount!==$a)&&(un=!0):un=!0:un=!0:un=!0:un=!0:(un=!0,qe.__version=_e.version);let mi=qe.currentProgram;un===!0&&(mi=Ne(_e,mt,Ae));let bc=!1,Pr=!1,Za=!1,bt=mi.getUniforms(),Zn=qe.uniforms;if(k.useProgram(mi.program)&&(bc=!0,Pr=!0,Za=!0),_e.id!==B&&(B=_e.id,Pr=!0),bc||W!==ze){k.buffers.depth.getReversed()?(E.copy(ze.projectionMatrix),function(fi){let gt=fi.elements;gt[2]=.5*gt[2]+.5*gt[3],gt[6]=.5*gt[6]+.5*gt[7],gt[10]=.5*gt[10]+.5*gt[11],gt[14]=.5*gt[14]+.5*gt[15]}(E),function(fi){let gt=fi.elements;gt[11]===-1?(gt[10]=-gt[10]-1,gt[14]=-gt[14]):(gt[10]=-gt[10],gt[14]=1-gt[14])}(E),bt.setValue(H,"projectionMatrix",E)):bt.setValue(H,"projectionMatrix",ze.projectionMatrix),bt.setValue(H,"viewMatrix",ze.matrixWorldInverse);let Qt=bt.map.cameraPosition;Qt!==void 0&&Qt.setValue(H,N.setFromMatrixPosition(ze.matrixWorld)),ee.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(_e.isMeshPhongMaterial||_e.isMeshToonMaterial||_e.isMeshLambertMaterial||_e.isMeshBasicMaterial||_e.isMeshStandardMaterial||_e.isShaderMaterial)&&bt.setValue(H,"isOrthographic",ze.isOrthographicCamera===!0),W!==ze&&(W=ze,Pr=!0,Za=!0)}if(Ae.isSkinnedMesh){bt.setOptional(H,Ae,"bindMatrix"),bt.setOptional(H,Ae,"bindMatrixInverse");let Qt=Ae.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),bt.setValue(H,"boneTexture",Qt.boneTexture,te))}Ae.isBatchedMesh&&(bt.setOptional(H,Ae,"batchingTexture"),bt.setValue(H,"batchingTexture",Ae._matricesTexture,te),bt.setOptional(H,Ae,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",Ae._indirectTexture,te),bt.setOptional(H,Ae,"batchingColorTexture"),Ae._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",Ae._colorsTexture,te));let Ja=ut.morphAttributes;Ja.position===void 0&&Ja.normal===void 0&&Ja.color===void 0||st.update(Ae,ut,mi),(Pr||qe.receiveShadow!==Ae.receiveShadow)&&(qe.receiveShadow=Ae.receiveShadow,bt.setValue(H,"receiveShadow",Ae.receiveShadow)),_e.isMeshGouraudMaterial&&_e.envMap!==null&&(Zn.envMap.value=et,Zn.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),_e.isMeshStandardMaterial&&_e.envMap===null&&mt.environment!==null&&(Zn.envMapIntensity.value=mt.environmentIntensity),Pr&&(bt.setValue(H,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&(dn=Za,(Sn=Zn).ambientLightColor.needsUpdate=dn,Sn.lightProbe.needsUpdate=dn,Sn.directionalLights.needsUpdate=dn,Sn.directionalLightShadows.needsUpdate=dn,Sn.pointLights.needsUpdate=dn,Sn.pointLightShadows.needsUpdate=dn,Sn.spotLights.needsUpdate=dn,Sn.spotLightShadows.needsUpdate=dn,Sn.rectAreaLights.needsUpdate=dn,Sn.hemisphereLights.needsUpdate=dn),Lt&&_e.fog===!0&&ve.refreshFogUniforms(Zn,Lt),ve.refreshMaterialUniforms(Zn,_e,ae,J,g.state.transmissionRenderTarget[ze.id]),lr.upload(H,je(qe),Zn,te));var Sn,dn;if(_e.isShaderMaterial&&_e.uniformsNeedUpdate===!0&&(lr.upload(H,je(qe),Zn,te),_e.uniformsNeedUpdate=!1),_e.isSpriteMaterial&&bt.setValue(H,"center",Ae.center),bt.setValue(H,"modelViewMatrix",Ae.modelViewMatrix),bt.setValue(H,"normalMatrix",Ae.normalMatrix),bt.setValue(H,"modelMatrix",Ae.matrixWorld),_e.isShaderMaterial||_e.isRawShaderMaterial){let Qt=_e.uniformsGroups;for(let fi=0,gt=Qt.length;fi<gt;fi++){let wc=Qt[fi];In.update(wc,mi),In.bind(wc,mi)}}return mi}(M,O,q,$,G);k.setMaterial($,he);let Te=q.index,Le=1;if($.wireframe===!0){if(Te=Ue.getWireframeAttribute(q),Te===void 0)return;Le=2}let Be=q.drawRange,Re=q.attributes.position,Ee=Be.start*Le,ct=(Be.start+Be.count)*Le;se!==null&&(Ee=Math.max(Ee,se.start*Le),ct=Math.min(ct,(se.start+se.count)*Le)),Te!==null?(Ee=Math.max(Ee,0),ct=Math.min(ct,Te.count)):Re!=null&&(Ee=Math.max(Ee,0),ct=Math.min(ct,Re.count));let Ye=ct-Ee;if(Ye<0||Ye===1/0)return;let at;Zt.setup(G,$,xe,q,Te);let it=Xn;if(Te!==null&&(at=we.get(Te),it=Fi,it.setIndex(at)),G.isMesh)$.wireframe===!0?(k.setLineWidth($.wireframeLinewidth*I()),it.setMode(H.LINES)):it.setMode(H.TRIANGLES);else if(G.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),k.setLineWidth(ze*I()),G.isLineSegments?it.setMode(H.LINES):G.isLineLoop?it.setMode(H.LINE_LOOP):it.setMode(H.LINE_STRIP)}else G.isPoints?it.setMode(H.POINTS):G.isSprite&&it.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)it.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ze=G._multiDrawStarts,mt=G._multiDrawCounts,ut=G._multiDrawCount,_e=Te?we.get(Te).bytesPerElement:1,Ae=Z.get($).currentProgram.getUniforms();for(let Lt=0;Lt<ut;Lt++)Ae.setValue(H,"_gl_DrawID",Lt),it.render(ze[Lt]/_e,mt[Lt])}else if(G.isInstancedMesh)it.renderInstances(Ee,Ye,G.count);else if(q.isInstancedBufferGeometry){let ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mt=Math.min(q.instanceCount,ze);it.renderInstances(Ee,Ye,mt)}else it.render(Ee,Ye)},this.compile=function(M,O,q=null){q===null&&(q=M),g=lt.get(q),g.init(O),v.push(g),q.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();let $=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let se=G.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){let xe=se[he];zi(xe,q,G),$.add(xe)}else zi(se,q,G),$.add(se)}),v.pop(),g=null,$},this.compileAsync=function(M,O,q=null){let $=this.compile(M,O,q);return new Promise(G=>{function se(){$.forEach(function(he){Z.get(he).currentProgram.isReady()&&$.delete(he)}),$.size!==0?setTimeout(se,10):G(M)}z.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ki=null;function Hi(){Y.stop()}function hn(){Y.start()}let Y=new Kh;function le(M,O,q,$){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ye.intersectsSprite(M)){$&&C.setFromMatrixPosition(M.matrixWorld).applyMatrix4(D);let se=$e.update(M),he=M.material;he.visible&&m.push(M,se,he,q,C.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ye.intersectsObject(M))){let se=$e.update(M),he=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),C.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),C.copy(se.boundingSphere.center)),C.applyMatrix4(M.matrixWorld).applyMatrix4(D)),Array.isArray(he)){let xe=se.groups;for(let Te=0,Le=xe.length;Te<Le;Te++){let Be=xe[Te],Re=he[Be.materialIndex];Re&&Re.visible&&m.push(M,se,Re,q,C.z,Be)}}else he.visible&&m.push(M,se,he,q,C.z,null)}}let G=M.children;for(let se=0,he=G.length;se<he;se++)le(G[se],O,q,$)}function be(M,O,q,$){let G=M.opaque,se=M.transmissive,he=M.transparent;g.setupLightsView(q),re===!0&&Ze.setGlobalState(_.clippingPlanes,q),$&&k.viewport(X.copy($)),G.length>0&&ke(G,O,q),se.length>0&&ke(se,O,q),he.length>0&&ke(he,O,q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Je(M,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new xn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Di:si,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let G=g.state.transmissionRenderTarget[$.id],se=$.viewport||X;G.setSize(se.z,se.w);let he=_.getRenderTarget();_.setRenderTarget(G),_.getClearColor(F),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),w&&We.render(q);let xe=_.toneMapping;_.toneMapping=0;let Te=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),re===!0&&Ze.setGlobalState(_.clippingPlanes,$),ke(M,q,$),te.updateMultisampleRenderTarget(G),te.updateRenderTargetMipmap(G),z.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Be=0,Re=O.length;Be<Re;Be++){let Ee=O[Be],ct=Ee.object,Ye=Ee.geometry,at=Ee.material,it=Ee.group;if(at.side===2&&ct.layers.test($.layers)){let ze=at.side;at.side=1,at.needsUpdate=!0,Mt(ct,q,$,Ye,at,it),at.side=ze,at.needsUpdate=!0,Le=!0}}Le===!0&&(te.updateMultisampleRenderTarget(G),te.updateRenderTargetMipmap(G))}_.setRenderTarget(he),_.setClearColor(F,j),Te!==void 0&&($.viewport=Te),_.toneMapping=xe}function ke(M,O,q){let $=O.isScene===!0?O.overrideMaterial:null;for(let G=0,se=M.length;G<se;G++){let he=M[G],xe=he.object,Te=he.geometry,Le=$===null?he.material:$,Be=he.group;xe.layers.test(q.layers)&&Mt(xe,O,q,Te,Le,Be)}}function Mt(M,O,q,$,G,se){M.onBeforeRender(_,O,q,$,G,se),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(_,O,q,$,M,se),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,_.renderBufferDirect(q,O,$,G,M,se),G.side=0,G.needsUpdate=!0,_.renderBufferDirect(q,O,$,G,M,se),G.side=2):_.renderBufferDirect(q,O,$,G,M,se),M.onAfterRender(_,O,q,$,G,se)}function Ne(M,O,q){O.isScene!==!0&&(O=U);let $=Z.get(M),G=g.state.lights,se=g.state.shadowsArray,he=G.state.version,xe=Ge.getParameters(M,G.state,se,O,q),Te=Ge.getProgramCacheKey(xe),Le=$.programs;$.environment=M.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(M.isMeshStandardMaterial?pe:ce).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Qe),Le=new Map,$.programs=Le);let Be=Le.get(Te);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===he)return Se(M,xe),Be}else xe.uniforms=Ge.getUniforms(M),M.onBeforeCompile(xe,_),Be=Ge.acquireProgram(xe,Te),Le.set(Te,Be),$.uniforms=xe.uniforms;let Re=$.uniforms;return(M.isShaderMaterial||M.isRawShaderMaterial)&&M.clipping!==!0||(Re.clippingPlanes=Ze.uniform),Se(M,xe),$.needsLights=function(Ee){return Ee.isMeshLambertMaterial||Ee.isMeshToonMaterial||Ee.isMeshPhongMaterial||Ee.isMeshStandardMaterial||Ee.isShadowMaterial||Ee.isShaderMaterial&&Ee.lights===!0}(M),$.lightsStateVersion=he,$.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMap.value=G.state.directionalShadowMap,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotShadowMap.value=G.state.spotShadowMap,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMap.value=G.state.pointShadowMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function je(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=lr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Se(M,O){let q=Z.get(M);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}Y.setAnimationLoop(function(M){ki&&ki(M)}),typeof self<"u"&&Y.setContext(self),this.setAnimationLoop=function(M){ki=M,wt.setAnimationLoop(M),M===null?Y.stop():Y.start()},wt.addEventListener("sessionstart",Hi),wt.addEventListener("sessionend",hn),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(O),O=wt.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,O,L),g=lt.get(M,v.length),g.init(O),v.push(g),D.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ye.setFromProjectionMatrix(D),b=this.localClippingEnabled,re=Ze.init(this.clippingPlanes,b),m=Ke.get(M,x.length),m.init(),x.push(m),wt.enabled===!0&&wt.isPresenting===!0){let se=_.xr.getDepthSensingMesh();se!==null&&le(se,O,-1/0,_.sortObjects)}le(M,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ge,me),w=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,w&&We.addToRenderList(m,M),this.info.render.frame++,re===!0&&Ze.beginShadows();let q=g.state.shadowsArray;Me.render(q,M,O),re===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,G=m.transmissive;if(g.setupLights(),O.isArrayCamera){let se=O.cameras;if(G.length>0)for(let he=0,xe=se.length;he<xe;he++)Je($,G,M,se[he]);w&&We.render(M);for(let he=0,xe=se.length;he<xe;he++){let Te=se[he];be(m,M,Te,Te.viewport)}}else G.length>0&&Je($,G,M,O),w&&We.render(M),be(m,M,O);L!==null&&(te.updateMultisampleRenderTarget(L),te.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(_,M,O),Zt.resetDefaultState(),B=-1,W=null,v.pop(),v.length>0?(g=v[v.length-1],re===!0&&Ze.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,x.pop(),m=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,O,q){Z.get(M.texture).__webglTexture=O,Z.get(M.depthTexture).__webglTexture=q;let $=Z.get(M);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){let q=Z.get(M);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,q=0){L=M,A=O,P=q;let $=!0,G=null,se=!1,he=!1;if(M){let xe=Z.get(M);if(xe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(xe.__webglFramebuffer===void 0)te.setupRenderTarget(M);else if(xe.__hasExternalTextures)te.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Be=M.depthTexture;if(xe.__boundDepthTexture!==Be){if(Be!==null&&Z.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(M)}}let Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(he=!0);let Le=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(G=Array.isArray(Le[O])?Le[O][q]:Le[O],se=!0):G=M.samples>0&&te.useMultisampledRTT(M)===!1?Z.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[q]:Le,X.copy(M.viewport),V.copy(M.scissor),T=M.scissorTest}else X.copy(ie).multiplyScalar(ae).floor(),V.copy(oe).multiplyScalar(ae).floor(),T=fe;if(k.bindFramebuffer(H.FRAMEBUFFER,G)&&$&&k.drawBuffers(M,G),k.viewport(X),k.scissor(V),k.setScissorTest(T),se){let xe=Z.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,q)}else if(he){let xe=Z.get(M.texture),Te=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,xe.__webglTexture,q||0,Te)}B=-1},this.readRenderTargetPixels=function(M,O,q,$,G,se,he){if(!M||!M.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){k.bindFramebuffer(H.FRAMEBUFFER,xe);try{let Te=M.texture,Le=Te.format,Be=Te.type;if(!ee.textureFormatReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Be))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");O>=0&&O<=M.width-$&&q>=0&&q<=M.height-G&&H.readPixels(O,q,$,G,_t.convert(Le),_t.convert(Be),se)}finally{let Te=L!==null?Z.get(L).__webglFramebuffer:null;k.bindFramebuffer(H.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,O,q,$,G,se,he){if(!M||!M.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){let Te=M.texture,Le=Te.format,Be=Te.type;if(!ee.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-$&&q>=0&&q<=M.height-G){k.bindFramebuffer(H.FRAMEBUFFER,xe);let Re=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.bufferData(H.PIXEL_PACK_BUFFER,se.byteLength,H.STREAM_READ),H.readPixels(O,q,$,G,_t.convert(Le),_t.convert(Be),0);let Ee=L!==null?Z.get(L).__webglFramebuffer:null;k.bindFramebuffer(H.FRAMEBUFFER,Ee);let ct=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await function(Ye,at,it){return new Promise(function(ze,mt){setTimeout(function ut(){switch(Ye.clientWaitSync(at,Ye.SYNC_FLUSH_COMMANDS_BIT,0)){case Ye.WAIT_FAILED:mt();break;case Ye.TIMEOUT_EXPIRED:setTimeout(ut,it);break;default:ze()}},it)})}(H,ct,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,se),H.deleteBuffer(Re),H.deleteSync(ct),se}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,O=null,q=0){M.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);let $=Math.pow(2,-q),G=Math.floor(M.image.width*$),se=Math.floor(M.image.height*$),he=O!==null?O.x:0,xe=O!==null?O.y:0;te.setTexture2D(M,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,he,xe,G,se),k.unbindTexture()},this.copyTextureToTexture=function(M,O,q=null,$=null,G=0){let se,he,xe,Te,Le,Be,Re,Ee,ct;M.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,M=arguments[1],O=arguments[2],G=arguments[3]||0,q=null);let Ye=M.isCompressedTexture?M.mipmaps[G]:M.image;q!==null?(se=q.max.x-q.min.x,he=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Le=q.min.y,Be=q.isBox3?q.min.z:0):(se=Ye.width,he=Ye.height,xe=Ye.depth||1,Te=0,Le=0,Be=0),$!==null?(Re=$.x,Ee=$.y,ct=$.z):(Re=0,Ee=0,ct=0);let at=_t.convert(O.format),it=_t.convert(O.type),ze;O.isData3DTexture?(te.setTexture3D(O,0),ze=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(te.setTexture2DArray(O,0),ze=H.TEXTURE_2D_ARRAY):(te.setTexture2D(O,0),ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let mt=H.getParameter(H.UNPACK_ROW_LENGTH),ut=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_e=H.getParameter(H.UNPACK_SKIP_PIXELS),Ae=H.getParameter(H.UNPACK_SKIP_ROWS),Lt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ye.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ye.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Te),H.pixelStorei(H.UNPACK_SKIP_ROWS,Le),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Be);let Dn=M.isDataArrayTexture||M.isData3DTexture,Yn=O.isDataArrayTexture||O.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let et=Z.get(M),Jt=Z.get(O),Kt=Z.get(et.__renderTarget),$n=Z.get(Jt.__renderTarget);k.bindFramebuffer(H.READ_FRAMEBUFFER,Kt.__webglFramebuffer),k.bindFramebuffer(H.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Vt=0;Vt<xe;Vt++)Dn&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,G,Be+Vt),M.isDepthTexture?(Yn&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,G,ct+Vt),H.blitFramebuffer(Te,Le,se,he,Re,Ee,se,he,H.DEPTH_BUFFER_BIT,H.NEAREST)):Yn?H.copyTexSubImage3D(ze,G,Re,Ee,ct+Vt,Te,Le,se,he):H.copyTexSubImage2D(ze,G,Re,Ee,ct+Vt,Te,Le,se,he);k.bindFramebuffer(H.READ_FRAMEBUFFER,null),k.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Yn?M.isDataTexture||M.isData3DTexture?H.texSubImage3D(ze,G,Re,Ee,ct,se,he,xe,at,it,Ye.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,G,Re,Ee,ct,se,he,xe,at,Ye.data):H.texSubImage3D(ze,G,Re,Ee,ct,se,he,xe,at,it,Ye):M.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,Re,Ee,se,he,at,it,Ye.data):M.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,Re,Ee,Ye.width,Ye.height,at,Ye.data):H.texSubImage2D(H.TEXTURE_2D,G,Re,Ee,se,he,at,it,Ye);H.pixelStorei(H.UNPACK_ROW_LENGTH,mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_e),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ae),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Lt),G===0&&O.generateMipmaps&&H.generateMipmap(ze),k.unbindTexture()},this.copyTextureToTexture3D=function(M,O,q=null,$=null,G=0){return M.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,M=arguments[2],O=arguments[3],G=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,q,$,G)},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&te.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?te.setTextureCube(M,0):M.isData3DTexture?te.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?te.setTexture2DArray(M,0):te.setTexture2D(M,0),k.unbindTexture()},this.resetState=function(){A=0,P=0,L=null,k.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var on=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var bf=new S;var wf=new S,Tf=new S,Ef=new S,Af=new ne,Rf=new ne,Cf=new Oe,Pf=new S,If=new S,Lf=new S,Df=new ne,Uf=new ne,Nf=new ne;var Of=new S,Ff=new S;var Bf=new S,zf=new dt,kf=new dt,Hf=new S,Vf=new Oe,Gf=new S,Wf=new sn,qf=new Oe,Xf=new Ai;var jf=new Oe,Yf=new Oe;var Ci=class extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$f=new Oe,Zf=new Oe;var Jf=new wn,Kf=new Oe,Qf=new Pe,eg=new sn;var Cl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},tg=new Oe,ng=new Ie(1,1,1),ig=new fr,rg=new wn,sg=new sn,ag=new S,og=new S,lg=new S,cg=new Cl,hg=new Pe;var Zr=class extends Gn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sa=new S,aa=new S,Mh=new Oe,Fr=new Ai,Ds=new sn,Ao=new S,Sh=new S,oa=class extends xt{constructor(e=new nt,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sa.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sa.distanceTo(aa);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;Mh.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Mh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,y=p-1;f<y;f+=c){let m=h.getX(f),g=h.getX(f+1),x=Us(this,e,Fr,l,m,g);x&&t.push(x)}if(this.isLineLoop){let f=h.getX(p-1),y=h.getX(d),m=Us(this,e,Fr,l,f,y);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,y=p-1;f<y;f+=c){let m=Us(this,e,Fr,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=Us(this,e,Fr,l,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Us(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(sa.fromBufferAttribute(a,i),aa.fromBufferAttribute(a,s),t.distanceSqToSegment(sa,aa,Ao,Sh)>n)return;Ao.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(Ao);return o<e.near||o>e.far?void 0:{distance:o,point:Sh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var ug=new S,dg=new S;var Pl=class extends Gn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bh=new Oe,Il=new Ai,Ns=new sn,Os=new S,ci=class extends xt{constructor(e=new nt,t=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;bh.copy(i).invert(),Il.copy(e.ray).applyMatrix4(bh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Os.fromBufferAttribute(h,p),wh(Os,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Os.fromBufferAttribute(h,u),wh(Os,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function wh(r,e,t,n,i,s,a){let o=Il.distanceSqToPoint(r);if(o<t){let l=new S;Il.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pi=class extends $t{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ne:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],s=[],a=[],o=new S,l=new Oe;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(It(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(It(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Jr=class extends ln{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ll=class extends Jr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Fs=new S,Ro=new mc,Co=new mc,Po=new mc,Dl=class extends ln{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Fs.subVectors(i[0],i[1]).add(i[0]),o=Fs);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Fs.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),f<1e-4&&(f=y),m<1e-4&&(m=y),Ro.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,y,m),Co.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,y,m),Po.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,y,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Co.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Po.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Ro.calc(h),Co.calc(h),Po.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Th(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Hr(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function Vr(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}var la=class extends ln{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,i.x,s.x,a.x,o.x),Vr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ul=class extends ln{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,i.x,s.x,a.x,o.x),Vr(e,i.y,s.y,a.y,o.y),Vr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends ln{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends ln{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends ln{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Hr(e,i.x,s.x,a.x),Hr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends ln{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Hr(e,i.x,s.x,a.x),Hr(e,i.y,s.y,a.y),Hr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Th(o,l.x,c.x,h.x,u.x),Th(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ne().fromArray(i))}return this}},pa=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Dl,CubicBezierCurve:la,CubicBezierCurve3:Ul,EllipseCurve:Jr,LineCurve:ca,LineCurve3:Nl,QuadraticBezierCurve:ha,QuadraticBezierCurve3:ua,SplineCurve:da}),Ol=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new pa[i.type]().fromJSON(i))}return this}},Kr=class extends Ol{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ca(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ha(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new la(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Jr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vr=class r extends nt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=It(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,d=new ne,p=new S,f=new S,y=new S,m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,p.x=1*g,p.y=-m,p.z=0*g,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(f)}for(let x=0;x<=t;x++){let v=n+x*h*i,_=Math.sin(v),R=Math.cos(v);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*R,a.push(u.x,u.y,u.z),d.x=x/t,d.y=A/(e.length-1),o.push(d.x,d.y);let P=l[3*A+0]*_,L=l[3*A+1],B=l[3*A+0]*R;c.push(P,L,B)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let _=v+x*e.length,R=_,A=_+e.length,P=_+e.length+1,L=_+1;s.push(R,A,L),s.push(P,L,A)}this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Qr=class r extends vr{constructor(e=1,t=1,n=4,i=8){let s=new Kr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Fl=class r extends nt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class r extends nt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,y=[],m=n/2,g=0;function x(v){let _=f,R=new ne,A=new S,P=0,L=v===!0?e:t,B=v===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,m*B,0),d.push(0,B,0),p.push(.5,.5),f++;let W=f;for(let X=0;X<=i;X++){let V=X/i*l+o,T=Math.cos(V),F=Math.sin(V);A.x=L*F,A.y=m*B,A.z=L*T,u.push(A.x,A.y,A.z),d.push(0,B,0),R.x=.5*T+.5,R.y=.5*F*B+.5,p.push(R.x,R.y),f++}for(let X=0;X<i;X++){let V=_+X,T=W+X;v===!0?h.push(T,T+1,V):h.push(T+1,T,V),P+=3}c.addGroup(g,P,v===!0?1:2),g+=P}(function(){let v=new S,_=new S,R=0,A=(t-e)/n;for(let P=0;P<=s;P++){let L=[],B=P/s,W=B*(t-e)+e;for(let X=0;X<=i;X++){let V=X/i,T=V*l+o,F=Math.sin(T),j=Math.cos(T);_.x=W*F,_.y=-B*n+m,_.z=W*j,u.push(_.x,_.y,_.z),v.set(F,A,j).normalize(),d.push(v.x,v.y,v.z),p.push(V,1-B),L.push(f++)}y.push(L)}for(let P=0;P<i;P++)for(let L=0;L<s;L++){let B=y[L][P],W=y[L+1][P],X=y[L+1][P+1],V=y[L][P+1];(e>0||L!==0)&&(h.push(B,W,V),R+=3),(t>0||L!==s-1)&&(h.push(W,X,V),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xr=class r extends Gt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class r extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,y){let m=y+1,g=[];for(let x=0;x<=m;x++){g[x]=[];let v=d.clone().lerp(f,x/m),_=p.clone().lerp(f,x/m),R=m-x;for(let A=0;A<=R;A++)g[x][A]=A===0&&x===m?v:v.clone().lerp(_,A/R)}for(let x=0;x<m;x++)for(let v=0;v<2*(m-x)-1;v++){let _=Math.floor(v/2);v%2==0?(l(g[x][_+1]),l(g[x+1][_]),l(g[x][_])):(l(g[x][_+1]),l(g[x+1][_+1]),l(g[x+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,y){y<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new S,f=new S,y=new S;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],y),o(p,f,y,d)})(i),function(d){let p=new S;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let d=new S;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let y=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-m)}var p;(function(){let f=new S,y=new S,m=new S,g=new S,x=new ne,v=new ne,_=new ne;for(let R=0,A=0;R<s.length;R+=9,A+=6){f.set(s[R+0],s[R+1],s[R+2]),y.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),x.set(a[A+0],a[A+1]),v.set(a[A+2],a[A+3]),_.set(a[A+4],a[A+5]),g.copy(f).add(y).add(m).divideScalar(3);let P=u(g);h(x,A+0,f,P),h(v,A+2,y,P),h(_,A+4,m,P)}})(),function(){for(let f=0;f<a.length;f+=6){let y=a[f+0],m=a[f+2],g=a[f+4],x=Math.max(y,m,g),v=Math.min(y,m,g);x>.9&&v<.1&&(y<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Bl=class r extends Ii{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Bs=new S,zs=new S,Io=new S,ks=new ii,zl=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(ar*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:m,c:g}=ks;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ks.getNormal(Io),u[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let v=(x+1)%3,_=u[x],R=u[v],A=ks[h[x]],P=ks[h[v]],L=`${_}_${R}`,B=`${R}_${_}`;B in d&&d[B]?(Io.dot(d[B].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(P.x,P.y,P.z)),d[B]=null):L in d||(d[L]={index0:c[x],index1:c[v],normal:Io.clone()})}}for(let f in d)if(d[f]){let{index0:y,index1:m}=d[f];Bs.fromBufferAttribute(o,y),zs.fromBufferAttribute(o,m),p.push(Bs.x,Bs.y,Bs.z),p.push(zs.x,zs.y,zs.z)}this.setAttribute("position",new De(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ma=class extends Kr{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Kr().fromJSON(i))}return this}},lm=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Eh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(f,y,m,g){let x=[],v,_,R,A,P;for(v=0,_=y.length;v<_;v++)R=y[v]*g,A=v<_-1?y[v+1]*g:f.length,P=Eh(f,R,A,g,!1),P===P.next&&(P.steiner=!0),x.push(gm(P));for(x.sort(pm),v=0;v<x.length;v++)m=mm(x[v],m);return m}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return es(s,a,t,o,l,p,0),a};function Eh(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Ah(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ah(s,r[s],r[s+1],a);return a&&ba(a,a.next)&&(ns(a),a=a.next),a}function Li(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ba(n,n.next)&&St(n.prev,n,n.next)!==0)n=n.next;else{if(ns(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function es(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let f=h;do f.z===0&&(f.z=kl(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(y){let m,g,x,v,_,R,A,P,L=1;do{for(g=y,y=null,_=null,R=0;g;){for(R++,x=g,A=0,m=0;m<L&&(A++,x=x.nextZ,x);m++);for(P=L;A>0||P>0&&x;)A!==0&&(P===0||!x||g.z<=x.z)?(v=g,g=g.nextZ,A--):(v=x,x=x.nextZ,P--),_?_.nextZ=v:y=v,v.prevZ=_,_=v;g=x}_.nextZ=null,L*=2}while(R>1)}(f)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?hm(r,n,i,s):cm(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ns(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?es(r=um(Li(r),e,t),e,t,n,i,s,2):a===2&&dm(r,e,t,n,i,s):es(Li(r),e,t,n,i,s,1);break}}function cm(r){let e=r.prev,t=r,n=r.next;if(St(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&sr(i,o,s,l,a,c,f.x,f.y)&&St(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function hm(r,e,t,n){let i=r.prev,s=r,a=r.next;if(St(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=kl(p,f,e,t,n),x=kl(y,m,e,t,n),v=r.prevZ,_=r.nextZ;for(;v&&v.z>=g&&_&&_.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&sr(o,h,l,u,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&sr(o,h,l,u,c,d,_.x,_.y)&&St(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&sr(o,h,l,u,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=y&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&sr(o,h,l,u,c,d,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function um(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ba(i,s)&&iu(i,n,n.next,s)&&ts(i,s)&&ts(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ns(n),ns(n.next),n=r=s),n=n.next}while(n!==r);return Li(n)}function dm(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vm(a,o)){let l=ru(a,o);return a=Li(a,a.next),l=Li(l,l.next),es(a,e,t,n,i,s,0),void es(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function pm(r,e){return r.x-e.x}function mm(r,e){let t=function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&sr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),ts(o,i)&&(f<y||f===y&&(o.x>a.x||o.x===a.x&&fm(a,o)))&&(a=o,y=f)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;let n=ru(t,r);return Li(n,n.next),Li(t,t.next)}function fm(r,e){return St(r.prev,r,e.prev)<0&&St(e.next,r,r.next)<0}function kl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function gm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function sr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function vm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&iu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(ts(r,e)&&ts(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(St(r.prev,r,e.prev)||St(r,e.prev,e))||ba(r,e)&&St(r.prev,r,r.next)>0&&St(e.prev,e,e.next)>0)}function St(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ba(r,e){return r.x===e.x&&r.y===e.y}function iu(r,e,t,n){let i=Vs(St(r,e,t)),s=Vs(St(r,e,n)),a=Vs(St(t,n,r)),o=Vs(St(t,n,e));return i!==s&&a!==o||!(i!==0||!Hs(r,t,e))||!(s!==0||!Hs(r,n,e))||!(a!==0||!Hs(t,r,n))||!(o!==0||!Hs(t,e,n))}function Hs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Vs(r){return r>0?1:r<0?-1:0}function ts(r,e){return St(r.prev,r,r.next)<0?St(r,e,r.next)>=0&&St(r,r.prev,e)>=0:St(r,e,r.prev)<0||St(r,r.next,e)<0}function ru(r,e){let t=new Hl(r.i,r.x,r.y),n=new Hl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ah(r,e,t,n){let i=new Hl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Hl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ri=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Rh(e),Ch(n,e);let a=e.length;t.forEach(Rh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ch(n,t[l]);let o=lm(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Rh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ch(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Vl=class r extends nt{constructor(e=new ma([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:xm,v,_,R,A,P,L=!1;g&&(v=g.getSpacedPoints(h),L=!0,d=!1,_=g.computeFrenetFrames(h,!1),R=new S,A=new S,P=new S),d||(m=0,p=0,f=0,y=0);let B=o.extractPoints(c),W=B.shape,X=B.holes;if(!ri.isClockWise(W)){W=W.reverse();for(let N=0,C=X.length;N<C;N++){let U=X[N];ri.isClockWise(U)&&(X[N]=U.reverse())}}let V=ri.triangulateShape(W,X),T=W;for(let N=0,C=X.length;N<C;N++){let U=X[N];W=W.concat(U)}function F(N,C,U){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(C,U)}let j=W.length,K=V.length;function J(N,C,U){let w,I,z,ee=N.x-C.x,k=N.y-C.y,Q=U.x-N.x,Z=U.y-N.y,te=ee*ee+k*k,ce=ee*Z-k*Q;if(Math.abs(ce)>Number.EPSILON){let pe=Math.sqrt(te),we=Math.sqrt(Q*Q+Z*Z),Ue=C.x-k/pe,$e=C.y+ee/pe,Ge=((U.x-Z/we-Ue)*Z-(U.y+Q/we-$e)*Q)/(ee*Z-k*Q);w=Ue+ee*Ge-N.x,I=$e+k*Ge-N.y;let ve=w*w+I*I;if(ve<=2)return new ne(w,I);z=Math.sqrt(ve/2)}else{let pe=!1;ee>Number.EPSILON?Q>Number.EPSILON&&(pe=!0):ee<-Number.EPSILON?Q<-Number.EPSILON&&(pe=!0):Math.sign(k)===Math.sign(Z)&&(pe=!0),pe?(w=-k,I=ee,z=Math.sqrt(te)):(w=ee,I=k,z=Math.sqrt(te/2))}return new ne(w/z,I/z)}let ae=[];for(let N=0,C=T.length,U=C-1,w=N+1;N<C;N++,U++,w++)U===C&&(U=0),w===C&&(w=0),ae[N]=J(T[N],T[U],T[w]);let ge=[],me,ie=ae.concat();for(let N=0,C=X.length;N<C;N++){let U=X[N];me=[];for(let w=0,I=U.length,z=I-1,ee=w+1;w<I;w++,z++,ee++)z===I&&(z=0),ee===I&&(ee=0),me[w]=J(U[w],U[z],U[ee]);ge.push(me),ie=ie.concat(me)}for(let N=0;N<m;N++){let C=N/m,U=p*Math.cos(C*Math.PI/2),w=f*Math.sin(C*Math.PI/2)+y;for(let I=0,z=T.length;I<z;I++){let ee=F(T[I],ae[I],w);ye(ee.x,ee.y,-U)}for(let I=0,z=X.length;I<z;I++){let ee=X[I];me=ge[I];for(let k=0,Q=ee.length;k<Q;k++){let Z=F(ee[k],me[k],w);ye(Z.x,Z.y,-U)}}}let oe=f+y;for(let N=0;N<j;N++){let C=d?F(W[N],ie[N],oe):W[N];L?(A.copy(_.normals[0]).multiplyScalar(C.x),R.copy(_.binormals[0]).multiplyScalar(C.y),P.copy(v[0]).add(A).add(R),ye(P.x,P.y,P.z)):ye(C.x,C.y,0)}for(let N=1;N<=h;N++)for(let C=0;C<j;C++){let U=d?F(W[C],ie[C],oe):W[C];L?(A.copy(_.normals[N]).multiplyScalar(U.x),R.copy(_.binormals[N]).multiplyScalar(U.y),P.copy(v[N]).add(A).add(R),ye(P.x,P.y,P.z)):ye(U.x,U.y,u/h*N)}for(let N=m-1;N>=0;N--){let C=N/m,U=p*Math.cos(C*Math.PI/2),w=f*Math.sin(C*Math.PI/2)+y;for(let I=0,z=T.length;I<z;I++){let ee=F(T[I],ae[I],w);ye(ee.x,ee.y,u+U)}for(let I=0,z=X.length;I<z;I++){let ee=X[I];me=ge[I];for(let k=0,Q=ee.length;k<Q;k++){let Z=F(ee[k],me[k],w);L?ye(Z.x,Z.y+v[h-1].y,v[h-1].x+U):ye(Z.x,Z.y,u+U)}}}function fe(N,C){let U=N.length;for(;--U>=0;){let w=U,I=U-1;I<0&&(I=N.length-1);for(let z=0,ee=h+2*m;z<ee;z++){let k=j*z,Q=j*(z+1);b(C+w+k,C+I+k,C+I+Q,C+w+Q)}}}function ye(N,C,U){l.push(N),l.push(C),l.push(U)}function re(N,C,U){E(N),E(C),E(U);let w=i.length/3,I=x.generateTopUV(n,i,w-3,w-2,w-1);D(I[0]),D(I[1]),D(I[2])}function b(N,C,U,w){E(N),E(C),E(w),E(C),E(U),E(w);let I=i.length/3,z=x.generateSideWallUV(n,i,I-6,I-3,I-2,I-1);D(z[0]),D(z[1]),D(z[3]),D(z[1]),D(z[2]),D(z[3])}function E(N){i.push(l[3*N+0]),i.push(l[3*N+1]),i.push(l[3*N+2])}function D(N){s.push(N.x),s.push(N.y)}(function(){let N=i.length/3;if(d){let C=0,U=j*C;for(let w=0;w<K;w++){let I=V[w];re(I[2]+U,I[1]+U,I[0]+U)}C=h+2*m,U=j*C;for(let w=0;w<K;w++){let I=V[w];re(I[0]+U,I[1]+U,I[2]+U)}}else{for(let C=0;C<K;C++){let U=V[C];re(U[2],U[1],U[0])}for(let C=0;C<K;C++){let U=V[C];re(U[0]+j*h,U[1]+j*h,U[2]+j*h)}}n.addGroup(N,i.length/3-N,0)})(),function(){let N=i.length/3,C=0;fe(T,C),C+=T.length;for(let U=0,w=X.length;U<w;U++){let I=X[U];fe(I,C),C+=I.length}n.addGroup(N,i.length/3-N,1)}()}this.setAttribute("position",new De(i,3)),this.setAttribute("uv",new De(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pa[i.type]().fromJSON(i)),new r(n,e.options)}},xm={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],y=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-f),new ne(y,1-g)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-f),new ne(m,1-g)]}},is=class r extends Ii{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Gl=class r extends Ii{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},rs=class r extends nt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new S,f=new ne;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let y=0;y<i;y++){let m=y*(n+1);for(let g=0;g<n;g++){let x=g+m,v=x,_=x+n+1,R=x+n+2,A=x+1;o.push(v,_,A),o.push(_,R,A)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wl=class r extends nt{constructor(e=new ma([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ri.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let x=f[m];ri.isClockWise(x)===!0&&(f[m]=x.reverse())}let y=ri.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let x=f[m];p=p.concat(x)}for(let m=0,g=p.length;m<g;m++){let x=p[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=y.length;m<g;m++){let x=y[m],v=x[0]+u,_=x[1]+u,R=x[2]+u;n.push(v,_,R),l+=3}}this.setIndex(n),this.setAttribute("position",new De(i,3)),this.setAttribute("normal",new De(s,3)),this.setAttribute("uv",new De(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},En=class r extends nt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,d=new S,p=[],f=[],y=[],m=[];for(let g=0;g<=n;g++){let x=[],v=g/n,_=0;g===0&&a===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+_,1-v),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let v=h[g][x+1],_=h[g][x],R=h[g+1][x],A=h[g+1][x+1];(g!==0||a>0)&&p.push(v,_,A),(g!==n-1||l<Math.PI)&&p.push(_,R,A)}this.setIndex(p),this.setAttribute("position",new De(f,3)),this.setAttribute("normal",new De(y,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ql=class r extends Ii{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yr=class r extends nt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let y=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let y=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,x=(i+1)*p+f;a.push(y,m,x),a.push(m,g,x)}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Xl=class r extends nt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new S,d=new S,p=new S,f=new S,y=new S,m=new S,g=new S;for(let v=0;v<=n;++v){let _=v/n*s*Math.PI*2;x(_,s,a,e,p),x(_+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),y.crossVectors(m,g),g.crossVectors(y,m),y.normalize(),g.normalize();for(let R=0;R<=i;++R){let A=R/i*Math.PI*2,P=-t*Math.cos(A),L=t*Math.sin(A);u.x=p.x+(P*g.x+L*y.x),u.y=p.y+(P*g.y+L*y.y),u.z=p.z+(P*g.z+L*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(R/i)}}for(let v=1;v<=n;v++)for(let _=1;_<=i;_++){let R=(i+1)*(v-1)+(_-1),A=(i+1)*v+(_-1),P=(i+1)*v+_,L=(i+1)*(v-1)+_;o.push(R,A,L),o.push(A,P,L)}function x(v,_,R,A,P){let L=Math.cos(v),B=Math.sin(v),W=R/_*v,X=Math.cos(W);P.x=A*(2+X)*.5*L,P.y=A*(2+X)*B*.5,P.z=A*Math.sin(W)*.5}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},jl=class r extends nt{constructor(e=new ua(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new ne,h=new S,u=[],d=[],p=[],f=[];function y(m){h=e.getPointAt(m/t,h);let g=a.normals[m],x=a.binormals[m];for(let v=0;v<=i;v++){let _=v/i*Math.PI*2,R=Math.sin(_),A=-Math.cos(_);l.x=A*g.x+R*x.x,l.y=A*g.y+R*x.y,l.z=A*g.z+R*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)y(m);y(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let x=(i+1)*(m-1)+(g-1),v=(i+1)*m+(g-1),_=(i+1)*m+g,R=(i+1)*(m-1)+g;f.push(x,v,R),f.push(v,_,R)}}()})(),this.setIndex(f),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new pa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Yl=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let y=0;y<3;y++){let m=o.getX(p+y),g=o.getX(p+(y+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Ph(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ph(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ph(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var pg=Object.freeze({__proto__:null,BoxGeometry:an,CapsuleGeometry:Qr,CircleGeometry:Fl,ConeGeometry:xr,CylinderGeometry:Gt,DodecahedronGeometry:Bl,EdgesGeometry:zl,ExtrudeGeometry:Vl,IcosahedronGeometry:is,LatheGeometry:vr,OctahedronGeometry:Gl,PlaneGeometry:Ri,PolyhedronGeometry:Ii,RingGeometry:rs,ShapeGeometry:Wl,SphereGeometry:En,TetrahedronGeometry:ql,TorusGeometry:yr,TorusKnotGeometry:Xl,TubeGeometry:jl,WireframeGeometry:Yl});var Wn=class extends Gn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Gs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ym(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var _r=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:s=e,o=2*t-n;break;case Ac:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=e,l=2*n-t;break;case Ac:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),y=f*f,m=y*f,g=-d*m+2*d*y-d*f,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*f+1,v=(-1-p)*m+(1.5+p)*y+.5*f,_=p*m-p*y;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+x*a[c+R]+v*a[l+R]+_*a[u+R];return s}},Zl=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Jl=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gs(t,this.TimeBufferType),this.values=Gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gs(e.times,Array),values:Gs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ym(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};vn.prototype.TimeBufferType=Float32Array,vn.prototype.ValueBufferType=Float32Array,vn.prototype.DefaultInterpolation=ul;var wi=class extends vn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="bool",wi.prototype.ValueBufferType=Array,wi.prototype.DefaultInterpolation=$s,wi.prototype.InterpolantFactoryMethodLinear=void 0,wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends vn{};Kl.prototype.ValueTypeName="color";var Ql=class extends vn{};Ql.prototype.ValueTypeName="number";var ec=class extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)rn.slerpFlat(s,0,a,c-o,a,c,l);return s}},fa=class extends vn{InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};fa.prototype.ValueTypeName="quaternion",fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends vn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string",Ti.prototype.ValueBufferType=Array,Ti.prototype.DefaultInterpolation=$s,Ti.prototype.InterpolantFactoryMethodLinear=void 0,Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends vn{};tc.prototype.ValueTypeName="vector";var nc=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},_m=new nc,ic=class{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var ga=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},va=class extends ga{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lo=new Oe,Ih=new S,Lh=new S,rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var mg=new Oe,fg=new S,gg=new S;var sc=class extends rc{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new sc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xa=class extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var vg=new Oe,xg=new Oe,yg=new Oe;var _g=new S,Mg=new rn,Sg=new S,bg=new S;var wg=new S,Tg=new rn,Eg=new S,Ag=new S;var fc="\\[\\]\\.:\\/",Mm=new RegExp("["+fc+"]","g"),Do="[^"+fc+"]",Sm="[^"+fc.replace("\\.","")+"]",bm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Do)+/(WCOD+)?/.source.replace("WCOD",Sm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do)+"$"),wm=["material","materials","bones","map"],vt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);wm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=class{constructor(r,e,t){let n=t||vt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray],vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rg=new Float32Array(1);var Dh=new Oe,ya=class{constructor(e,t,n=0,i=1/0){this.ray=new Ai(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,n=[]){return ac(e,this,n,t),n.sort(Uh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ac(e[i],this,n,t);return n.sort(Uh),n}};function Uh(r,e){return r.distance-e.distance}function ac(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)ac(s[a],e,t,!0)}}var Cg=new ne;var Pg=new S,Ig=new S;var Lg=new S;var Dg=new S,Ug=new Oe,Ng=new Oe;var Og=new S,Fg=new Ie,Bg=new Ie;var zg=new S,kg=new S,Hg=new S;var Vg=new S,Gg=new $r;var Wg=new wn;var qg=new S;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);var Tm="1.1.18";function au(r,e,t){return Math.max(r,Math.min(e,t))}function Em(r,e,t){return(1-t)*r+t*e}function Am(r,e,t,n){return Em(r,e,1-Math.exp(-t*n))}function Rm(r,e){return(r%e+e)%e}var Cm=class{constructor(){Ce(this,"isRunning",!1);Ce(this,"value",0);Ce(this,"from",0);Ce(this,"to",0);Ce(this,"currentTime",0);Ce(this,"lerp");Ce(this,"duration");Ce(this,"easing");Ce(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;let t=au(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Am(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function Pm(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Im=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ce(this,"width",0);Ce(this,"height",0);Ce(this,"scrollHeight",0);Ce(this,"scrollWidth",0);Ce(this,"debouncedResize");Ce(this,"wrapperResizeObserver");Ce(this,"contentResizeObserver");Ce(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ce(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ce(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Pm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ou=class{constructor(){Ce(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},su=100/6,di={passive:!1},Lm=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ce(this,"touchStart",{x:0,y:0});Ce(this,"lastDelta",{x:0,y:0});Ce(this,"window",{width:0,height:0});Ce(this,"emitter",new ou);Ce(this,"onTouchStart",r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ce(this,"onTouchMove",r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ce(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ce(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r,i=n===1?su:n===2?this.window.width:1,s=n===1?su:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ce(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,di),this.element.addEventListener("touchstart",this.onTouchStart,di),this.element.addEventListener("touchmove",this.onTouchMove,di),this.element.addEventListener("touchend",this.onTouchEnd,di)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,di),this.element.removeEventListener("touchstart",this.onTouchStart,di),this.element.removeEventListener("touchmove",this.onTouchMove,di),this.element.removeEventListener("touchend",this.onTouchEnd,di)}},lu=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=R=>Math.min(1,1.001-Math.pow(2,-10*R)),lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d="vertical",touchMultiplier:p=1,wheelMultiplier:f=1,autoResize:y=!0,prevent:m,virtualScroll:g,overscroll:x=!0,autoRaf:v=!1,__experimental__naiveDimensions:_=!1}={}){Ce(this,"_isScrolling",!1);Ce(this,"_isStopped",!1);Ce(this,"_isLocked",!1);Ce(this,"_preventNextNativeScrollEvent",!1);Ce(this,"_resetVelocityTimeout",null);Ce(this,"__rafID",null);Ce(this,"isTouching");Ce(this,"time",0);Ce(this,"userData",{});Ce(this,"lastVelocity",0);Ce(this,"velocity",0);Ce(this,"direction",0);Ce(this,"options");Ce(this,"targetScroll");Ce(this,"animatedScroll");Ce(this,"animate",new Cm);Ce(this,"emitter",new ou);Ce(this,"dimensions");Ce(this,"virtualScroll");Ce(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ce(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let p=i&&this.options.syncTouch,y=i&&n.type==="touchend"&&Math.abs(d)>5;y&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...p?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ce(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ce(this,"raf",r=>{let e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Tm,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:p,wheelMultiplier:f,autoResize:y,prevent:m,virtualScroll:g,overscroll:x,autoRaf:v,__experimental__naiveDimensions:_},this.dimensions=new Im(r,e,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Lm(t,{touchMultiplier:p,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){let f=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?f.left:f.top}let p=d.getBoundingClientRect();r=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=au(0,r,this.limit),r===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(d,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),p||this.emit(),p&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?Rm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var wa=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ta=`
#define PI 3.14159265
#define TAU 6.2831853

float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3) { p3 = fract(p3 * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }

float vnoise2(vec2 p) {
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p), f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash13(i), hash13(i + vec3(1,0,0)), u.x), mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), u.x), u.y),
             mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), u.x), mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), u.x), u.y), u.z);
}
float fbm2(vec2 p) { float a = .5, s = 0.; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for (int i = 0; i < 5; i++) { s += a * vnoise2(p); p = m * p; a *= .5; } return s; }
float fbm3(vec3 p) { float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * vnoise3(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= .5; } return s; }

uniform float uPix; // \u0443\u0433\u043B\u043E\u0432\u043E\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u0438\u043A\u0441\u0435\u043B\u044F (\u0440\u0430\u0434)

// \u043E\u0434\u0438\u043D \u0441\u043B\u043E\u0439 \u0437\u0432\u0451\u0437\u0434: \u044F\u0447\u0435\u0439\u043A\u0438 \u043D\u0430 \u0441\u0444\u0435\u0440\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439
vec3 starLayer(vec3 d, float scale, float density, float seed, float gain) {
  vec3 p = d * scale;
  vec3 id = floor(p);
  vec3 h = hash33(id + seed);
  if (h.x > density) return vec3(0.0);
  vec3 sp = .2 + .6 * hash33(id + seed + 7.13);
  vec3 dv = fract(p) - sp;
  dv -= d * dot(dv, d);
  float w = uPix * scale * .75;
  float mag = .18 + 4.0 * pow(h.y, 12.0);
  float I = exp(-dot(dv, dv) / (w * w)) * mag * gain;
  vec3 tint = mix(vec3(1.0, .78, .58), vec3(.72, .84, 1.0), h.z);
  tint = mix(tint, vec3(1.0), .45);
  return tint * I;
}

vec3 starfield(vec3 d) {
  vec3 c = starLayer(d, 150.0, .014, 1.0, 1.6);
  c += starLayer(d, 330.0, .004, 11.0, .8);
  c += starLayer(d, 700.0, .0012, 23.0, .45);
  // \u043F\u044B\u043B\u0435\u0432\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438
  vec3 gn = normalize(vec3(.35, 1.0, .22));
  float band = exp(-pow(dot(d, gn) * 3.4, 2.0));
  float n = fbm3(d * 5.0 + 3.0);
  float dust = smoothstep(.35, .75, fbm3(d * 11.0 + 9.0));
  c += band * (vec3(.36, .33, .42) * .055 * n * n * (1.0 - .8 * dust) + vec3(.9, .7, .5) * .012 * pow(n, 4.0));
  // \u0441\u043B\u0430\u0431\u044B\u0435 \u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430
  float neb = pow(fbm3(d * 2.2 + 17.0), 3.0);
  c += neb * (vec3(.10, .14, .30) * .10);
  return c;
}
`,cu=`
uniform mat4 uCamWorld;
uniform mat4 uProjInv;
uniform vec3 uCamPos;
vec3 cameraRay(vec2 uv) {
  vec4 v = uProjInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  v.xyz /= v.w;
  return normalize((uCamWorld * vec4(normalize(v.xyz), 0.0)).xyz);
}
`,hu=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uDiskTime;
uniform int uSteps;
uniform float uDiskBright;
uniform float uStarBright;
uniform float uFade;
${Ta}
${cu}

const float RIN = 2.35;
const float ROUT = 12.5;

vec3 diskRamp(float t) {
  vec3 c0 = vec3(.35, .06, .01);
  vec3 c1 = vec3(1.0, .38, .08);
  vec3 c2 = vec3(1.0, .70, .28);   // #FFB347
  vec3 c3 = vec3(1.0, .955, .88);  // #FFF4E0
  vec3 c4 = vec3(.80, .89, 1.0);
  vec3 c = mix(c0, c1, smoothstep(.0, .35, t));
  c = mix(c, c2, smoothstep(.3, .65, t));
  c = mix(c, c3, smoothstep(.65, 1.05, t));
  c = mix(c, c4, smoothstep(1.25, 1.9, t));
  return c;
}

// v \u2014 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0438 (\u043E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B). \u0424\u043E\u0442\u043E\u043D \u043B\u0435\u0442\u0435\u043B \u0432 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 -v.
vec4 diskSample(vec3 q, vec3 v) {
  float r = length(q.xz);
  // \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 (\u043A\u0435\u043F\u043B\u0435\u0440\u043E\u0432\u043E), \u0437\u0430\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u044E\u0449\u0435\u0435 \u0442\u0443\u0440\u0431\u0443\u043B\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u044C \u0432 \u0441\u043F\u0438\u0440\u0430\u043B\u0438
  float omega = pow(r, -1.5);
  float a = uDiskTime * omega;
  float ca = cos(a), sa = sin(a);
  vec2 p = mat2(ca, -sa, sa, ca) * q.xz;
  float turb = fbm2(p * .85);
  float fine = fbm2(p * 3.1 + turb * 1.7);
  float rings = vnoise2(vec2(r * 5.5 + turb * 2.2, 0.5)) * .7 + vnoise2(vec2(r * 17.0 + fine * 1.5, 3.1)) * .3;
  float streaks = vnoise2(vec2(r * 31.0 + fine * 2.0, 7.7));
  float lanes = smoothstep(.18, .78, rings);
  float dens = (.12 + 1.05 * lanes) * (.3 + 1.5 * turb * turb) * (.62 + .7 * fine) * (.75 + .5 * streaks);

  float inner = smoothstep(RIN, RIN + .35, r);
  float outer = 1.0 - smoothstep(ROUT * .38, ROUT, r);
  dens *= inner * outer;

  // \u0414\u043E\u043F\u043B\u0435\u0440 + \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u043A\u0440\u0430\u0441\u043D\u043E\u0435 \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u0435
  vec3 t = normalize(vec3(-q.z, 0.0, q.x));
  float beta = min(sqrt(.5 / r), .62);
  float gam = 1.0 / sqrt(1.0 - beta * beta);
  float cosT = dot(t, -normalize(v));
  float D = 1.0 / (gam * (1.0 - beta * cosT));
  float g = D * sqrt(max(1.0 - 1.0 / r, .02));

  float T = pow(RIN / r, .78);
  float Tobs = T * mix(1.0, g, .45);
  float boost = mix(1.0, pow(g, 2.4), .5);
  vec3 col = diskRamp(Tobs * 1.02) * (pow(T, 2.0) * 2.6 * boost) * uDiskBright;
  float alpha = clamp(dens * (1.2 - .5 * smoothstep(RIN, ROUT, r)), 0.0, .96);
  return vec4(col * (.25 + 1.0 * dens), alpha);
}

void main() {
  vec3 rd = cameraRay(vUv);
  vec3 p = uCamPos;
  vec3 v = rd;
  vec3 col = vec3(0.0);
  float alpha = 0.0;
  bool captured = false;
  const float RB = 34.0;

  float b = dot(p, v);
  float c = dot(p, p) - RB * RB;
  bool inside = true;
  if (c > 0.0) {
    float disc = b * b - c;
    if (disc < 0.0 || b > 0.0) inside = false;
    else p += v * (-b - sqrt(disc));
  }

  if (inside) {
    vec3 hv = cross(p, v);
    float h2 = dot(hv, hv);
    for (int i = 0; i < 400; i++) {
      if (i >= uSteps) break;
      float r2 = dot(p, p);
      float r = sqrt(r2);
      float dt = clamp(.075 * r * (r - .55) / max(r, 1.0), .02, 1.6);
      vec3 acc = -1.5 * h2 * p / (r2 * r2 * r);
      vec3 vn = v + acc * dt;
      vec3 pn = p + vn * dt;

      // \u043C\u044F\u0433\u043A\u043E\u0435 \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u0435 \u0432\u043E\u043A\u0440\u0443\u0433 \u0434\u0438\u0441\u043A\u0430 (\u0440\u0430\u0441\u0441\u0435\u044F\u043D\u043D\u044B\u0439 \u0441\u0432\u0435\u0442)
      float hz = abs(p.y);
      col += (1.0 - alpha) * vec3(1.0, .55, .22) * (.0045 * dt) * exp(-hz * 1.6) * smoothstep(ROUT * 1.1, RIN, r) * uDiskBright;

      if (p.y * pn.y < 0.0) {
        float k = p.y / (p.y - pn.y);
        vec3 q = mix(p, pn, k);
        float rq = length(q.xz);
        if (rq > RIN * .9 && rq < ROUT) {
          vec4 ds = diskSample(q, vn);
          col += (1.0 - alpha) * ds.rgb * ds.a;
          alpha += (1.0 - alpha) * ds.a;
          if (alpha > .985) break;
        }
      }
      p = pn; v = vn;
      if (dot(p, p) < 1.0) { captured = true; break; }
      if (r > RB + 2.0 && dot(p, v) > 0.0) break;
    }
  }
  if (!captured) col += (1.0 - alpha) * starfield(normalize(v)) * uStarBright;
  col *= (1.0 - uFade);
  gl_FragColor = vec4(col, 1.0);
}
`,uu=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec3 uWormPos;
uniform float uWormR;
uniform float uMix;
${Ta}
${cu}

// \u043D\u0435\u0431\u043E \u043F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443: \u0441\u043F\u0438\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430 \u0438 \u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u0438
vec3 otherSky(vec3 d, vec3 G) {
  vec3 c = starLayer(d, 140.0, .02, 101.0, 1.6) * vec3(.85, .92, 1.0);
  c += starLayer(d, 320.0, .006, 131.0, .8);
  vec3 up = abs(G.y) > .9 ? vec3(1, 0, 0) : vec3(0, 1, 0);
  vec3 u = normalize(cross(up, G));
  vec3 w = cross(G, u);
  float z = dot(d, G);
  if (z > .05) {
    vec2 q = vec2(dot(d, u), dot(d, w)) / z;
    float ct = cos(.55), st = sin(.55);
    q = mat2(ct, -st, st, ct) * q;
    q.y *= 2.1;
    float r = length(q);
    float th = atan(q.y, q.x);
    float arms = .5 + .5 * cos(2.0 * (th - 2.6 * log(r + .002)) + fbm2(q * 9.0) * 1.4 - uTime * .05);
    float clump = fbm2(q * 22.0 + 3.0);
    float spiral = pow(arms, 2.5) * exp(-r * 3.4) * (.5 + clump);
    float core = exp(-r * r * 85.0);
    float halo = exp(-r * 6.0);
    c += vec3(.45, .62, 1.0) * spiral * 1.9;
    c += vec3(1.0, .45, .75) * pow(arms * clump, 6.0) * exp(-r * 3.0) * 2.5;
    c += vec3(1.0, .9, .78) * (core * 2.4 + halo * .22);
  }
  float neb = fbm3(d * 3.0 + 40.0);
  c += vec3(.18, .08, .38) * pow(neb, 2.5) * .9 + vec3(.05, .25, .35) * pow(fbm3(d * 5.5 + 7.0), 4.0);
  return c;
}

void main() {
  vec3 rd = cameraRay(vUv);
  vec3 oc = uCamPos - uWormPos;
  float tca = -dot(oc, rd);
  vec3 perp = oc + rd * tca;
  float bimp = length(perp);
  vec3 nrm = perp / max(bimp, 1e-4);
  vec3 G = normalize(uWormPos - uCamPos);
  vec3 col = vec3(0.0);
  float a = 0.0;
  float R = uWormR;
  float camIn = smoothstep(R * 1.05, R * .7, length(oc));

  if (tca > 0.0 && bimp < R) {
    float s = bimp / R;
    float ang = pow(s, 1.25) * PI * .98;
    vec3 od = normalize(rd * cos(ang) - nrm * sin(ang));
    col = otherSky(od, G);
    // \u043A\u043E\u043B\u044C\u0446\u043E \u042D\u0439\u043D\u0448\u0442\u0435\u0439\u043D\u0430 \u043D\u0430 \u043A\u0440\u0430\u044E \u0441\u0444\u0435\u0440\u044B
    col += vec3(.75, .88, 1.0) * pow(s, 40.0) * 1.1;
    col += vec3(.5, .7, 1.0) * pow(s, 8.0) * .12;
    // \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \xAB\u043D\u0430\u0448\u0435\u0433\u043E\xBB \u043D\u0435\u0431\u0430
    col += starfield(reflect(rd, normalize(perp - rd * sqrt(max(R * R - bimp * bimp, 0.0))))) * .25 * pow(s, 3.0);
    a = 1.0;
  } else if (tca > 0.0) {
    float x = R / bimp;
    float defl = min(1.15 * x * x, 1.4);
    vec3 od = normalize(rd * cos(defl) - nrm * sin(defl));
    col = starfield(od);
    col += vec3(.55, .75, 1.0) * pow(x, 18.0) * .3;
    a = smoothstep(.0, .05, defl);
  }
  if (camIn > 0.0) { col = mix(col, otherSky(rd, G), camIn); a = max(a, camIn); }
  gl_FragColor = vec4(col, a * uMix);
}
`,du=`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform float uMix;
uniform float uProg;
uniform float uSpeed;
${Ta}

void main() {
  vec2 uv = (vUv - .5) * vec2(uRes.x / uRes.y, 1.0) * 2.0;
  uv += vec2(sin(uTime * .7), cos(uTime * .53)) * .03;
  float r = length(uv);
  float a = atan(uv.y, uv.x) + uTime * .05;
  float z = .45 / (r + .015);
  float zz = z + uTime * uSpeed;

  // \u0441\u0442\u0435\u043D\u043A\u0438 \u0433\u043E\u0440\u043B\u043E\u0432\u0438\u043D\u044B: \u0438\u0441\u043A\u0430\u0436\u0451\u043D\u043D\u044B\u0439 \u0441\u0432\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438
  vec3 wp = vec3(cos(a) * 1.3, sin(a) * 1.3, zz * .3);
  float n = fbm3(wp);
  float n2 = fbm3(wp * 2.6 + vec3(0, 0, uTime * .25));
  vec3 wall = mix(vec3(.003, .006, .022), vec3(.07, .13, .36), smoothstep(.42, .85, n));
  wall += vec3(.55, .28, .62) * pow(n2, 6.0) * .9;
  wall += vec3(1.0, .7, .45) * pow(n, 9.0) * .8;
  wall *= smoothstep(.0, .7, r);

  // \u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044B\u0435 \u0437\u0432\u0451\u0437\u0434\u044B
  float N = 260.0;
  float sa = (a + PI) / TAU * N;
  float id = floor(sa);
  float fa = fract(sa) - .5;
  float h = hash12(vec2(id, 3.7));
  float h2 = hash12(vec2(id, 9.1));
  float fz = fract(zz * (.04 + .08 * h) + h2);
  float len = .2 + .45 * h;
  float ang = abs(fa) * TAU / N;
  float px = 2.0 / uRes.y;
  float hw = min(.011, max(.0007, 1.25 * px / max(r, .02))) * (.7 + .6 * h);
  float streak = smoothstep(len, 0.0, fz) * smoothstep(.0, .02, fz) * smoothstep(hw, 0.0, ang) * (.0016 / max(hw, .0016) * .6 + .4);
  streak *= step(.5, h2) * smoothstep(.03, .35, r);
  vec3 sc = mix(vec3(.6, .78, 1.0), vec3(1.0, .82, .58), h) * streak * (1.0 + 2.2 * h);

  vec3 col = wall + sc;
  float endL = exp(-r * mix(16.0, 1.5, pow(uProg, 3.0)));
  col += vec3(1.0, .9, .78) * endL * (.3 + 8.0 * pow(uProg, 4.0));
  gl_FragColor = vec4(col, uMix);
}
`,pu=`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform float uMix;
uniform float uProg;
uniform vec2 uLook;
uniform float uWave;    // \u0440\u0430\u0434\u0438\u0443\u0441 \u0432\u043E\u043B\u043D\u044B (<0 \u2014 \u043D\u0435\u0442)
uniform float uMorse;   // 0..1 \u0432\u0441\u043F\u044B\u0448\u043A\u0430
uniform float uFlicker;
uniform float uPluck;   // \u0441\u0435\u043A\u0443\u043D\u0434 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0432 \u0444\u043E\u0440\u043C\u0435
${Ta}

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float lattice(vec3 p, out float strand) {
  const float P = 2.4;
  vec3 q = mod(p + P * .5, P) - P * .5;
  float bx = length(q.yz) - .009;
  float by = length(q.xz) - .006;
  float bz = length(q.xy) - .009;
  // \xAB\u0441\u0442\u0440\u0443\u043D\u044B\xBB: \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0438\u0442\u0438 \u0432\u0434\u043E\u043B\u044C \u0441\u0442\u0435\u043D \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u043E\u0432 (x = k\xB7P)
  float sz = mod(p.z + .09, .18) - .09;
  float s = length(vec2(q.x, sz)) - .0028;
  float sy = mod(p.y + .6, 1.2) - .6;           // \xAB\u043F\u043E\u043B\u043A\u0438\xBB
  float shelf = length(vec2(q.x, sy)) - .004;
  strand = min(s, shelf);
  return min(min(bx, by), bz);
}

// \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0435\u0441\u044F \xAB\u043A\u043D\u0438\u0433\u0438\xBB \u043D\u0430 \u043F\u043E\u043B\u043A\u0430\u0445 \u0432\u0434\u043E\u043B\u044C \u0441\u0442\u0435\u043D \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u043E\u0432
float books(vec3 p, out float bri) {
  const float P = 2.4;
  float qx = mod(p.x + P * .5, P) - P * .5;
  vec2 cell = vec2(floor(p.z / .36), floor((p.y + .6) / 1.2));
  float h = hash12(cell + floor((p.x + P * .5) / P) * 17.0);
  bri = step(.74, h) * (.4 + 1.6 * hash12(cell * 3.1 + 2.0));
  vec2 lc = vec2(mod(p.z, .36) - .18, mod(p.y + .6, 1.2) - .6 - .2 + .15 * h);
  vec3 b = vec3(abs(qx) - .01, abs(lc.x) - .1, abs(lc.y) - .2 * (.6 + .4 * h));
  return length(max(b, 0.0)) + min(max(b.x, max(b.y, b.z)), 0.0);
}

void main() {
  vec2 uv = (vUv - .5) * vec2(uRes.x / uRes.y, 1.0);
  vec3 ro = vec3(1.2 + sin(uTime * .05) * .25, 1.2 + sin(uTime * .07) * .2 + uProg * .3, uTime * .22 + uProg * 3.0);
  vec3 rd = normalize(vec3(uv, 1.25));
  rd.yz = rot(-uLook.y * .25 - .06) * rd.yz;
  rd.xz = rot(uLook.x * .35 + sin(uTime * .07) * .12) * rd.xz;

  vec3 glow = vec3(0.0);
  float t = 0.0;
  vec3 amber = vec3(1.0, .62, .22);
  vec3 hot = vec3(1.0, .88, .66);
  for (int i = 0; i < 90; i++) {
    vec3 p = ro + rd * t;
    float st, bri;
    float d = lattice(p, st);
    float db = books(p, bri);
    float fog = exp(-t * .1);
    float w = 1.0;
    float wv = 0.0;
    if (uWave > 0.0) {
      float dw = length(p - ro) - uWave;
      wv = exp(-dw * dw * 1.4) * (1.0 - smoothstep(30.0, 46.0, uWave));
      w += 16.0 * wv;
    }
    float flick = .85 + .15 * sin(p.y * 3.0 + uTime * 2.0 + p.x);
    float cellV = .35 + 1.1 * hash13(floor((p + 1.2) / 2.4));
    vec3 beamC = mix(hot, vec3(.75, .92, 1.0), min(wv * 1.5, 1.0));
    // \u0449\u0438\u043F\u043E\u043A \u0441\u0442\u0440\u0443\u043D: \u043F\u0440\u0438 \u043D\u0430\u0431\u043E\u0440\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u043E \u043D\u0438\u0442\u044F\u043C \u0431\u0435\u0436\u0438\u0442 \u0441\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0432\u043E\u043B\u043D\u0430
    float pl = uPluck < 3.0 ? exp(-uPluck * 1.6) * (.5 + .5 * sin(p.y * 7.0 - uPluck * 28.0 + p.z * 2.0)) : 0.0;
    float bookFl = .8 + .2 * sin(uTime * (1.0 + bri) + p.z * 3.0);
    glow += (beamC * .00038 / (.00025 + d * d) * w * cellV
           + amber * .00007 / (.00003 + st * st) * flick * (.6 + .8 * cellV) * (1.0 + wv * 6.0 + pl * 5.0)
           + vec3(1.0, .5, .16) * bri * bookFl * .00004 / (.00002 + db * db)) * fog * .02;
    t += max(min(min(d, st), db + .01) * .75, .035);
    if (t > 46.0) break;
  }
  vec3 col = glow * (1.0 + uMorse * 3.5) * uFlicker;
  // \u0442\u0451\u043F\u043B\u0430\u044F \u0434\u044B\u043C\u043A\u0430 \u0438 \u0441\u0432\u0435\u0442 \u0438\u0437 \xAB\u0433\u043B\u0443\u0431\u0438\u043D\u044B\xBB
  col += vec3(.20, .09, .02) * (.6 + .4 * fbm3(rd * 3.0 + uTime * .03)) * .14;
  col += vec3(1.0, .7, .35) * pow(max(dot(rd, normalize(vec3(.0, .2, 1.0))), 0.0), 18.0) * .5;
  col += vec3(.9, .6, .3) * uMorse * .15;
  gl_FragColor = vec4(col, uMix);
}
`,mu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tBg;
uniform vec2 uTexel;
void main() {
  // \u043B\u0451\u0433\u043A\u0438\u0439 \u0431\u0438\u043A\u0443\u0431\u0438\u043A-\u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0439 \u0430\u043F\u0441\u043A\u0435\u0439\u043B: 4 \u0431\u0438\u043B. \u0432\u044B\u0431\u043E\u0440\u043A\u0438 + \u0446\u0435\u043D\u0442\u0440
  vec3 c = texture2D(tBg, vUv).rgb * .5;
  c += texture2D(tBg, vUv + vec2( uTexel.x, 0.0) * .5).rgb * .125;
  c += texture2D(tBg, vUv + vec2(-uTexel.x, 0.0) * .5).rgb * .125;
  c += texture2D(tBg, vUv + vec2(0.0,  uTexel.y) * .5).rgb * .125;
  c += texture2D(tBg, vUv + vec2(0.0, -uTexel.y) * .5).rgb * .125;
  gl_FragColor = vec4(c, 1.0);
}
`,fu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;
uniform float uThresh;
uniform float uKnee;
void main() {
  vec3 c = texture2D(tIn, vUv).rgb;
  c = min(c, vec3(60.0));
  float l = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThresh, uThresh + uKnee, l);
  gl_FragColor = vec4(c * k, 1.0);
}
`,gu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;
uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tIn, vUv).rgb * 4.0;
  c += texture2D(tIn, vUv + vec2(-o.x, -o.y)).rgb;
  c += texture2D(tIn, vUv + vec2( o.x, -o.y)).rgb;
  c += texture2D(tIn, vUv + vec2(-o.x,  o.y)).rgb;
  c += texture2D(tIn, vUv + vec2( o.x,  o.y)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}
`,vu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;    // \u043C\u0435\u043D\u044C\u0448\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C
uniform sampler2D tBase;  // \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C
uniform vec2 uTexel;
uniform float uRadius;
void main() {
  vec2 o = uTexel * uRadius;
  vec3 c = vec3(0.0);
  c += texture2D(tIn, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  c += texture2D(tIn, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  c += texture2D(tIn, vUv + vec2(0.0, o.y * 2.0)).rgb;
  c += texture2D(tIn, vUv + vec2(o.x, o.y)).rgb * 2.0;
  c += texture2D(tIn, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  c += texture2D(tIn, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  c += texture2D(tIn, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  c += texture2D(tIn, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  gl_FragColor = vec4(c / 12.0 + texture2D(tBase, vUv).rgb, 1.0);
}
`,xu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tIn;
uniform vec2 uTexel;
uniform float uSpread;
void main() {
  vec3 c = vec3(0.0);
  float wsum = 0.0;
  for (int i = -14; i <= 14; i++) {
    float fi = float(i);
    float w = exp(-fi * fi / 70.0);
    c += texture2D(tIn, vUv + vec2(fi * uTexel.x * uSpread, 0.0)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(c / wsum, 1.0);
}
`,yu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform sampler2D tFlare;
uniform vec2 uRes;
uniform float uTime;
uniform float uBloom;
uniform float uFlare;
uniform float uCA;
uniform float uExposure;
uniform float uFade;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform vec2 uShake;
uniform float uSat;
uniform float uScan;
uniform vec4 uRipple;   // xy \u0446\u0435\u043D\u0442\u0440 (uv), z \u0432\u043E\u0437\u0440\u0430\u0441\u0442 (\u0441), w \u0441\u0438\u043B\u0430
uniform float uAspect;
uniform vec4 uLens;     // xy \u0446\u0435\u043D\u0442\u0440 (uv), z \u0440\u0430\u0434\u0438\u0443\u0441 \u042D\u0439\u043D\u0448\u0442\u0435\u0439\u043D\u0430 (\u0434\u043E\u043B\u044F \u0432\u044B\u0441\u043E\u0442\u044B), w \u0441\u0438\u043B\u0430

vec3 aces(vec3 x) {
  const float a = 2.51, b = .03, c = 2.43, d = .59, e = .14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

void main() {
  vec2 uv = vUv + uShake;
  // \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0432\u043E\u043B\u043D\u0430: \u043A\u043E\u043B\u044C\u0446\u043E \u0441 \u043A\u0432\u0430\u0434\u0440\u0443\u043F\u043E\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439 (\u0440\u0430\u0441\u0442\u044F\u0436\u0435\u043D\u0438\u0435/\u0441\u0436\u0430\u0442\u0438\u0435 \u043F\u043E \u043E\u0441\u044F\u043C)
  float gwGlow = 0.0;
  if (uRipple.w > 0.0) {
    vec2 dv = (uv - uRipple.xy) * vec2(uAspect, 1.0);
    float d = length(dv);
    float ang = atan(dv.y, dv.x);
    float fade = 1.0 - smoothstep(.4, 2.6, uRipple.z);
    for (int k = 0; k < 2; k++) {
      float r = max(uRipple.z - float(k) * .35, 0.0) * .75;
      float band = exp(-pow((d - r) * 7.0, 2.0));
      float wave = sin((d - r) * 55.0) * band * (.55 + .45 * cos(2.0 * ang));
      uv -= (dv / max(d, 1e-4)) / vec2(uAspect, 1.0) * wave * .014 * uRipple.w * fade * (k == 0 ? 1.0 : .5);
      gwGlow += exp(-pow((d - r) * 26.0, 2.0)) * fade * (k == 0 ? 1.0 : .4) * (.55 + .45 * cos(2.0 * ang));
    }
  }
  // \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u0443\u0440\u0441\u043E\u0440: \u0442\u043E\u0447\u0435\u0447\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430, \u043B\u0438\u043D\u0437\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u0432\u0441\u0451 \u0437\u0430 \u043D\u0435\u0439
  float lensShadow = 0.0, lensRing = 0.0;
  if (uLens.w > .001) {
    vec2 dv = (uv - uLens.xy) * vec2(uAspect, 1.0);
    float d = length(dv);
    float re = uLens.z * uLens.w;
    float defl = re * re / max(d, re * .3) * (1.0 - smoothstep(re * 5.0, re * 11.0, d));
    uv -= dv / max(d, 1e-5) * defl / vec2(uAspect, 1.0);
    lensShadow = 1.0 - smoothstep(re * .40, re * .56, d);
    lensRing = exp(-pow((d - re * .6) / (re * .07), 2.0)) * uLens.w;
  }
  uv = clamp(uv, .002, .998);
  vec2 dir = uv - .5;
  float d2 = dot(dir, dir);
  vec2 off = dir * uCA * (.3 + d2 * 1.6) * .012;
  vec3 col;
  col.r = texture2D(tScene, uv + off).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - off).b;
  vec3 bl;
  bl.r = texture2D(tBloom, uv + off * 1.5).r;
  bl.g = texture2D(tBloom, uv).g;
  bl.b = texture2D(tBloom, uv - off * 1.5).b;
  col += bl * uBloom;
  vec3 fl = texture2D(tFlare, uv).rgb;
  col += fl * vec3(.55, .78, 1.0) * uFlare;
  col *= 1.0 - lensShadow;
  col += vec3(1.0, .74, .45) * lensRing * .55;
  col *= uExposure;
  col += vec3(.55, .75, 1.0) * gwGlow * .045 * uRipple.w;
  col = aces(col);
  float l = dot(col, vec3(.2126, .7152, .0722));
  col = mix(vec3(l), col, uSat);
  col = pow(col, vec3(1.0 / 2.2));
  // \u043B\u0451\u0433\u043A\u0438\u0439 \u0441\u043F\u043B\u0438\u0442-\u0442\u043E\u043D: \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0435 \u0442\u0435\u043D\u0438, \u0442\u0451\u043F\u043B\u044B\u0435 \u0441\u0432\u0435\u0442\u0430
  col += vec3(-.004, .0, .012) * (1.0 - l) + vec3(.01, .004, -.01) * l;
  col = max(col, vec3(.0118, .0118, .0196)); // #030305
  if (uScan > 0.0) {
    col *= 1.0 - uScan * .25 * step(.5, fract(vUv.y * uRes.y * .25));
    col += uScan * .08 * h12(vec2(floor(vUv.y * 90.0), floor(uTime * 30.0)));
  }
  col = mix(col, vec3(0.0), uFade);
  col = mix(col, uFlashColor, uFlash);
  col += (h12(vUv * uRes + fract(uTime) * 100.0) - .5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;var Ea=class{constructor(e){let t=this.renderer=new ra({canvas:e,antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});t.autoClear=!1,t.setClearColor(197381,1),t.outputColorSpace=Et,t.toneMapping=Fh,this.fsScene=new on,this.fsCam=new li(-1,1,1,-1,0,1),this.fsMesh=new Pe(new Ri(2,2)),this.fsMesh.frustumCulled=!1,this.fsScene.add(this.fsMesh);let n=(i,s,a={})=>new rt({vertexShader:wa,fragmentShader:i,uniforms:s,depthTest:!1,depthWrite:!1,...a});this.bgMat=n(mu,{tBg:{value:null},uTexel:{value:new ne}}),this.brightMat=n(fu,{tIn:{value:null},uThresh:{value:1.25},uKnee:{value:1.8}}),this.downMat=n(gu,{tIn:{value:null},uTexel:{value:new ne}}),this.upMat=n(vu,{tIn:{value:null},tBase:{value:null},uTexel:{value:new ne},uRadius:{value:1}}),this.flareMat=n(xu,{tIn:{value:null},uTexel:{value:new ne},uSpread:{value:2}}),this.finalMat=n(yu,{tScene:{value:null},tBloom:{value:null},tFlare:{value:null},uRes:{value:new ne},uTime:{value:0},uBloom:{value:.9},uFlare:{value:.5},uCA:{value:.2},uExposure:{value:1},uFade:{value:0},uFlash:{value:0},uFlashColor:{value:new Ie(1,.95,.85)},uShake:{value:new ne},uSat:{value:1},uScan:{value:0},uRipple:{value:new dt(.5,.5,0,0)},uAspect:{value:1},uLens:{value:new dt(.5,.5,.034,0)}}),this.final=this.finalMat.uniforms,this.q={dpr:1,bg:.6,samples:0},this.w=1,this.h=1,this.targets=[]}makeRT(e,t,n={}){let i=new xn(Math.max(1,e|0),Math.max(1,t|0),{type:Di,format:nn,minFilter:tn,magFilter:tn,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,...n});return this.targets.push(i),i}setQuality(e){this.q={...this.q,...e},this.resize(this.cssW||innerWidth,this.cssH||innerHeight,!0)}resize(e,t,n=!1){let i=this.q.dpr,s=Math.round(e*i),a=Math.round(t*i);if(!n&&s===this.w&&a===this.h)return;this.cssW=e,this.cssH=t,this.w=s,this.h=a,this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.targets.forEach(p=>p.dispose()),this.targets=[];let o=Math.round(e*Math.min(i,1.5)*this.q.bg),l=Math.round(t*Math.min(i,1.5)*this.q.bg);this.bgRT=this.makeRT(o,l),this.sceneRT=this.makeRT(s,a,{depthBuffer:!0,samples:this.q.samples}),this.down=[];let c=s>>1,h=a>>1;for(let p=0;p<5;p++)this.down.push(this.makeRT(c,h)),c=Math.max(1,c>>1),h=Math.max(1,h>>1);this.up=this.down.slice(0,4).map(p=>this.makeRT(p.width,p.height));let u=Math.max(1,s>>3),d=Math.max(1,a>>4);this.flareA=this.makeRT(u,d),this.flareB=this.makeRT(u,d),this.bgMat.uniforms.tBg.value=this.bgRT.texture,this.bgMat.uniforms.uTexel.value.set(1/o,1/l),this.final.uRes.value.set(s,a),this.final.uAspect.value=s/a}fs(e,t,n=!1){this.fsMesh.material=e,this.renderer.setRenderTarget(t),n&&this.renderer.clear(!0,!1,!1),this.renderer.render(this.fsScene,this.fsCam)}beginBg(){this.renderer.setRenderTarget(this.bgRT),this.renderer.clear(!0,!1,!1)}beginScene(){let e=this.renderer;e.setRenderTarget(this.sceneRT),e.clear(!0,!0,!1),this.fs(this.bgMat,this.sceneRT)}renderScene(e,t){this.renderer.setRenderTarget(this.sceneRT),this.renderer.render(e,t)}post(e){let t=this.down,n=this.up;this.brightMat.uniforms.tIn.value=this.sceneRT.texture,this.fs(this.brightMat,t[0]);for(let s=1;s<t.length;s++)this.downMat.uniforms.tIn.value=t[s-1].texture,this.downMat.uniforms.uTexel.value.set(1/t[s-1].width,1/t[s-1].height),this.fs(this.downMat,t[s]);let i=t[4];for(let s=3;s>=0;s--)this.upMat.uniforms.tIn.value=i.texture,this.upMat.uniforms.tBase.value=t[s].texture,this.upMat.uniforms.uTexel.value.set(1/i.width,1/i.height),this.fs(this.upMat,n[s]),i=n[s];this.flareMat.uniforms.tIn.value=t[2].texture,this.flareMat.uniforms.uTexel.value.set(1/this.flareA.width,1/this.flareA.height),this.flareMat.uniforms.uSpread.value=1.6,this.fs(this.flareMat,this.flareA),this.flareMat.uniforms.tIn.value=this.flareA.texture,this.flareMat.uniforms.uSpread.value=4.5,this.fs(this.flareMat,this.flareB),this.final.tScene.value=this.sceneRT.texture,this.final.tBloom.value=n[0].texture,this.final.tFlare.value=this.flareB.texture,this.final.uTime.value=e,this.fs(this.finalMat,null)}};var ot=(r,e,t)=>new S(r,e,t),Ni=(r,e,t=0)=>ot(r*Math.sin(e),t,r*Math.cos(e)),Rn=r=>r*Math.PI/180,gc={pos:ot(7,1.6,36),scale:1},_n=[{key:"ocean",type:0,radius:3.3,angle:Rn(-22),dist:48,y:-.5,tilt:.35,spin:.035,atmo:[.3,.75,1],moons:[{r:.55,orbit:6.2,speed:.22,phase:1.2,incl:.25}]},{key:"ice",type:1,radius:2.6,angle:Rn(-49),dist:51,y:2.4,tilt:-.2,spin:.02,atmo:[.7,.88,1]},{key:"desert",type:2,radius:3.7,angle:Rn(-76),dist:49,y:-1.6,tilt:.45,spin:.028,atmo:[1,.62,.34],ring:!0},{key:"lava",type:3,radius:2.9,angle:Rn(-103),dist:51,y:1,tilt:.1,spin:.04,atmo:[1,.36,.12]},{key:"giant",type:4,radius:6.4,angle:Rn(-131),dist:60,y:3.5,tilt:.18,spin:.004,faceLon:.7,atmo:[1,.8,.58],moons:[{r:.75,orbit:11.5,speed:.16,phase:.4,incl:.12},{r:.48,orbit:15,speed:.1,phase:2.6,incl:-.2}]}];_n.forEach(r=>{r.pos=Ni(r.dist,r.angle,r.y)});var Aa={pos:Ni(52,Rn(-163),3),radius:5},Tr=_n.map((r,e)=>2.07+e*.18);function Dm(){let r=[],e=(l,c,h,u=45,d=0)=>r.push({t:l,pos:c,tgt:h,fov:u,roll:d}),t=gc.pos;e(-.2,ot(0,1.6,29),ot(0,-1.2,0),39),e(0,ot(0,2.05,26),ot(0,-1.25,0),41),e(.42,ot(-1.6,2.6,22),ot(0,-1,0),44,-.02),e(.78,ot(4,3.6,32),ot(2.2,-.4,10),46,.01);let n=(l,c,h)=>t.clone().add(ot(Math.sin(l)*c,h,Math.cos(l)*c)),i=l=>t.clone().lerp(ot(0,0,0),l);e(1,n(.95,24,4),i(.22),44),e(1.28,n(.6,20,2.6),i(.17),42,.02),e(1.55,n(.12,19,-1.2),i(.14),42,0),e(1.8,n(-.5,20.5,2),i(.18),44,-.03),e(1.97,n(-1.05,25,3.2),i(.3),46,-.02),e(2,Ni(43.5,Rn(-9),.9),Ni(47,Rn(-24),-.5),54,.06),_n.forEach((l,c)=>{let h=Tr[c],u=l.angle,d=(R,A,P)=>Ni(A,u+R,l.y+P),p=R=>{let A=l.pos.clone().sub(R).normalize(),P=R.clone().negate().normalize();return R.clone().add(A.multiplyScalar(1.15).add(P).normalize().multiplyScalar(20))},f=l.radius/3.1,y=12*f,m=l.dist+y,g=R=>R*f*62/(m+2),x=d(g(.205),m+2,2.4*f),v=d(g(.15),m,1.2*f),_=d(g(.095),m-1,.3*f);e(h-.04,x,p(x),47,.02*(c%2?1:-1)),e(h+.05,v,p(v),46,0),l.camMid=v,e(h+.125,_,p(_),46,.02*(c%2?-1:1))});let s=Aa.pos,a=s.clone().sub(Ni(70,Rn(-145),4)).normalize(),o=l=>s.clone().sub(a.clone().multiplyScalar(l));return e(3.06,Ni(70,Rn(-145),5.5),s.clone().add(ot(0,0,0)),50,.03),e(3.22,o(26).add(ot(1.5,1.2,0)),s,50,.06),e(3.4,o(12),s,54,.14),e(3.52,o(5.6),s,62,.26),e(3.62,o(2),s.clone().add(a.clone().multiplyScalar(10)),72,.4),e(3.78,o(-4),s.clone().add(a.clone().multiplyScalar(20)),74,.7),e(3.92,ot(-6,6.5,26),ot(0,.6,0),52,.25),e(4,ot(-3,4.6,19.5),ot(0,.3,0),50,.08),e(4.3,ot(3.5,3.6,16.5),ot(0,.1,0),50,-.02),e(4.6,ot(7.5,2.4,11.5),ot(0,0,0),52,-.05),e(4.86,ot(4,1.25,6.4),ot(0,0,0),58,-.1),e(5,ot(1.8,.55,3.15),ot(-.6,-.1,-2),70,-.2),e(5.2,ot(1.2,.4,2.6),ot(-.8,-.1,-3),74,-.25),e(6.3,ot(1.2,.4,2.6),ot(-.8,-.1,-3),74,-.25),r.sort((l,c)=>l.t-c.t),r}var Um=Dm();function as(r,e,t,n,i){let s=i*i,a=s*i;return .5*(2*e+(-r+t)*i+(2*r-5*e+4*t-n)*s+(-r+3*e-3*t+n)*a)}function Mu(r,e,t,n,i,s){return s.set(as(r.x,e.x,t.x,n.x,i),as(r.y,e.y,t.y,n.y,i),as(r.z,e.z,t.z,n.z,i))}function vc(r,e){let t=Um,n=0;for(;n<t.length-2&&t[n+1].t<=r;)n++;let i=t[Math.max(n-1,0)],s=t[n],a=t[Math.min(n+1,t.length-1)],o=t[Math.min(n+2,t.length-1)],l=Dt.clamp((r-s.t)/Math.max(a.t-s.t,1e-5),0,1);return Mu(i.pos,s.pos,a.pos,o.pos,l,e.pos),Mu(i.tgt,s.tgt,a.tgt,o.tgt,l,e.tgt),e.fov=as(i.fov,s.fov,a.fov,o.fov,l),e.roll=as(i.roll,s.roll,a.roll,o.roll,l),e}var ft=(r,e,t)=>{let n=Dt.clamp((t-r)/(e-r),0,1);return n*n*(3-2*n)},Mn=(r,e,t,n,i)=>ft(e,t,r)*(1-ft(n,i,r));var Ra=class{constructor(e){this.pipe=e;let t=()=>({uCamPos:{value:new S},uCamWorld:{value:new Oe},uProjInv:{value:new Oe},uPix:{value:.001}}),n=(i,s,a=!1)=>new rt({vertexShader:wa,fragmentShader:i,uniforms:s,depthTest:!1,depthWrite:!1,transparent:a,blending:a?Oh:Nh});this.bh=n(hu,{...t(),uTime:{value:0},uDiskTime:{value:0},uSteps:{value:160},uDiskBright:{value:1},uStarBright:{value:1},uFade:{value:0}}),this.worm=n(uu,{...t(),uTime:{value:0},uWormPos:{value:Aa.pos.clone()},uWormR:{value:Aa.radius},uMix:{value:0}},!0),this.tunnel=n(du,{uRes:{value:new ne(1,1)},uTime:{value:0},uMix:{value:0},uProg:{value:0},uSpeed:{value:1.6},uPix:{value:.001}},!0),this.tess=n(pu,{uRes:{value:new ne(1,1)},uTime:{value:0},uMix:{value:0},uProg:{value:0},uLook:{value:new ne},uWave:{value:-1},uMorse:{value:0},uFlicker:{value:1},uPix:{value:.001},uPluck:{value:99}},!0)}syncCamera(e){let t=Dt.degToRad(e.fov)/Math.max(this.pipe.bgRT.height,1);for(let n of[this.bh,this.worm]){let i=n.uniforms;i.uCamPos.value.copy(e.position),i.uCamWorld.value.copy(e.matrixWorld),i.uProjInv.value.copy(e.projectionMatrixInverse),i.uPix.value=t}this.tunnel.uniforms.uRes.value.set(this.pipe.bgRT.width,this.pipe.bgRT.height),this.tess.uniforms.uRes.value.set(this.pipe.bgRT.width,this.pipe.bgRT.height)}render(e){let t=this.pipe;t.beginBg(),e.tess<1&&(e.bh>0&&t.fs(this.bh,t.bgRT),e.worm>.001&&(this.worm.uniforms.uMix.value=e.worm,t.fs(this.worm,t.bgRT)),e.tunnel>.001&&(this.tunnel.uniforms.uMix.value=e.tunnel,t.fs(this.tunnel,t.bgRT))),e.tess>.001&&(this.tess.uniforms.uMix.value=e.tess,t.fs(this.tess,t.bgRT))}};function Nm(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d");e.fillStyle="#7d8086",e.fillRect(0,0,512,512);let t=7,n=()=>(t=t*16807%2147483647)/2147483647;for(let s=0;s<160;s++){let a=(n()*16|0)*32,o=(n()*16|0)*32,l=(1+n()*4|0)*32,c=(1+n()*3|0)*32,h=105+n()*50|0;e.fillStyle=`rgb(${h},${h+2},${h+6})`,e.fillRect(a,o,l,c)}e.strokeStyle="rgba(20,22,26,.85)",e.lineWidth=2;for(let s=0;s<=512;s+=64)e.beginPath(),e.moveTo(s,0),e.lineTo(s,512),e.stroke(),e.beginPath(),e.moveTo(0,s),e.lineTo(512,s),e.stroke();e.fillStyle="rgba(30,30,34,.7)";for(let s=0;s<400;s++)e.fillRect(n()*512,n()*512,2,2);e.fillStyle="rgba(255,106,26,.75)";for(let s=0;s<10;s++)e.fillRect(n()*480,n()*480,28,5);let i=new Pi(r);return i.colorSpace=Et,i.wrapS=i.wrapT=Gr,i.anisotropy=4,i}function Om(){let r=document.createElement("canvas");r.width=256,r.height=64;let e=r.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,64);let t=3,n=()=>(t=t*16807%2147483647)/2147483647;for(let s=6;s<250;s+=12){if(n()<.2)continue;let a=n()<.7;e.fillStyle=a?`rgba(255,${190+n()*50|0},${120+n()*60|0},1)`:"rgba(159,216,255,1)",e.fillRect(s,26,7,12)}let i=new Pi(r);return i.colorSpace=Et,i}function Fm(){let r=document.createElement("canvas");r.width=512,r.height=256;let e=r.getContext("2d");e.fillStyle="#0a1426",e.fillRect(0,0,512,256);for(let n=0;n<256;n+=32)for(let i=0;i<512;i+=32){let s=e.createLinearGradient(i,n,i+32,n+32);s.addColorStop(0,"#16305a"),s.addColorStop(1,"#0b1730"),e.fillStyle=s,e.fillRect(i+2,n+2,28,28)}e.fillStyle="#c9ccd2",e.fillRect(0,126,512,4);let t=new Pi(r);return t.colorSpace=Et,t.anisotropy=4,t}function Bm(){let r=document.createElement("canvas");r.width=512,r.height=256;let e=r.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,512,256),e.strokeStyle="rgba(255,190,110,.55)",e.lineWidth=1.5;for(let n=0;n<=512;n+=32)e.beginPath(),e.moveTo(n+.5,0),e.lineTo(n+.5,256),e.stroke();for(let n=0;n<=256;n+=32)e.beginPath(),e.moveTo(0,n+.5),e.lineTo(512,n+.5),e.stroke();e.fillStyle="rgba(255,220,170,.9)",e.fillRect(0,126,512,4);let t=new Pi(r);return t.colorSpace=Et,t}var zm=()=>new rt({uniforms:{uColor:{value:new Ie(10475775).multiplyScalar(2.6)},uThick:{value:.045},uAlpha:{value:0}},vertexShader:"uniform float uThick; void main(){ vec3 p = position + normal * uThick; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uAlpha; void main(){ gl_FragColor = vec4(uColor * uAlpha, uAlpha); }",side:Mr,transparent:!0,depthWrite:!1,blending:Sr}),Ca=class{constructor(e){this.group=new At,this.group.position.copy(gc.pos),this.group.rotation.set(.42,.3,-.28),this.modules={},this.pickables=[],this.lights=[],this.hovered=null;let t=Nm(),n=new Wn({color:13159634,map:t,metalness:.72,roughness:.42,envMap:e,envMapIntensity:1.2,flatShading:!0}),i=new Wn({color:2764083,metalness:.85,roughness:.35,envMap:e,envMapIntensity:1,flatShading:!0}),s=new Wn({color:14263626,metalness:1,roughness:.28,envMap:e,envMapIntensity:1.6,flatShading:!0}),a=new Wn({color:14212064,map:t,metalness:.55,roughness:.5,envMap:e,emissive:16777215,emissiveMap:Om(),emissiveIntensity:1.25,flatShading:!0}),o=new Wn({color:13161727,map:Fm(),metalness:.45,roughness:.26,envMap:e,envMapIntensity:2.6,emissive:16777215,emissiveMap:Bm(),emissiveIntensity:.7,side:hi});this.mats=[n,i,s,a,o];let l=(re,b,E=this.group)=>{E.add(b),this.modules[re]||(this.modules[re]={meshes:[],outlines:[]}),this.modules[re].meshes.push(b),b.userData.module=re,this.pickables.push(b);let D=new Pe(b.geometry,zm());return D.renderOrder=2,b.add(D),this.modules[re].outlines.push(D),b},c=l("core",new Pe(new Gt(.62,.62,3.4,10),n));l("core",new Pe(new Gt(.35,.62,.6,10),i)).position.y=2,l("core",new Pe(new Gt(.62,.35,.6,10),i)).position.y=-2;let h=l("core",new Pe(new Gt(.68,.68,.4,10),s));h.position.y=.6,this.spinner=new At,this.group.add(this.spinner);let u=new yr(3.6,.3,8,56);u.rotateX(Math.PI/2),l("hab",new Pe(u,n),this.spinner);let d=new an(1.2,.82,.9);for(let re=0;re<6;re++){let b=re/6*Math.PI*2+.26,E=l("hab",new Pe(d,a),this.spinner);E.position.set(Math.cos(b)*3.6,0,Math.sin(b)*3.6),E.rotation.y=-b+Math.PI/2}let p=new Gt(.07,.07,3,6);p.rotateZ(Math.PI/2),p.translate(2.1,0,0);for(let re=0;re<3;re++){let b=l("hab",new Pe(p,i),this.spinner);b.rotation.y=re/3*Math.PI*2+.78}let f=new xt;f.position.set(Math.cos(.26)*3.6,.45,Math.sin(.26)*3.6),this.spinner.add(f);let y=l("solar",new Pe(new Gt(.06,.06,3.2,6),i));y.position.y=3.6;let m=new an(3.6,.035,1.25);for(let re of[-1,1]){for(let E of[0,1]){let D=l("solar",new Pe(m,o));D.position.set(re*(2.05+E*3.75),4.2+E*0,0),D.rotation.x=.35}let b=l("solar",new Pe(new Gt(.035,.035,7.6,5),i));b.rotation.z=Math.PI/2,b.position.set(re*3.9,4.2,0)}let g=new xt;g.position.set(-5.8,4.4,0),this.group.add(g);let x=[];for(let re=0;re<=10;re++){let b=re/10*1.15;x.push(new ne(b,b*b*.42))}let v=new vr(x,18),_=new At;_.position.set(.62,1.3,0),this.group.add(_);let R=l("dish",new Pe(new Gt(.05,.05,1.4,5),i),_);R.rotation.z=Math.PI/2,R.position.x=.7;let A=l("dish",new Pe(v,new Wn({color:15330286,metalness:.4,roughness:.3,envMap:e,side:hi,flatShading:!0})),_);A.position.set(1.5,0,0),A.rotation.set(0,0,-1.25),this.dish=A;let P=l("dish",new Pe(new xr(.06,.55,5),s),A);P.position.y=.55;let L=new xt;L.position.set(0,.5,0),A.add(L);let B=l("dock",new Pe(new an(.28,2.6,.28),i));B.position.y=-3.5;let W=new yr(.55,.1,6,20);W.rotateX(Math.PI/2);let X=l("dock",new Pe(W,s));X.position.y=-4.9;for(let re of[-1,1])l("dock",new Pe(new Qr(.24,.9,3,8),n)).position.set(re*.62,-3.4,0);let V=new xt;V.position.set(0,1.9,.5),this.group.add(V);let T=new En(.06,6,4),F=(re,b,E,D=this.group)=>{let N=new Pe(T,new oi({color:b}));N.position.copy(re),D.add(N),this.lights.push({m:N,color:new Ie(b),phase:E})};F(new S(-7.7,4.2,0),16724e3,0),F(new S(7.7,4.2,0),3211120,.5),F(new S(0,5.25,0),16777215,.25),F(new S(0,-5.1,0),16738842,.75);for(let re=0;re<6;re++){let b=re/6*Math.PI*2;F(new S(Math.cos(b)*3.6,.34,Math.sin(b)*3.6),10475775,re/6,this.spinner)}this.anchors={core:V,hab:f,dish:L,solar:g,dock:X};let j=this.ship=new At,K=new Gt(.06,.2,1.1,6);K.rotateX(Math.PI/2),j.add(new Pe(K,n));let J=new Pe(new xr(.06,.32,6),s);J.rotation.x=Math.PI/2,J.position.z=.7,j.add(J);let ae=new an(.9,.025,.34);ae.translate(0,0,-.25);let ge=new Pe(ae,i);j.add(ge);let me=new Pe(new an(.025,.26,.3),i);me.position.set(0,.14,-.36),j.add(me);let ie=new Pe(new En(.07,8,6),new oi({color:new Ie(10475775).multiplyScalar(2.2)}));ie.position.set(0,.07,.32),j.add(ie),this.engine=new Pe(new En(.11,10,8),new oi({color:new Ie(1,.55,.2).multiplyScalar(9),transparent:!0,blending:Sr,depthWrite:!1})),this.engine.position.z=-.6,this.engine.scale.set(1,1,1.8),j.add(this.engine),j.scale.setScalar(1.15),this.group.add(j);let oe=70,fe=new nt;this.trailPos=new Float32Array(oe*3);let ye=new Float32Array(oe*3);for(let re=0;re<oe;re++){let b=Math.pow(1-re/oe,2.2);ye.set([3.2*b,1.5*b,.55*b],re*3)}fe.setAttribute("position",new pt(this.trailPos,3)),fe.setAttribute("color",new pt(ye,3)),this.trail=new oa(fe,new Zr({vertexColors:!0,transparent:!0,blending:Sr,depthWrite:!1})),this.trail.frustumCulled=!1,this.group.add(this.trail),this.trailN=0,this._v=new S,this._v2=new S,this._f=new S(0,0,1),this.labels={core:["CORE","\u044F\u0434\u0440\u043E \xB7 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 4.2 \u0413\u0412\u0442"],hab:["HAB-RING","\u0436\u0438\u043B\u043E\u0439 \u043A\u043E\u043D\u0442\u0443\u0440 \xB7 0.38 g"],solar:["SOLAR ARRAY","\u043F\u0430\u043D\u0435\u043B\u0438 \xB7 42 \u043A\u0412\u0442"],dish:["COMMS","\u0434\u0430\u043B\u044C\u043D\u044F\u044F \u0441\u0432\u044F\u0437\u044C \xB7 8.4 \u0413\u0413\u0446"],dock:["DOCK","\u0448\u043B\u044E\u0437 \xB7 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D"]}}setHover(e){this.hovered=e}shipPos(e,t){let n=e*.32;return t.set(Math.cos(n)*10.5,1.4+Math.sin(n*2)*1.6+Math.sin(n)*1.2,Math.sin(n)*7)}update(e,t){this.spinner.rotation.y+=t*.12;let n=this.shipPos(e,this._v),i=this.shipPos(e+.05,this._v2);this.ship.position.copy(n),this.ship.quaternion.setFromUnitVectors(this._f,i.sub(n).normalize()),this.engine.scale.set(1,1,1.6+Math.sin(e*40)*.25);let s=this.trailPos;s.copyWithin(3,0,s.length-3);let a=this._v2.copy(this._f).applyQuaternion(this.ship.quaternion).multiplyScalar(-.7*1.15).add(n);if(s[0]=a.x,s[1]=a.y,s[2]=a.z,this.trailN<s.length/3){this.trailN++;for(let o=this.trailN;o<s.length/3;o++)s[o*3]=a.x,s[o*3+1]=a.y,s[o*3+2]=a.z}this.trail.geometry.attributes.position.needsUpdate=!0,this.group.rotation.y+=t*.012,this.dish.rotation.x=Math.sin(e*.3)*.25;for(let o of this.lights){let l=(e*.8+o.phase)%1<.12?1:.08;o.m.material.color.copy(o.color).multiplyScalar(l*6)}for(let o in this.modules){let l=o===this.hovered?1:0;for(let c of this.modules[o].outlines){let h=c.material.uniforms.uAlpha;h.value+=(l-h.value)*Math.min(1,t*10),c.visible=h.value>.01}}}anchorWorld(e,t){return this.anchors[e].getWorldPosition(t)}};function Su(r){let e=new on,t=new rt({side:Mr,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec3 vD;
      void main(){
        vec3 d = normalize(vD);
        vec3 toBH = normalize(vec3(-0.19, -0.04, -0.98));
        float a = max(dot(d, toBH), 0.0);
        float disk = exp(-pow(d.y + .04, 2.0) * 140.0) * pow(a, 3.0);
        vec3 c = vec3(.006, .007, .011);
        c += vec3(1.0, .62, .26) * disk * 9.0 + vec3(1.0, .8, .55) * pow(a, 40.0) * 6.0;
        c += vec3(.25, .4, .6) * max(d.y, 0.0) * .05;
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new Pe(new En(10,48,24),t));let n=new gr(r),i=n.fromScene(e,0,.1,100);return n.dispose(),i.texture}var km=`
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float fbm(vec3 p){ float s = 0.0, a = .5; for (int i = 0; i < 5; i++){ s += a * snoise(p); p *= 2.02; a *= .5; } return s * .5 + .5; }
float fbm3o(vec3 p){ float s = 0.0, a = .5; for (int i = 0; i < 3; i++){ s += a * snoise(p); p *= 2.1; a *= .5; } return s * .5 + .5; }
vec2 voronoi(vec3 x){
  vec3 p = floor(x); vec3 f = fract(x); float d1 = 8.0, d2 = 8.0;
  for (int k = -1; k <= 1; k++) for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec3 b = vec3(float(i), float(j), float(k));
    vec3 o = fract(sin(vec3(dot(p + b, vec3(127.1, 311.7, 74.7)), dot(p + b, vec3(269.5, 183.3, 246.1)), dot(p + b, vec3(113.5, 271.9, 124.6)))) * 43758.5453);
    vec3 r = b + o - f; float d = dot(r, r);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return vec2(sqrt(d1), sqrt(d2));
}
`,xc=`
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main(){
  vObj = normalize(position);
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,bu=r=>`
#define TYPE ${r}
uniform float uTime; uniform vec3 uAtmo; uniform float uHover; uniform vec3 uFill;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
${km}
void main(){
  vec3 p = vObj;
  vec3 N = normalize(vN);
  vec3 L = normalize(-vW);           // \u0441\u0432\u0435\u0442 \u043E\u0442 \u0430\u043A\u043A\u0440\u0435\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430
  vec3 V = normalize(cameraPosition - vW);
  vec3 H = normalize(L + V);
  float ndl = dot(N, L);
  float diff = smoothstep(-.08, .9, ndl);
  vec3 sun = vec3(1.0, .80, .58) * 2.4;
  vec3 col = vec3(0.0);
  vec3 emis = vec3(0.0);
  vec3 alb = vec3(0.0);
  float spec = 0.0;

#if TYPE == 0
  // \u0432\u043E\u0434\u043D\u044B\u0439 \u043C\u0438\u0440: \u0433\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0438\u0435 \u0432\u043E\u043B\u043D\u044B
  float sw = sin(dot(p, normalize(vec3(.25, 1.0, .15))) * 70.0 + fbm3o(p * 3.0) * 9.0 - uTime * 1.3);
  float crest = pow(.5 + .5 * sw, 14.0);
  float swell = fbm3o(p * 7.0 + vec3(uTime * .02, 0, 0));
  vec3 deep = vec3(.004, .035, .07), shallow = vec3(.01, .16, .24);
  vec3 water = mix(deep, shallow, smoothstep(.3, .8, swell));
  water += vec3(.55, .7, .75) * crest * (.25 + .5 * swell);
  vec3 Np = normalize(N + (vec3(snoise(p * 26.0 + uTime * .3), snoise(p * 26.0 + 9.0), snoise(p * 26.0 + 17.0 - uTime * .3)) * .14 + vec3(0.0, crest * .3, 0.0)));
  spec = pow(max(dot(Np, H), 0.0), 140.0) * 6.0 + pow(max(dot(N, H), 0.0), 18.0) * .25;
  float cl = smoothstep(.56, .82, fbm(p * 3.2 + vec3(uTime * .012, 0.0, uTime * .006)));
  alb = mix(water, vec3(.85, .9, .95), cl * .85);
  spec *= (1.0 - cl);
#elif TYPE == 1
  // \u043B\u0435\u0434\u044F\u043D\u043E\u0439 \u043C\u0438\u0440: \u0442\u0440\u0435\u0449\u0438\u043D\u044B \u0438 \u0437\u0430\u043C\u0451\u0440\u0437\u0448\u0438\u0435 \u043E\u0431\u043B\u0430\u043A\u0430
  vec2 vr = voronoi(p * 5.5);
  float crack = 1.0 - smoothstep(.0, .06, vr.y - vr.x);
  vec2 vr2 = voronoi(p * 17.0);
  float crack2 = 1.0 - smoothstep(.0, .04, vr2.y - vr2.x);
  vec3 ice = mix(vec3(.62, .76, .88), vec3(.93, .97, 1.0), fbm(p * 3.0));
  ice = mix(ice, vec3(.10, .32, .55), crack * .85 + crack2 * .35);
  float frozen = smoothstep(.52, .7, fbm(p * 2.4 + 5.0));
  ice = mix(ice, vec3(1.0), frozen * .75);
  alb = ice;
  float sss = smoothstep(-.25, .1, ndl) * (1.0 - smoothstep(.1, .45, ndl));
  col += vec3(.08, .35, .75) * sss * .9;
  spec = pow(max(dot(N, H), 0.0), 60.0) * 1.2 * (1.0 - frozen);
#elif TYPE == 2
  // \u043F\u0443\u0441\u0442\u044B\u043D\u043D\u044B\u0439 \u043C\u0438\u0440: \u0434\u044E\u043D\u044B \u0438 \u043F\u044B\u043B\u0435\u0432\u044B\u0435 \u0431\u0443\u0440\u0438
  float dunes = 1.0 - abs(snoise(vec3(p.x * 30.0, p.y * 9.0, p.z * 30.0) + fbm3o(p * 4.0) * 2.0));
  dunes = pow(dunes, 3.0);
  float rock = smoothstep(.55, .75, fbm(p * 4.5 + 2.0));
  vec3 sand = mix(vec3(.70, .34, .13), vec3(1.0, .64, .32), dunes);
  sand = mix(sand, vec3(.28, .16, .10), rock * .8);
  float canyon = 1.0 - smoothstep(.0, .03, abs(snoise(p * 6.0 + 11.0)));
  sand = mix(sand, vec3(.15, .07, .04), canyon * .7);
  float lat = p.y;
  float storm = smoothstep(.5, .85, fbm(vec3(p.x * 3.0 + uTime * .05, p.y * 10.0, p.z * 3.0 - uTime * .04))) * exp(-pow((lat - .22) / .18, 2.0));
  sand = mix(sand, vec3(.98, .78, .52), storm * .85);
  alb = sand;
  spec = pow(max(dot(N, H), 0.0), 20.0) * .08;
#elif TYPE == 4
  // \u0433\u0430\u0437\u043E\u0432\u044B\u0439 \u0433\u0438\u0433\u0430\u043D\u0442: \u043F\u043E\u043B\u043E\u0441\u044B \u0441 \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435\u043C \u0438 \u0432\u0435\u0447\u043D\u044B\u0439 \u0448\u0442\u043E\u0440\u043C
  float lat = p.y;
  float sp = .018 + .045 * sin(lat * 9.0) + .02 * sin(lat * 23.0);
  float ra = uTime * sp;
  vec3 q = vec3(p.x * cos(ra) - p.z * sin(ra), p.y, p.x * sin(ra) + p.z * cos(ra));
  float turb = fbm(q * vec3(2.2, 7.0, 2.2) + 3.0);
  float fine = fbm3o(q * vec3(6.0, 22.0, 6.0) + turb * 2.0);
  float bands = .5 + .5 * sin(lat * 21.0 + turb * 3.4);
  float bands2 = .5 + .5 * sin(lat * 61.0 + fine * 4.0 + turb * 2.0);
  vec3 cream = vec3(.90, .80, .64), rust = vec3(.66, .40, .25), choc = vec3(.36, .21, .14), pale = vec3(.97, .93, .86);
  alb = mix(rust, cream, smoothstep(.25, .75, bands));
  alb = mix(alb, choc, smoothstep(.75, 1.0, 1.0 - bands) * .55);
  alb = mix(alb, pale, pow(bands2, 5.0) * .45);
  alb *= .85 + .3 * fine;
  // \u0448\u0442\u043E\u0440\u043C: \u043E\u0432\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0438\u0445\u0440\u044C \u0432 \u044E\u0436\u043D\u043E\u043C \u043F\u043E\u043B\u0443\u0448\u0430\u0440\u0438\u0438
  float lon = atan(q.x, q.z);
  vec2 sd = vec2(lon - .7, (lat + .3) * 2.2);
  float sr = length(sd);
  float swirlA = 11.0 * exp(-sr * 6.0) + uTime * .15;
  vec2 sw = mat2(cos(swirlA), -sin(swirlA), sin(swirlA), cos(swirlA)) * sd;
  float storm = 1.0 - smoothstep(.2, .3, sr);
  float stormTex = fbm3o(vec3(sw * 8.0, 1.7));
  vec3 stormC = mix(vec3(.62, .14, .06), vec3(.98, .55, .32), stormTex * smoothstep(.0, .25, sr) + .1);
  alb = mix(alb, stormC, storm * .95);
  float ringC = 1.0 - smoothstep(.0, .06, abs(sr - .31));
  alb = mix(alb, vec3(.99, .95, .88), ringC * (.55 + .45 * fbm3o(vec3(sw * 14.0, 4.0))));
  spec = pow(max(dot(N, H), 0.0), 12.0) * .05;
#elif TYPE == 5
  // \u043B\u0443\u043D\u0430: \u0441\u0435\u0440\u044B\u0439 \u0440\u0435\u0433\u043E\u043B\u0438\u0442 \u0438 \u043A\u0440\u0430\u0442\u0435\u0440\u044B
  vec2 cr = voronoi(p * 5.0);
  float rimC = smoothstep(.10, .0, abs(cr.x - .32)) * .6;
  float bowl = 1.0 - smoothstep(.0, .3, cr.x);
  float mare = smoothstep(.5, .7, fbm(p * 2.0 + 9.0));
  alb = vec3(.52, .50, .48) * (.75 + .4 * fbm3o(p * 12.0));
  alb = mix(alb, vec3(.24, .23, .23), mare * .7);
  alb *= 1.0 - bowl * .35;
  alb += rimC * .18;
  spec = 0.0;
#else
  // \u0432\u0443\u043B\u043A\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0438\u0440
  vec2 vr = voronoi(p * 4.2 + vec3(0.0, uTime * .01, 0.0));
  float edge = vr.y - vr.x;
  float crack = 1.0 - smoothstep(.0, .045, edge);
  float crust = fbm(p * 5.0);
  vec3 rock = mix(vec3(.035, .025, .022), vec3(.16, .11, .09), crust);
  float lakes = smoothstep(.62, .7, fbm(p * 2.2 + 3.0));
  float pulse = .75 + .25 * sin(uTime * 1.3 + crust * 12.0);
  alb = rock;
  emis += vec3(1.0, .28, .03) * (crack * 1.5 + lakes * .9) * pulse;
  emis += vec3(1.0, .7, .28) * pow(crack, 4.0) * 1.8 * pulse;
  emis *= .55 + .45 * smoothstep(.4, -.3, ndl); // \u043D\u043E\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u0441\u0438\u043B\u044C\u043D\u0435\u0435
  spec = pow(max(dot(N, H), 0.0), 30.0) * .15;
#endif

  float fd = max(dot(N, uFill), 0.0);
  col += alb * (sun * diff + mix(vec3(.30, .42, .62), vec3(.58, .46, .38), float(TYPE == 2 || TYPE == 4)) * fd * .55);
  col += sun * spec * smoothstep(0.0, .2, ndl);
  col += vec3(.5, .65, .9) * pow(max(dot(N, normalize(uFill + V)), 0.0), 40.0) * .12 * fd;
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.5);
  col += uAtmo * rim * smoothstep(-.35, .5, ndl) * 1.6;
  col += vec3(.012, .016, .025) * (1.0 - diff);
  col += emis;
  col += vec3(.62, .85, 1.0) * uHover * rim * 1.5;
  gl_FragColor = vec4(col, 1.0);
}`,Hm=`
uniform vec3 uAtmo; uniform float uScale;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main(){
  vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); vec3 L = normalize(-vW);
  float limb = sqrt(1.0 - 1.0 / (uScale * uScale));
  float f = clamp(-dot(N, V) / limb, 0.0, 1.0);
  float glow = pow(f, 3.0);
  float lit = smoothstep(-.4, .6, dot(N, L));
  gl_FragColor = vec4(uAtmo * glow * lit * 1.6, 1.0);
}`,Vm=`
uniform float uIn; uniform float uOut; uniform vec3 uPlanet; uniform float uR;
varying vec3 vW; varying vec3 vLocal;
float h(float x){ return fract(sin(x * 127.1) * 43758.5); }
float n1(float x){ float i = floor(x), f = fract(x); return mix(h(i), h(i + 1.0), f * f * (3.0 - 2.0 * f)); }
void main(){
  float r = length(vLocal.xy);
  float t = (r - uIn) / (uOut - uIn);
  float bands = n1(t * 60.0) * .6 + n1(t * 180.0) * .4;
  float a = smoothstep(.0, .05, t) * (1.0 - smoothstep(.85, 1.0, t)) * (.25 + .75 * bands);
  a *= 1.0 - smoothstep(.36, .40, t) * (1.0 - smoothstep(.40, .45, t)) * .9;
  // \u0442\u0435\u043D\u044C \u043F\u043B\u0430\u043D\u0435\u0442\u044B \u043D\u0430 \u043A\u043E\u043B\u044C\u0446\u0435
  vec3 L = normalize(-uPlanet);
  vec3 toP = vW - uPlanet;
  float along = dot(toP, -L);
  float perp = length(toP + L * along);
  float shadow = 1.0 - .8 * smoothstep(0.0, uR * .3, along) * (1.0 - smoothstep(uR * .82, uR * 1.08, perp));
  vec3 c = mix(vec3(.75, .58, .42), vec3(1.0, .85, .66), bands) * 1.4 * shadow;
  gl_FragColor = vec4(c * a, a);
}`,Gm=bu(5),Pa=class{constructor(){this.group=new At,this.items=[];let e=new En(1,96,64);_n.forEach((t,n)=>{let i=new At;i.position.copy(t.pos),i.rotation.z=t.tilt;let s=new Ie(...t.atmo),a=new rt({vertexShader:xc,fragmentShader:bu(t.type),uniforms:{uTime:{value:0},uAtmo:{value:s},uHover:{value:0},uFill:{value:t.pos.clone().normalize().add(new S(0,.55,0)).normalize()}}}),o=new Pe(e,a);if(o.scale.setScalar(t.radius),t.camMid){let u=t.camMid.clone().sub(t.pos);o.rotation.y=Math.atan2(u.x,u.z)-(t.faceLon||0)}i.add(o);let l=1.18,c=new Pe(e,new rt({vertexShader:xc,fragmentShader:Hm,side:Mr,transparent:!0,depthWrite:!1,blending:Sr,uniforms:{uAtmo:{value:s},uScale:{value:l}}}));if(c.scale.setScalar(t.radius*l),i.add(c),t.ring){let u=t.radius*1.45,d=t.radius*2.5,p=new rs(u,d,160,1),f=new Pe(p,new rt({vertexShader:"varying vec3 vW; varying vec3 vLocal; void main(){ vLocal = position; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:Vm,side:hi,transparent:!0,depthWrite:!1,uniforms:{uIn:{value:u},uOut:{value:d},uPlanet:{value:t.pos.clone()},uR:{value:t.radius}}}));f.rotation.x=Math.PI/2-.12,i.add(f)}let h=(t.moons||[]).map(u=>{let d=new Pe(e,new rt({vertexShader:xc,fragmentShader:Gm,uniforms:{uTime:{value:0},uAtmo:{value:new Ie(0,0,0)},uHover:{value:0},uFill:a.uniforms.uFill}}));d.scale.setScalar(u.r);let p=new At;return p.rotation.x=u.incl,p.rotation.y=u.phase,d.position.set(u.orbit,0,0),p.add(d),i.add(p),{m:u,pivot:p,mesh:d}});this.group.add(i),this.items.push({cfg:t,holder:i,mesh:o,mat:a,moons:h,hover:0,sphere:new sn(t.pos.clone(),t.radius*1.05)})})}update(e,t,n){for(let[i,s]of this.items.entries()){s.mesh.rotation.y+=t*s.cfg.spin;for(let a of s.moons)a.pivot.rotation.y+=t*a.m.speed,a.mesh.rotation.y+=t*.05;s.mat.uniforms.uTime.value=e,s.hover+=((i===n?1:0)-s.hover)*Math.min(1,t*8),s.mat.uniforms.uHover.value=s.hover}}pick(e){let t=-1,n=1/0,i=new S;return this.items.forEach((s,a)=>{if(e.intersectSphere(s.sphere,i)){let o=i.distanceToSquared(e.origin);o<n&&(n=o,t=a)}}),t}};var Wm=`
attribute vec2 aTarget;
attribute vec4 aSeed;
uniform vec2 uRes;
uniform vec2 uHole;
uniform float uIntro;
uniform float uSuck;
uniform float uTime;
uniform float uSize;
uniform float uDpr;
varying float vHeat;
varying float vA;
#define PI 3.14159265
void main(){
  float delay = aSeed.x * .38;
  float t = clamp((uIntro - delay) / .62, 0.0, 1.0);
  float a0 = aSeed.y * 6.2831853;
  float R = max(uRes.x, uRes.y);
  float r0 = (.22 + .42 * aSeed.z) * R;
  vec2 pos;
  float heat;
  if (t < .5) {
    float k = t / .5;
    float e = k * k * (3.0 - 2.0 * k);
    float r = mix(r0, 3.0, e * e);
    float a = a0 + e * 7.0 + k * 1.5;
    pos = uHole + vec2(cos(a), sin(a) * .42) * r;
    heat = k;
  } else {
    float k = (t - .5) / .5;
    float e = 1.0 - pow(1.0 - k, 4.0);
    vec2 dir = aTarget - uHole;
    vec2 perp = vec2(-dir.y, dir.x);
    pos = uHole + dir * e + perp * sin(k * PI) * .35 * (aSeed.w - .5);
    heat = 1.0 - k;
  }
  float settled = step(1.0, t);
  pos += vec2(sin(uTime * 1.7 + aSeed.y * 60.0), cos(uTime * 1.3 + aSeed.z * 60.0)) * .6 * settled;

  // \u0441\u043A\u0440\u043E\u043B\u043B: \u0431\u0443\u043A\u0432\u044B \u0441\u043D\u043E\u0432\u0430 \u0437\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442 \u0432 \u0434\u044B\u0440\u0443
  float s = clamp((uSuck - aSeed.x * .45) / .55, 0.0, 1.0);
  if (s > 0.0) {
    vec2 d = pos - uHole;
    float ss = s * s;
    float r = length(d) * (1.0 - ss);
    float a = atan(d.y, d.x) + ss * 6.0;
    pos = uHole + vec2(cos(a), sin(a) * mix(1.0, .4, s)) * r;
    heat = max(heat, s);
  }
  vHeat = heat;
  vA = (t > 0.0 ? 1.0 : 0.0) * (1.0 - smoothstep(.85, 1.0, s));
  vec2 ndc = pos / uRes * 2.0 - 1.0;
  gl_Position = vec4(ndc.x, -ndc.y, 0.0, 1.0);
  float inflow = t > 0.0 && t < .5 ? .65 : 1.0;
  gl_PointSize = uSize * uDpr * (1.0 + heat * 1.0) * (.7 + .6 * aSeed.w) * inflow;
}`,qm=`
uniform float uAlpha;
varying float vHeat;
varying float vA;
void main(){
  vec2 c = gl_PointCoord - .5;
  float d = length(c);
  float a = smoothstep(.5, .0, d);
  vec3 settled = vec3(1.0, .93, .80) * 1.5;
  vec3 hot = mix(vec3(1.0, .80, .55), vec3(1.0, .52, .16), vHeat) * (2.2 + 2.0 * vHeat);
  vec3 col = mix(settled, hot, vHeat);
  float alpha = a * vA * mix(uAlpha, 1.0, vHeat);
  gl_FragColor = vec4(col * alpha, alpha);
}`,Ia=class{constructor(e){this.max=e,this.scene=new on,this.camera=new li(-1,1,1,-1,0,1),this.geo=new nt,this.geo.setAttribute("position",new pt(new Float32Array(e*3),3)),this.geo.setAttribute("aTarget",new pt(new Float32Array(e*2),2));let t=new Float32Array(e*4);for(let n=0;n<t.length;n++)t[n]=Math.random();this.geo.setAttribute("aSeed",new pt(t,4)),this.geo.setDrawRange(0,0),this.mat=new rt({vertexShader:Wm,fragmentShader:qm,transparent:!0,depthTest:!1,depthWrite:!1,blending:ui,blendSrc:An,blendDst:Vn,uniforms:{uRes:{value:new ne(1,1)},uHole:{value:new ne},uIntro:{value:0},uSuck:{value:0},uTime:{value:0},uSize:{value:2},uDpr:{value:1},uAlpha:{value:1}}}),this.points=new ci(this.geo,this.mat),this.points.frustumCulled=!1,this.scene.add(this.points),this.u=this.mat.uniforms}build(e){let t=e.textContent.trim().split(/\s+/),n=e.innerHTML;e.innerHTML=t.map(v=>`<span style="display:inline-block">${v}</span>`).join(" ");let i=getComputedStyle(e),s=[...e.querySelectorAll("span")],a=innerWidth,o=innerHeight,l=Math.min(1,1600/a),c=document.createElement("canvas");c.width=Math.ceil(a*l),c.height=Math.ceil(o*l);let h=c.getContext("2d",{willReadFrequently:!0}),u=parseFloat(i.fontSize);h.font=`${i.fontWeight} ${u*l}px ${i.fontFamily}`,"letterSpacing"in h&&(h.letterSpacing=`${parseFloat(i.letterSpacing||0)*l||u*.02*l}px`),h.textBaseline="middle",h.fillStyle="#fff";let d=i.textTransform;for(let v of s){let _=v.getBoundingClientRect(),R=v.textContent;d==="uppercase"&&(R=R.toUpperCase()),h.fillText(R,_.left*l,(_.top+_.height*.5)*l)}e.innerHTML=n;let p=h.getImageData(0,0,c.width,c.height).data,f=[],y=Math.max(2,Math.round(u*l/34));for(let v=0;v<c.height;v+=y)for(let _=0;_<c.width;_+=y)p[(v*c.width+_)*4+3]>140&&f.push((_+(Math.random()-.5)*y*.6)/l,(v+(Math.random()-.5)*y*.6)/l);let m=Math.min(this.max,f.length/2),g=[...Array(f.length/2).keys()];for(let v=g.length-1;v>0;v--){let _=Math.random()*(v+1)|0;[g[v],g[_]]=[g[_],g[v]]}let x=this.geo.attributes.aTarget.array;for(let v=0;v<m;v++)x[v*2]=f[g[v]*2],x[v*2+1]=f[g[v]*2+1];this.geo.attributes.aTarget.needsUpdate=!0,this.geo.setDrawRange(0,m),this.u.uSize.value=Math.max(1.6,y/l*.95),this.u.uRes.value.set(a,o)}};var wu=new S,Xm=new rn,Tu=new S,La=class extends xt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Cn=new Oe,jm=new Oe,Da=class{constructor(e={}){let t=this,n,i,s,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,g){let x=g.projectionMatrix.elements[5]*a;g.view&&g.view.enabled?(c.style.transform=`translate( ${-g.view.offsetX*(n/g.view.width)}px, ${-g.view.offsetY*(i/g.view.height)}px )`,c.style.transform+=`scale( ${g.view.fullWidth/g.view.width}, ${g.view.fullHeight/g.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld();let v,_;g.isOrthographicCamera&&(v=-(g.right+g.left)/2,_=(g.top+g.bottom)/2);let R=g.view&&g.view.enabled?g.view.height/g.view.fullHeight:1,A=g.isOrthographicCamera?`scale( ${R} )scale(`+x+")translate("+u(v)+"px,"+u(_)+"px)"+d(g.matrixWorldInverse):`scale( ${R} )translateZ(`+x+"px)"+d(g.matrixWorldInverse),L=(g.isPerspectiveCamera?"perspective("+x+"px) ":"")+A+"translate("+s+"px,"+a+"px)";o.camera.style!==L&&(h.style.transform=L,o.camera.style=L),y(m,m,g,A)},this.setSize=function(m,g){n=m,i=g,s=n/2,a=i/2,l.style.width=m+"px",l.style.height=g+"px",c.style.width=m+"px",c.style.height=g+"px",h.style.width=m+"px",h.style.height=g+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){let g=m.elements;return"matrix3d("+u(g[0])+","+u(-g[1])+","+u(g[2])+","+u(g[3])+","+u(g[4])+","+u(-g[5])+","+u(g[6])+","+u(g[7])+","+u(g[8])+","+u(-g[9])+","+u(g[10])+","+u(g[11])+","+u(g[12])+","+u(-g[13])+","+u(g[14])+","+u(g[15])+")"}function p(m){let g=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(g[0])+","+u(g[1])+","+u(g[2])+","+u(g[3])+","+u(-g[4])+","+u(-g[5])+","+u(-g[6])+","+u(-g[7])+","+u(g[8])+","+u(g[9])+","+u(g[10])+","+u(g[11])+","+u(g[12])+","+u(g[13])+","+u(g[14])+","+u(g[15])+")")}function f(m){m.isCSS3DObject&&(m.element.style.display="none");for(let g=0,x=m.children.length;g<x;g++)f(m.children[g])}function y(m,g,x,v){if(m.visible===!1){f(m);return}if(m.isCSS3DObject){let _=m.layers.test(x.layers)===!0,R=m.element;if(R.style.display=_===!0?"":"none",_===!0){m.onBeforeRender(t,g,x);let A;m.isCSS3DSprite?(Cn.copy(x.matrixWorldInverse),Cn.transpose(),m.rotation2D!==0&&Cn.multiply(jm.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(wu,Xm,Tu),Cn.setPosition(wu),Cn.scale(Tu),Cn.elements[3]=0,Cn.elements[7]=0,Cn.elements[11]=0,Cn.elements[15]=1,A=p(Cn)):A=p(m.matrixWorld);let P=o.objects.get(m);if(P===void 0||P.style!==A){R.style.transform=A;let L={style:A};o.objects.set(m,L)}R.parentNode!==h&&h.appendChild(R),m.onAfterRender(t,g,x)}}for(let _=0,R=m.children.length;_<R;_++)y(m.children[_],g,x,v)}}};var qn=[{art:"orbits",pal:["#0b0f1a","#FFB347","#FFF4E0"],year:2026,ru:{t:"Aurora Bank",d:"3D-\u043E\u043D\u0431\u043E\u0440\u0434\u0438\u043D\u0433 \u0434\u043B\u044F \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430: \u043A\u043B\u0438\u0435\u043D\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u0447\u0451\u0442, \u043F\u043E\u043A\u0430 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043E\u044E \u043E\u0440\u0431\u0438\u0442\u0443 \u0438\u0437 \u043A\u0430\u0440\u0442 \u0438 \u0432\u043A\u043B\u0430\u0434\u043E\u0432.",tags:"WebGL \xB7 UX \xB7 \u043C\u043E\u0443\u0448\u043D",role:"\u0434\u0438\u0437\u0430\u0439\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u0437\u0432\u0443\u043A"},en:{t:"Aurora Bank",d:"A 3D onboarding for a digital bank: customers open an account while assembling their own orbit of cards and deposits.",tags:"WebGL \xB7 UX \xB7 motion",role:"design, dev, sound"}},{art:"flow",pal:["#05070d","#9FD8FF","#FFB347"],year:2026,ru:{t:"Nebula Audio",d:"\u041F\u0440\u043E\u043C\u043E \u043D\u0430\u0443\u0448\u043D\u0438\u043A\u043E\u0432 \u0441 \u0448\u0443\u043C\u043E\u043F\u043E\u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C. \u0421\u043A\u0440\u043E\u043B\u043B \xAB\u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0435\u0442\xBB \u0448\u0443\u043C \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441\u0430, \u0438 \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u0437\u0432\u0443\u043A\u0430 \u0443\u0441\u043F\u043E\u043A\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F.",tags:"\u043F\u0440\u043E\u043C\u043E \xB7 \u0447\u0430\u0441\u0442\u0438\u0446\u044B \xB7 \u0430\u0443\u0434\u0438\u043E",role:"\u043A\u0440\u0435\u0430\u0442\u0438\u0432, WebGL"},en:{t:"Nebula Audio",d:"Launch site for noise-cancelling headphones. Scrolling mutes the city \u2014 and the sound particles settle.",tags:"promo \xB7 particles \xB7 audio",role:"creative, WebGL"}},{art:"contour",pal:["#0a0705","#FF6A1A","#FFF4E0"],year:2025,ru:{t:"Orbita Expo",d:"\u041F\u0440\u043E\u043C\u043E-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438: \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D\u043E\u0432 \u0432 \u0432\u0438\u0434\u0435 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0438.",tags:"\u0441\u043E\u0431\u044B\u0442\u0438\u0435 \xB7 \u043A\u0430\u0440\u0442\u0430 \xB7 3D",role:"\u0430\u0440\u0442-\u0434\u0438\u0440\u0435\u043A\u0448\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"},en:{t:"Orbita Expo",d:"Event page for a space-industry expo: an interactive pavilion map rendered as topography.",tags:"event \xB7 map \xB7 3D",role:"art direction, dev"}},{art:"waves",pal:["#03060a","#9FD8FF","#ffffff"],year:2025,ru:{t:"Tidal Index",d:"\u0414\u0430\u0442\u0430-\u0430\u0440\u0442 \u043E \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u043E\u043A\u0435\u0430\u043D\u0430: 120 \u043B\u0435\u0442 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u0436\u0438\u0432\u043E\u0439 \u0440\u0435\u043B\u044C\u0435\u0444 \u0432\u043E\u043B\u043D.",tags:"\u0434\u0430\u0442\u0430-\u0430\u0440\u0442 \xB7 \u043A\u043B\u0438\u043C\u0430\u0442",role:"\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"},en:{t:"Tidal Index",d:"Data art about sea-level rise: 120 years of measurements turned into living wave relief.",tags:"data art \xB7 climate",role:"research, visualisation"}},{art:"monolith",pal:["#0c0b0a","#d8cfc2","#FFB347"],year:2025,ru:{t:"Monolith",d:"\u0421\u0430\u0439\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u0431\u044E\u0440\u043E: \u0441\u0432\u0435\u0442 \xAB\u043E\u0431\u0445\u043E\u0434\u0438\u0442\xBB \u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0441\u043E\u043B\u043D\u0446\u0430 \u0432 \u043B\u044E\u0431\u0443\u044E \u0434\u0430\u0442\u0443.",tags:"\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 \u0441\u0432\u0435\u0442",role:"\u0434\u0438\u0437\u0430\u0439\u043D, \u0448\u0435\u0439\u0434\u0435\u0440\u044B"},en:{t:"Monolith",d:"Architecture studio site: light sweeps across the buildings following the real sun path for any date.",tags:"architecture \xB7 light",role:"design, shaders"}},{art:"sphere",pal:["#070509","#FF6A1A","#FFB347"],year:2024,ru:{t:"Pulse Run",d:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0435\u0433\u0443\u043D\u043E\u0432: \u043F\u0443\u043B\u044C\u0441 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0436\u0438\u0432\u0443\u044E \u0441\u0444\u0435\u0440\u0443, \u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u2014 \u0432 \u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A.",tags:"\u043F\u0440\u043E\u0434\u0443\u043A\u0442 \xB7 iOS \xB7 \u0437\u0432\u0443\u043A",role:"\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D"},en:{t:"Pulse Run",d:"A running app: your heart rate becomes a living sphere, your workout becomes a soundtrack.",tags:"product \xB7 iOS \xB7 sound",role:"product design"}},{art:"galaxy",pal:["#04040a","#b6a6ff","#9FD8FF"],year:2024,ru:{t:"Quiet Matter",d:"\u0424\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438. \u041B\u0430\u0439\u043D-\u0430\u043F \u0441\u043E\u0431\u0440\u0430\u043D \u0432 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0443, \u0433\u0434\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 \u2014 \u0437\u0432\u0435\u0437\u0434\u0430 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0437\u0432\u0443\u043A\u043E\u043C.",tags:"\u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C \xB7 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0430",role:"\u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0430, \u0441\u0430\u0439\u0442"},en:{t:"Quiet Matter",d:"An electronic music festival. The line-up becomes a galaxy where every artist is a star with its own sound.",tags:"festival \xB7 generative",role:"identity, website"}},{art:"bands",pal:["#0a0604","#FFB347","#9FD8FF"],year:2024,ru:{t:"Halcyon",d:"\u041E\u0442\u0435\u043B\u044C \u0432\u044B\u0441\u043E\u043A\u043E \u0432 \u0433\u043E\u0440\u0430\u0445. \u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0442\u043E\u0442 \u0436\u0435 \u0440\u0430\u0441\u0441\u0432\u0435\u0442, \u0447\u0442\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0437\u0430 \u043E\u043A\u043D\u0430\u043C\u0438 \u043D\u043E\u043C\u0435\u0440\u043E\u0432.",tags:"\u0433\u043E\u0441\u0442\u0435\u043F\u0440\u0438\u0438\u043C\u0441\u0442\u0432\u043E \xB7 real-time",role:"\u0434\u0438\u0437\u0430\u0439\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"},en:{t:"Halcyon",d:"A high-mountain hotel. The site always shows the very sunrise happening outside the rooms right now.",tags:"hospitality \xB7 real-time",role:"design, dev"}}],Er=[{id:"THALASSA-b",arts:["waves","flow","orbits"],pal:["#03080f","#9FD8FF","#FFF4E0"],ru:{t:"\u0418\u043C\u043C\u0435\u0440\u0441\u0438\u0432\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B",d:"\u0414\u0435\u043B\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B-\u0444\u0438\u043B\u044C\u043C\u044B: \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439, \u0440\u0430\u0441\u043A\u0430\u0434\u0440\u043E\u0432\u043A\u0430, \u0448\u0435\u0439\u0434\u0435\u0440\u044B, 3D \u0438 \u0437\u0432\u0443\u043A. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0431\u0435\u0437 \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 60 FPS \u043D\u0430 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0435.",list:[["\u0421\u0440\u043E\u043A","6\u201312 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0421\u0442\u0435\u043A","Three.js \xB7 GLSL \xB7 WebGPU"],["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","\u0441\u0430\u0439\u0442 + fallback"],["\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F","1.4 g"]]},en:{t:"Immersive websites",d:"Websites as films: script, storyboard, shaders, 3D and sound. Runs in the browser with no plugins and holds 60 FPS on an everyday laptop.",list:[["Timeline","6\u201312 weeks"],["Stack","Three.js \xB7 GLSL \xB7 WebGPU"],["Output","site + fallback"],["Gravity","1.4 g"]]}},{id:"NIVALIS-c",arts:["contour","bands","sphere"],pal:["#060a10","#d9ecf5","#9FD8FF"],ru:{t:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D",d:"\u0418\u0441\u0441\u043B\u0435\u0434\u0443\u0435\u043C, \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0438\u0440\u0443\u0435\u043C \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0414\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u0442\u0451\u043F\u043B\u044B\u043C\u0438 \u043D\u0430 \u043E\u0449\u0443\u043F\u044C.",list:[["\u0421\u0440\u043E\u043A","\u043E\u0442 4 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0424\u043E\u0440\u043C\u0430\u0442","\u0441\u043F\u0440\u0438\u043D\u0442\u044B \xB7 \u0430\u0443\u0434\u0438\u0442 \xB7 DS"],["\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","Figma \xB7 Rive \xB7 \u043A\u043E\u0434"],["\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u2212173 \xB0C"]]},en:{t:"Product design",d:"Research, prototypes and design systems. We make even the coldest interfaces warm to the touch.",list:[["Timeline","from 4 weeks"],["Format","sprints \xB7 audit \xB7 DS"],["Tools","Figma \xB7 Rive \xB7 code"],["Temperature","\u2212173 \xB0C"]]}},{id:"ARIDA-d",arts:["monolith","contour","galaxy"],pal:["#0d0703","#FFB347","#FF6A1A"],ru:{t:"\u041C\u043E\u0443\u0448\u043D \u0438 3D-\u0433\u0440\u0430\u0444\u0438\u043A\u0430",d:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u044B, \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0438, \u0440\u043E\u043B\u0438\u043A\u0438 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u0432 \u0438 \u0440\u0435\u0430\u043B\u0442\u0430\u0439\u043C-\u0441\u0446\u0435\u043D\u044B \u0434\u043B\u044F \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439.",list:[["\u0421\u0440\u043E\u043A","2\u20138 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0424\u043E\u0440\u043C\u0430\u0442\u044B","4K \xB7 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C \xB7 real-time"],["\u041F\u0430\u0439\u043F\u043B\u0430\u0439\u043D","Blender \xB7 Houdini \xB7 AE"],["\u0412\u0435\u0442\u0435\u0440","310 \u043A\u043C/\u0447"]]},en:{t:"Motion & 3D",d:"Product renders, animated identities, launch films and real-time scenes for live shows.",list:[["Timeline","2\u20138 weeks"],["Formats","4K \xB7 vertical \xB7 real-time"],["Pipeline","Blender \xB7 Houdini \xB7 AE"],["Wind","310 km/h"]]}},{id:"IGNIS-e",arts:["sphere","waves","flow"],pal:["#0b0302","#FF6A1A","#FFF4E0"],ru:{t:"\u0417\u0432\u0443\u043A \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",d:"\u0421\u0430\u0443\u043D\u0434-\u0434\u0438\u0437\u0430\u0439\u043D \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043C\u0443\u0437\u044B\u043A\u0430, AR-\u044D\u0444\u0444\u0435\u043A\u0442\u044B \u0438 \u043C\u0435\u0434\u0438\u0430\u0438\u043D\u0441\u0442\u0430\u043B\u043B\u044F\u0446\u0438\u0438 \u0434\u043B\u044F \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A \u0438 \u0448\u043E\u0443\u0440\u0443\u043C\u043E\u0432.",list:[["\u0421\u0440\u043E\u043A","\u043F\u043E \u0437\u0430\u0434\u0430\u0447\u0435"],["\u0424\u043E\u0440\u043C\u0430\u0442","\u0437\u0432\u0443\u043A \xB7 AR \xB7 \u0438\u043D\u0441\u0442\u0430\u043B\u043B\u044F\u0446\u0438\u0438"],["\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","Web Audio \xB7 TouchDesigner"],["\u041F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C","1 200 \xB0C"]]},en:{t:"Sound & creative tech",d:"Interface sound design, generative music, AR effects and media installations for exhibitions and showrooms.",list:[["Timeline","per brief"],["Format","sound \xB7 AR \xB7 installations"],["Tools","Web Audio \xB7 TouchDesigner"],["Surface","1,200 \xB0C"]]}},{id:"JOVIA-f",arts:["bands","orbits","galaxy"],pal:["#0c0805","#FFB347","#FFF4E0"],ru:{t:"\u0411\u0440\u0435\u043D\u0434-\u043C\u0438\u0440\u044B \u0438 \u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0430",d:"\u0421\u0442\u0440\u043E\u0438\u043C \u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0443 \u043A\u0430\u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0443: \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430, \u0446\u0432\u0435\u0442, \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438 \u0437\u0432\u0443\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u043C\u0435\u0441\u0442\u0435 \u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0437\u0432\u0443\u0447\u0430\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435, \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 \u0438 \u043D\u0430 \u0441\u0446\u0435\u043D\u0435.",list:[["\u0421\u0440\u043E\u043A","4\u201310 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","\u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0430 \xB7 \u0433\u0430\u0439\u0434\u043B\u0430\u0439\u043D \xB7 3D-\u0430\u0441\u0441\u0435\u0442\u044B"],["\u0424\u043E\u0440\u043C\u0430\u0442\u044B","\u0441\u0442\u0430\u0442\u0438\u043A\u0430 \xB7 \u043C\u043E\u0443\u0448\u043D \xB7 \u0437\u0432\u0443\u043A"],["\u0428\u0442\u043E\u0440\u043C","350 \u043B\u0435\u0442"]]},en:{t:"Brand worlds & identity",d:"Identity built as a system: logo, type, colour, motion and sound work together and feel equally confident on a website, in social and on stage.",list:[["Timeline","4\u201310 weeks"],["Output","identity \xB7 guidelines \xB7 3D assets"],["Formats","static \xB7 motion \xB7 sound"],["Storm","350 years"]]}}];var yc=new Map;function Eu(r){let e=r>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Ym(r){let e=Eu(r),t=new Float32Array(512);for(let i=0;i<512;i++)t[i]=e();let n=(i,s)=>t[(i*73856093^s*19349663)&511];return(i,s)=>{let a=Math.floor(i),o=Math.floor(s),l=i-a,c=s-o,h=l*l*(3-2*l),u=c*c*(3-2*c),d=n(a,o),p=n(a+1,o),f=n(a,o+1),y=n(a+1,o+1);return d+(p-d)*h+(f-d)*u+(d-p-f+y)*h*u}}var Ua=(r,e,t)=>r(e,t)*.5+r(e*2.03,t*2.03)*.25+r(e*4.1,t*4.1)*.125+r(e*8.3,t*8.3)*.0625;function Wt(r,e){let t=parseInt(r.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}var $m={orbits(r,e,t,[n,i,s],a){let o=e*.62,l=t*.55;for(let h=0;h<26;h++){let u=40+h*19,d=u*(.28+a()*.06);r.strokeStyle=Wt(h%4?i:s,.08+(h%5===0?.4:.12)),r.lineWidth=h%5===0?1.6:.8,r.beginPath(),r.ellipse(o,l,u,d,-.25,0,Math.PI*2),r.stroke();let p=a()*Math.PI*2,f=o+Math.cos(p)*u*Math.cos(-.25)-Math.sin(p)*d*Math.sin(-.25),y=l+Math.cos(p)*u*Math.sin(-.25)+Math.sin(p)*d*Math.cos(-.25);r.fillStyle=s,r.shadowColor=i,r.shadowBlur=14,r.beginPath(),r.arc(f,y,1.5+a()*3,0,7),r.fill(),r.shadowBlur=0}let c=r.createRadialGradient(o,l,0,o,l,70);c.addColorStop(0,"#000"),c.addColorStop(.6,"#000"),c.addColorStop(.75,Wt(s,.9)),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.beginPath(),r.arc(o,l,70,0,7),r.fill()},flow(r,e,t,[n,i,s],a,o){r.lineCap="round";for(let l=0;l<900;l++){let c=a()*e,h=a()*t;r.strokeStyle=Wt(a()<.78?i:s,.05+a()*.35),r.lineWidth=.5+a()*1.2,r.beginPath(),r.moveTo(c,h);for(let u=0;u<40;u++){let d=Ua(o,c*.004,h*.004)*Math.PI*4;c+=Math.cos(d)*4,h+=Math.sin(d)*4,r.lineTo(c,h)}r.stroke()}},contour(r,e,t,[n,i,s],a,o){let l=r.getImageData(0,0,e,t),c=l.data,h=parseInt(i.slice(1),16),u=parseInt(s.slice(1),16);for(let d=0;d<t;d++)for(let p=0;p<e;p++){let f=Ua(o,p*.0055,d*.0055)*14,y=f-Math.floor(f),m=Math.max(0,1-Math.abs(y-.5)*18),g=Math.floor(f)%4===0?1:.45,x=Math.floor(f)%4===0?u:h,v=(d*e+p)*4,_=m*g;c[v]=c[v]*(1-_)+(x>>16&255)*_,c[v+1]=c[v+1]*(1-_)+(x>>8&255)*_,c[v+2]=c[v+2]*(1-_)+(x&255)*_}r.putImageData(l,0,0)},waves(r,e,t,[n,i,s],a,o){for(let l=0;l<46;l++){let c=40+l*(t-60)/46;r.beginPath();for(let h=0;h<=e;h+=3){let u=1-Math.abs(h-e/2)/(e/2),d=Math.pow(u,2)*70*Ua(o,h*.012,l*.3),p=c-d;h===0?r.moveTo(h,p):r.lineTo(h,p)}r.lineTo(e,t),r.lineTo(0,t),r.closePath(),r.fillStyle=n,r.fill(),r.strokeStyle=Wt(l%7===0?s:i,l%7===0?.9:.5),r.lineWidth=1.1,r.stroke()}},monolith(r,e,t,[n,i,s],a){let o=r.createLinearGradient(0,0,0,t);o.addColorStop(0,"#120c08"),o.addColorStop(.7,Wt(s,.35)),o.addColorStop(1,"#0a0806"),r.fillStyle=o,r.fillRect(0,0,e,t);let l=r.createRadialGradient(e*.7,t*.62,0,e*.7,t*.62,160);l.addColorStop(0,Wt(s,.9)),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,e,t);for(let c=0;c<9;c++){let h=40+a()*110,u=120+a()*300,d=a()*e,p=t-u*.9,f=r.createLinearGradient(d,0,d+h,0);f.addColorStop(0,Wt(i,.95)),f.addColorStop(.5,Wt(i,.55)),f.addColorStop(1,"#100d0a"),r.fillStyle=f,r.fillRect(d,p,h,u),r.fillStyle="rgba(0,0,0,.45)",r.beginPath(),r.moveTo(d+h,t),r.lineTo(d+h+u*.7,t),r.lineTo(d+h,p+u*.3),r.fill()}},sphere(r,e,t,[n,i,s],a){let o=e*.5,l=t*.52,c=t*.36;for(let h=-c;h<c;h+=7)for(let u=-c;u<c;u+=7){let d=Math.hypot(u,h)/c;if(d>1)continue;let p=Math.sqrt(1-d*d),f=Math.max(0,-u/c*.5-h/c*.6+p*.7),y=3.4*Math.pow(f,1.2);r.fillStyle=f>.55?s:i,r.globalAlpha=.25+.75*f,r.beginPath(),r.arc(o+u,l+h,y,0,7),r.fill()}r.globalAlpha=1,r.strokeStyle=Wt(s,.5),r.lineWidth=1,r.beginPath(),r.ellipse(o,l,c*1.5,c*.28,-.3,0,Math.PI*2),r.stroke()},galaxy(r,e,t,[n,i,s],a){let o=e/2,l=t/2;r.globalCompositeOperation="lighter";for(let h=0;h<5200;h++){let u=h%3,d=Math.pow(a(),.7)*6,p=d*1.15+u*Math.PI*2/3+(a()-.5)*.6,f=d*38+(a()-.5)*18,y=o+Math.cos(p)*f,m=l+Math.sin(p)*f*.55;r.fillStyle=Wt(a()<.6?i:s,.25+a()*.5);let g=a()<.02?2.4:.9;r.fillRect(y,m,g,g)}let c=r.createRadialGradient(o,l,0,o,l,90);c.addColorStop(0,"rgba(255,244,224,.95)"),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.fillRect(0,0,e,t),r.globalCompositeOperation="source-over"},bands(r,e,t,[n,i,s],a,o){for(let c=0;c<14;c++){let h=t*(c/14),u=r.createLinearGradient(0,h,e,h+t/14);u.addColorStop(0,Wt(c%2?i:s,.04+c*.035)),u.addColorStop(1,Wt(c%3?s:i,.02+(14-c)*.02)),r.fillStyle=u,r.fillRect(0,h,e,t/14+1)}let l=r.createRadialGradient(e*.3,t*.78,0,e*.3,t*.78,220);l.addColorStop(0,Wt(i,.95)),l.addColorStop(.3,Wt(i,.35)),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,e,t),r.fillStyle="#060403",r.beginPath(),r.moveTo(0,t);for(let c=0;c<=e;c+=6)r.lineTo(c,t*.7-Ua(o,c*.006,1)*140);r.lineTo(e,t),r.fill()}};function Ar(r,e,t=1,n=960,i=600){let s=`${r}|${e.join()}|${t}|${n}`;if(yc.has(s))return yc.get(s);let a=document.createElement("canvas");a.width=n,a.height=i;let o=a.getContext("2d",{willReadFrequently:r==="contour"}),l=o.createLinearGradient(0,0,n,i);l.addColorStop(0,e[0]),l.addColorStop(1,"#000"),o.fillStyle=l,o.fillRect(0,0,n,i);let c=Eu(t*9973+r.length*31);$m[r](o,n,i,e,c,Ym(t*7+3));let h=o.getImageData(0,0,n,i),u=h.data;for(let y=0;y<u.length;y+=4){let m=(c()-.5)*16;u[y]+=m,u[y+1]+=m,u[y+2]+=m}o.putImageData(h,0,0),o.strokeStyle="rgba(255,255,255,.35)",o.lineWidth=1;let d=14,p=16;[[d,d,1,1],[n-d,d,-1,1],[d,i-d,1,-1],[n-d,i-d,-1,-1]].forEach(([y,m,g,x])=>{o.beginPath(),o.moveTo(y,m+p*x),o.lineTo(y,m),o.lineTo(y+p*g,m),o.stroke()}),o.font='500 11px "JetBrains Mono", monospace',o.fillStyle="rgba(255,255,255,.55)",o.fillText(`EH/${r.toUpperCase()}/${String(t).padStart(3,"0")}`,d+8,i-d-8);let f=a.toDataURL("image/jpeg",.86);return yc.set(s,f),f}var Na=class{constructor(e,t){this.renderer=new Da,this.renderer.setSize(innerWidth,innerHeight),e.appendChild(this.renderer.domElement),this.scene=new on,this.cards=[],this.rot=0,this.vel=0,this.visible=0,this.onOpen=t,this.drag=null,this.lang="ru",qn.forEach((a,o)=>{let l=document.createElement("div");l.className="card3d is3d",l.setAttribute("aria-hidden","true"),l.innerHTML=`<div class="c3-in"><div class="c3-img"><img alt="" draggable="false" src="${Ar(a.art,a.pal,o+1,640,400)}"></div>
        <div class="c3-row"><span class="c3-idx">${String(o+1).padStart(2,"0")} / ${String(qn.length).padStart(2,"0")}</span><span class="c3-idx" style="color:var(--ash)">${a.year}</span></div>
        <div class="c3-title"></div><div class="c3-tags"></div><i class="c3-glare"></i></div>`;let c=new La(l);c.scale.setScalar(.0088),this.scene.add(c);let h=()=>l.firstElementChild;l.addEventListener("pointermove",u=>{if(u.pointerType!=="mouse"||this.drag?.moved)return;let d=l.getBoundingClientRect(),p=(u.clientX-d.left)/d.width,f=(u.clientY-d.top)/d.height,y=h().style;y.setProperty("--ry",`${((p-.5)*16).toFixed(2)}deg`),y.setProperty("--rx",`${((.5-f)*12).toFixed(2)}deg`),y.setProperty("--gx",`${(p*100).toFixed(1)}%`),y.setProperty("--gy",`${(f*100).toFixed(1)}%`),l.classList.add("tilt")}),l.addEventListener("pointerleave",()=>{l.classList.remove("tilt");let u=h().style;u.setProperty("--rx","0deg"),u.setProperty("--ry","0deg")}),l.addEventListener("click",u=>{this.drag&&this.drag.moved||this.onOpen(o,l.querySelector("img"))}),this.cards.push({el:l,obj:c,i:o,op:-1})}),this.setLang("ru");let n=a=>{this.visible<.5||a.button>0||a.target.closest(".nav, .minimap, .sheet, #modal, form, footer, button:not(.card3d *)")||(this.drag={x:a.clientX,last:a.clientX,t:performance.now(),moved:!1})},i=a=>{if(!this.drag)return;let o=a.clientX-this.drag.last;Math.abs(a.clientX-this.drag.x)>6&&(this.drag.moved=!0),this.drag.last=a.clientX,this.rot+=o*.0042,this.vel=o*.0042/Math.max(1/120,(performance.now()-this.drag.t)/1e3),this.drag.t=performance.now()},s=()=>{this.drag&&setTimeout(()=>{this.drag=null},0)};addEventListener("pointerdown",n),addEventListener("pointermove",i),addEventListener("pointerup",s),addEventListener("pointercancel",s)}setLang(e){this.lang=e,this.cards.forEach(({el:t,i:n})=>{let i=qn[n][e];t.querySelector(".c3-title").textContent=i.t,t.querySelector(".c3-tags").textContent=i.tags})}resize(e,t){this.renderer.setSize(e,t)}update(e,t,n,i){this.visible=n;let s=this.renderer.domElement;if(n<=.001){s.style.display!=="none"&&(s.style.display="none");return}s.style.display="",this.drag||(this.rot+=this.vel*e,this.vel*=Math.pow(.04,e));let a=this.rot+i*1.9+performance.now()*2e-5,o=this.cards.length,l=t.position.length(),c=new S,h=new S;for(let u of this.cards){let d=u.i/o,p=a+u.i*.82,f=7.4-u.i*.12,y=2.6-u.i*.72+Math.sin(p*2)*.12;u.obj.position.set(Math.cos(p)*f,y,Math.sin(p)*f),u.obj.lookAt(t.position),c.copy(u.obj.position).sub(t.position);let m=c.length();h.copy(t.position).negate().normalize();let g=Math.acos(Dt.clamp(c.normalize().dot(h),-1,1)),x=Math.asin(Math.min(1,2.8/l))*1.25,v=m>l?Dt.smoothstep(g,x*.7,x*1.25):1,_=1-Dt.smoothstep(m-l,-2,6),R=Dt.smoothstep(n*1.4-d*.4,0,.25),A=Math.max(0,Math.min(1,v*R*(.35+.65*_)));Math.abs(A-u.op)>.01&&(u.el.style.opacity=A.toFixed(3),u.el.style.pointerEvents=A>.4?"auto":"none",u.op=A)}this.renderer.render(this.scene,t)}};var Oa=39.5,Au=45.5;function Zm(r){let e=r>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Fa=r=>{let e=0,t=0;for(;e===0;)e=r();return t=r(),Math.sqrt(-2*Math.log(e))*Math.cos(6.2831853*t)};function Jm(){let r=new is(1,2),e=r.attributes.position,t=new S,n=(i,s,a)=>{let o=Math.sin(i*12.9898+s*78.233+a*37.719)*43758.5453;return o-Math.floor(o)};for(let i=0;i<e.count;i++){t.fromBufferAttribute(e,i);let s=.8+.22*n(Math.round(t.x*100),Math.round(t.y*100),Math.round(t.z*100))+.22*Math.sin(t.x*2.1+t.y*1.3)*Math.cos(t.z*1.7-t.x)+.1*Math.sin(t.y*5.3+t.z*3.9);t.multiplyScalar(s),e.setXYZ(i,t.x,t.y,t.z)}return r.computeVertexNormals(),r}var Ru=`
uniform vec3 uCam;
uniform float uShadowCos;
uniform float uReveal;
float hiddenByHole(vec3 c) {
  vec3 toC = c - uCam; vec3 toB = -uCam;
  float dc = length(toC), db = length(toB);
  return (dc > db && dot(toC / dc, toB / db) > uShadowCos) ? 1.0 : 0.0;
}`,Km=`
attribute vec3 aOff;   // \u0440\u0430\u0434\u0438\u0443\u0441, \u0443\u0433\u043E\u043B, \u0432\u044B\u0441\u043E\u0442\u0430
attribute vec3 aScl;
attribute vec4 aRot;   // \u043E\u0441\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F + \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C
attribute float aSeed;
uniform float uTime;
varying vec3 vW;
varying vec3 vN;
varying vec3 vObj;
varying float vSeed;
varying float vFade;
${Ru}
mat3 rotAxis(vec3 a, float t) {
  float c = cos(t), s = sin(t), o = 1.0 - c;
  return mat3(c + a.x*a.x*o, a.y*a.x*o + a.z*s, a.z*a.x*o - a.y*s,
              a.x*a.y*o - a.z*s, c + a.y*a.y*o, a.z*a.y*o + a.x*s,
              a.x*a.z*o + a.y*s, a.y*a.z*o - a.x*s, c + a.z*a.z*o);
}
void main() {
  float ang = aOff.y + uTime * .012 * pow(aOff.x / 55.0, -1.5);
  vec3 c = vec3(sin(ang) * aOff.x, aOff.z, cos(ang) * aOff.x);
  mat3 R = rotAxis(normalize(aRot.xyz), uTime * aRot.w + aSeed * 6.28);
  float dc = distance(c, uCam);
  float s = smoothstep(.6, 3.5, dc) * (1.0 - hiddenByHole(c)) * smoothstep(aSeed * .6, aSeed * .6 + .4, uReveal);
  vec3 w = c + R * (position * aScl) * s;
  vW = w; vSeed = aSeed; vObj = position * 1.7 + aSeed * 31.0;
  vN = normalize(R * (normal / aScl));
  vFade = 1.0 - smoothstep(60.0, 115.0, dc);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,Qm=`
varying vec3 vW;
varying vec3 vN;
varying vec3 vObj;
varying float vSeed;
varying float vFade;
float h3(vec3 p) { p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float n3(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
void main() {
  // \u0440\u0435\u043B\u044C\u0435\u0444: \u0448\u0443\u043C + \u043A\u0440\u0430\u0442\u0435\u0440\u044B, \u0432\u043E\u0437\u043C\u0443\u0449\u0430\u044E\u0442 \u043D\u043E\u0440\u043C\u0430\u043B\u044C \u0438 \u0446\u0432\u0435\u0442
  float n1 = n3(vObj * 3.0), n2 = n3(vObj * 9.0);
  vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW)));
  vec3 N = normalize(normalize(vN) + (vec3(n3(vObj * 6.0 + 1.0), n3(vObj * 6.0 + 7.0), n3(vObj * 6.0 + 13.0)) - .5) * .55);
  vec3 V = normalize(cameraPosition - vW);
  if (dot(Nf, V) < 0.0) N = -N;
  vec3 L = normalize(-vW);
  vec3 F = normalize(V + vec3(0.0, .7, 0.0));
  float diff = max(dot(N, L), 0.0);
  vec3 base = mix(vec3(.13, .12, .11), vec3(.30, .26, .22), fract(vSeed * 7.31)) * (.7 + .45 * n1) * (.85 + .3 * n2);
  float crater = smoothstep(.62, .7, n3(vObj * 4.0 + 3.0));
  base *= 1.0 - crater * .35;
  if (vSeed > .94) base = vec3(.50, .58, .66);           // \u043B\u0435\u0434\u044F\u043D\u044B\u0435 \u0433\u043B\u044B\u0431\u044B
  else if (vSeed > .88) base = vec3(.34, .19, .12);      // \u0440\u0436\u0430\u0432\u044B\u0435, \u0431\u043E\u0433\u0430\u0442\u044B\u0435 \u0436\u0435\u043B\u0435\u0437\u043E\u043C
  vec3 col = base * (vec3(1.0, .78, .55) * 2.6 * diff + vec3(.30, .42, .62) * .38 * max(dot(N, F), 0.0) + .015);
  float rim = pow(1.0 - max(dot(N, V), 0.0), 4.0) * diff;
  col += vec3(1.0, .7, .45) * rim * .5;
  gl_FragColor = vec4(col * vFade, 1.0);
}`,ef=`
attribute vec3 aOff;
attribute float aSeed;
uniform float uTime;
uniform float uPx;
varying float vA;
varying float vSeed;
${Ru}
void main() {
  float ang = aOff.y + uTime * .012 * pow(aOff.x / 55.0, -1.5);
  vec3 c = vec3(sin(ang) * aOff.x, aOff.z, cos(ang) * aOff.x);
  vec4 mv = viewMatrix * vec4(c, 1.0);
  float d = -mv.z;
  gl_Position = projectionMatrix * mv;
  float near = smoothstep(.3, 2.5, d);
  vA = near * (1.0 - smoothstep(40.0, 100.0, d)) * (1.0 - hiddenByHole(c)) * (.25 + .75 * aSeed) * uReveal;
  vSeed = aSeed;
  gl_PointSize = clamp(uPx * (.6 + aSeed) / d, 1.0, 9.0);
}`,tf=`
varying float vA;
varying float vSeed;
void main() {
  vec2 c = gl_PointCoord - .5;
  float a = smoothstep(.5, 0.0, length(c)) * vA;
  vec3 col = mix(vec3(1.0, .72, .45), vec3(.75, .85, 1.0), step(.8, vSeed)) * .9;
  gl_FragColor = vec4(col * a, a);
}`,Ba=class{constructor(e=1600,t=6e3){this.group=new At;let n=Zm(1337),i={uTime:{value:0},uCam:{value:new S},uShadowCos:{value:1},uReveal:{value:1}},s=new xa().copy(Jm());s.instanceCount=e;let a=new Float32Array(e*3),o=new Float32Array(e*3),l=new Float32Array(e*4),c=new Float32Array(e);for(let p=0;p<e;p++){let f=Oa+(Au-Oa)*(.5+.22*Fa(n));a.set([f,n()*Math.PI*2,Fa(n)*1.1],p*3);let y=n()<.02?2.2+n()*1.8:1,m=(.05+Math.pow(n(),3.2)*.55)*y;o.set([m*(.7+n()*.6),m*(.6+n()*.5),m*(.7+n()*.6)],p*3),l.set([n()-.5,n()-.5,n()-.5,(n()-.5)*.9],p*4),c[p]=n()}s.setAttribute("aOff",new Ci(a,3)),s.setAttribute("aScl",new Ci(o,3)),s.setAttribute("aRot",new Ci(l,4)),s.setAttribute("aSeed",new Ci(c,1)),this.rockMat=new rt({vertexShader:Km,fragmentShader:Qm,uniforms:{...i}}),this.rocks=new Pe(s,this.rockMat),this.rocks.frustumCulled=!1,this.group.add(this.rocks);let h=new nt,u=new Float32Array(t*3),d=new Float32Array(t);for(let p=0;p<t;p++){let f=Oa-3+(Au-Oa+6)*(.5+.25*Fa(n));u.set([f,n()*Math.PI*2,Fa(n)*1.8],p*3),d[p]=n()}h.setAttribute("position",new pt(new Float32Array(t*3),3)),h.setAttribute("aOff",new pt(u,3)),h.setAttribute("aSeed",new pt(d,1)),this.dustMat=new rt({vertexShader:ef,fragmentShader:tf,transparent:!0,depthWrite:!1,blending:ui,blendSrc:An,blendDst:Vn,uniforms:{...i,uPx:{value:300}}}),this.dustMat.uniforms.uTime=this.rockMat.uniforms.uTime,this.dustMat.uniforms.uCam=this.rockMat.uniforms.uCam,this.dustMat.uniforms.uShadowCos=this.rockMat.uniforms.uShadowCos,this.dustMat.uniforms.uReveal=this.rockMat.uniforms.uReveal,this.dust=new ci(h,this.dustMat),this.dust.frustumCulled=!1,this.group.add(this.dust)}update(e,t,n,i=1){let s=this.rockMat.uniforms;s.uReveal.value=i,s.uTime.value=e,s.uCam.value.copy(t.position);let a=t.position.length();s.uShadowCos.value=Math.cos(Math.asin(Math.min(1,2.75/a))*1.15),this.dustMat.uniforms.uPx.value=n}};var nf=`
attribute vec4 aSeed;
uniform float uTime;
uniform float uPx;
uniform vec3 uCenter;
varying float vA;
void main() {
  vec3 p = uCenter + (aSeed.xyz - .5) * vec3(9.0, 6.0, 9.0);
  p += vec3(sin(uTime * .13 + aSeed.w * 40.0), sin(uTime * .09 + aSeed.x * 30.0) * .6 + uTime * .02, cos(uTime * .11 + aSeed.y * 50.0)) * .8;
  p.y = uCenter.y - 3.0 + mod(p.y - uCenter.y + 3.0, 6.0);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float d = -mv.z;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uPx * (.5 + aSeed.w) / max(d, .1), 1.0, 14.0);
  float tw = .55 + .45 * sin(uTime * (1.0 + aSeed.w * 2.0) + aSeed.x * 20.0);
  vA = smoothstep(.2, 1.2, d) * (1.0 - smoothstep(5.0, 9.0, d)) * tw;
}`,rf=`
uniform float uMix;
varying float vA;
void main() {
  float r = length(gl_PointCoord - .5);
  float a = smoothstep(.5, .0, r) * vA * uMix;
  gl_FragColor = vec4(vec3(1.0, .72, .38) * 1.6 * a, a);
}`,za=class{constructor(e=420){let t=new nt,n=new Float32Array(e*4);for(let i=0;i<n.length;i++)n[i]=Math.random();t.setAttribute("position",new pt(new Float32Array(e*3),3)),t.setAttribute("aSeed",new pt(n,4)),this.mat=new rt({vertexShader:nf,fragmentShader:rf,transparent:!0,depthWrite:!1,depthTest:!1,blending:ui,blendSrc:An,blendDst:Vn,uniforms:{uTime:{value:0},uPx:{value:300},uMix:{value:0},uCenter:{value:new S}}}),this.points=new ci(t,this.mat),this.points.frustumCulled=!1,this.points.visible=!1}update(e,t,n,i){let s=this.mat.uniforms;s.uTime.value=e,s.uMix.value=n,s.uPx.value=i,t.getWorldDirection(s.uCenter.value).multiplyScalar(4).add(t.position),this.points.visible=n>.01}};var sf=`
attribute float aKind;     // 0 \u2014 \u043F\u044B\u043B\u0435\u0432\u043E\u0439 \u0445\u0432\u043E\u0441\u0442, 1 \u2014 \u0438\u043E\u043D\u043D\u044B\u0439
uniform vec3 uHead;
uniform vec3 uVel;
uniform float uLen;
uniform float uWidth;
varying vec2 vQ;
varying float vKind;
void main() {
  // \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u0435\u0440\u0451\u043C \u043F\u043E\u043F\u0435\u0440\u0451\u043A \u043B\u0443\u0447\u0430 \u0437\u0440\u0435\u043D\u0438\u044F, \u0438\u043D\u0430\u0447\u0435 \u0445\u0432\u043E\u0441\u0442 \u0443\u043A\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u0447\u043A\u0443
  vec3 los = normalize(uHead - cameraPosition);
  vec3 aw = uHead - los * dot(uHead, los);
  vec3 back = -normalize(uVel);
  vec3 away = normalize(length(aw) > 1e-3 ? normalize(aw) + back * .6 : back); // \u043E\u0442 \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B
  float x = position.x;                          // 0 \u0443 \u044F\u0434\u0440\u0430 \u2026 1 \u043A\u043E\u043D\u0435\u0446 \u0445\u0432\u043E\u0441\u0442\u0430
  vec3 dir = aKind > .5 ? away : normalize(away + back * (.15 + .35 * x));
  float len = uLen * (aKind > .5 ? 1.15 : .8);
  vec3 p0 = uHead;
  vec3 p1 = uHead + dir * len * max(x, 0.0);
  vec4 h = viewMatrix * vec4(p0, 1.0);
  vec4 c = viewMatrix * vec4(p1, 1.0);
  vec4 e = viewMatrix * vec4(uHead + dir * len, 1.0);
  vec2 axis = e.xy - h.xy;
  vec2 n = length(axis) > 1e-4 ? normalize(vec2(-axis.y, axis.x)) : vec2(0.0, 1.0);
  float w = uWidth * (aKind > .5 ? (.35 + .9 * x) : (.6 + 2.4 * x));
  c.xy += n * position.y * w;
  // \u044F\u0434\u0440\u043E \u0447\u0443\u0442\u044C \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0432\u043F\u0435\u0440\u0451\u0434 \u2014 \u0433\u043E\u043B\u043E\u0432\u0430 \u043A\u0440\u0443\u0433\u043B\u0430\u044F
  if (x < 0.0) c.xy += normalize(axis) * x * uWidth * 2.0;
  gl_Position = projectionMatrix * c;
  vQ = vec2(x, position.y);
  vKind = aKind;
}`,af=`
uniform float uFade;
varying vec2 vQ;
varying float vKind;
void main() {
  float x = clamp(vQ.x, 0.0, 1.0);
  float across = exp(-vQ.y * vQ.y * (vKind > .5 ? 9.0 : 4.0));
  float along = vKind > .5 ? pow(max(1.0 - x, 0.0), 1.6) * (.75 + .25 * sin(x * 40.0 - vQ.y * 3.0)) : pow(max(1.0 - x, 0.0), 2.2);
  vec3 col = vKind > .5 ? vec3(.45, .7, 1.0) * 1.3 : vec3(1.0, .82, .58) * 1.1;
  float head = vKind > .5 ? 0.0 : exp(-(vQ.x * vQ.x * 1600.0 + vQ.y * vQ.y * 14.0)) + .35 * exp(-(vQ.x * vQ.x * 260.0 + vQ.y * vQ.y * 2.5));
  vec3 c = col * across * along * 1.2 + vec3(1.0, .95, .88) * head * 2.6;
  gl_FragColor = vec4(c * uFade, 1.0);
}`;function of(){let e=[],t=[],n=[];for(let s=0;s<2;s++){let a=e.length/3;for(let o=0;o<=28;o++){let l=-.06+o/28*1.06;e.push(l,-1,0,l,1,0),t.push(s,s)}for(let o=0;o<28;o++){let l=a+o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let i=new nt;return i.setAttribute("position",new De(e,3)),i.setAttribute("aKind",new De(t,1)),i.setIndex(n),i}var ka=class{constructor(e=2){this.group=new At;let t=of();this.items=[];for(let n=0;n<e;n++){let i=new rt({vertexShader:sf,fragmentShader:af,transparent:!0,depthWrite:!1,blending:ui,blendSrc:An,blendDst:An,side:hi,uniforms:{uHead:{value:new S},uVel:{value:new S(1,0,0)},uLen:{value:30},uWidth:{value:.5},uFade:{value:0}}}),s=new Pe(t,i);s.frustumCulled=!1,s.visible=!1,this.group.add(s),this.items.push({mesh:s,u:i.uniforms,age:0,life:0,alive:!1,start:new S,vel:new S})}this.next=4+Math.random()*4,this.v=new S}spawn(e,t){let n=t.getWorldDirection(new S),i=new S().crossVectors(n,t.up).normalize(),s=new S().crossVectors(i,n).normalize(),a=150+Math.random()*60,o=Math.random()<.5?-1:1,l=a*Math.tan(Dt.degToRad(t.fov)/2);e.start.copy(t.position).addScaledVector(n,a).addScaledVector(i,o*l*t.aspect*(.35+Math.random()*.35)).addScaledVector(s,l*(.25+Math.random()*.45));let c=3.5+Math.random()*2.5;e.vel.copy(i).multiplyScalar(-o).addScaledVector(s,-(.2+Math.random()*.35)).normalize().multiplyScalar(c),e.u.uLen.value=a*(.12+Math.random()*.08),e.u.uWidth.value=a*.0042,e.age=0,e.life=12+Math.random()*6,e.alive=!0,e.mesh.visible=!0}update(e,t,n){if(this.next-=e,n&&this.next<=0){let s=this.items.find(a=>!a.alive);s&&this.spawn(s,t),this.next=10+Math.random()*10}let i=!1;for(let s of this.items){if(!s.alive)continue;if(s.age+=e,s.age>s.life){s.alive=!1,s.mesh.visible=!1;continue}s.u.uHead.value.copy(s.start).addScaledVector(s.vel,s.age),s.u.uVel.value.copy(s.vel);let a=Math.min(1,s.age/2.5)*Math.min(1,(s.life-s.age)/3)*(n?1:0);s.u.uFade.value+=(a-s.u.uFade.value)*Math.min(1,e*3);let o=this.v.copy(s.u.uHead.value).sub(t.position),l=o.length(),c=t.position.length(),h=o.dot(t.position)/(l*c)*-1;l>c&&h>Math.cos(Math.asin(Math.min(1,2.9/c))*1.2)&&(s.u.uFade.value*=0),i=!0}this.group.visible=i}};var _c=r=>440*Math.pow(2,(r-69)/12),Ha=class{constructor(){this.ctx=null,this.on=!1,this.ready=!1,this.tickLevel=0,this.nextTick=0,this.layers={}}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e({latencyHint:"interactive"});this.master=t.createGain(),this.master.gain.value=0,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-16,this.comp.ratio.value=3.5,this.comp.attack.value=.01,this.comp.release.value=.4,this.horizon=t.createBiquadFilter(),this.horizon.type="lowpass",this.horizon.frequency.value=18e3,this.horizon.Q.value=.5,this.bus=t.createGain(),this.bus.gain.value=1,this.bus.connect(this.horizon),this.horizon.connect(this.master),this.master.connect(this.comp),this.comp.connect(t.destination),this.verb=t.createConvolver(),this.verb.buffer=this.impulse(5.2,2.4),this.verbIn=t.createGain(),this.verbIn.gain.value=1;let n=t.createGain();n.gain.value=.55,this.verbIn.connect(this.verb),this.verb.connect(n),n.connect(this.bus),this.noiseBuf=this.noise(4,"white"),this.brownBuf=this.noise(6,"brown"),this.buildDrone(),this.buildOrgan(),this.buildPads(),this.buildWind(),this.buildStation(),this.buildPlanets(),this.buildMusic(),this.ui=t.createGain(),this.ui.gain.value=.5,this.ui.connect(this.bus),this.ui.connect(this.verbIn),this.ready=!0,this.scheduler=setInterval(()=>this.schedule(),60)}impulse(e,t){let n=this.ctx,i=n.sampleRate*e|0,s=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let l=0;l<i;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/i,t)*(l<400?l/400:1)}return s}noise(e,t){let n=this.ctx,i=n.sampleRate*e|0,s=n.createBuffer(1,i,n.sampleRate),a=s.getChannelData(0),o=0;for(let l=0;l<i;l++){let c=Math.random()*2-1;t==="brown"?(o=(o+.02*c)/1.02,a[l]=o*3.5):a[l]=c}return s}src(e,t=!0){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n}gain(e=0,t=this.bus){let n=this.ctx.createGain();return n.gain.value=e,t&&n.connect(t),n}lfo(e,t,n){let i=this.ctx.createOscillator(),s=this.ctx.createGain();return i.frequency.value=e,s.gain.value=t,i.connect(s),s.connect(n),i.start(),i}buildDrone(){let e=this.ctx,t=this.layers.drone=this.gain(0),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=170,n.Q.value=1.2,n.connect(t),[[55,"sawtooth",.22],[55.35,"sawtooth",.22],[27.5,"sine",.7],[82.4,"triangle",.08]].forEach(([o,l,c])=>{let h=e.createOscillator();h.type=l,h.frequency.value=o;let u=e.createGain();u.gain.value=c,h.connect(u),u.connect(n),h.start()}),this.lfo(.045,70,n.frequency);let i=this.src(this.brownBuf),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=110;let a=e.createGain();a.gain.value=.9,i.connect(s),s.connect(a),a.connect(t),i.start(),this.droneFilter=n}organWave(){let e=new Float32Array(17),t=new Float32Array(17),n={1:.9,2:1,3:.55,4:.62,5:.2,6:.32,8:.28,10:.08,12:.1,16:.06};for(let i in n)t[i]=n[i];return this.ctx.createPeriodicWave(e,t)}buildOrgan(){let e=this.ctx,t=this.layers.organ=this.gain(0,null),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=600,n.Q.value=.4,t.connect(n),n.connect(this.bus),n.connect(this.verbIn),this.organFilter=n;let i=this.organWave();[38,50,57,62,65,69,76].forEach((s,a)=>{for(let o of[-2.5,2.5]){let l=e.createOscillator();l.setPeriodicWave(i),l.frequency.value=_c(s),l.detune.value=o;let c=e.createGain();c.gain.value=(a===0?.16:.09)/2,l.connect(c),c.connect(t),l.start()}})}buildPads(){let e=this.ctx,t=(n,i,s,a)=>{let o=this.gain(0,null),l=e.createBiquadFilter();return l.type="lowpass",l.frequency.value=a,o.connect(l),l.connect(this.bus),l.connect(this.verbIn),n.forEach((c,h)=>{let u=e.createOscillator();u.type=i,u.frequency.value=_c(c),u.detune.value=h%2?4:-4;let d=e.createGain();d.gain.value=s;let p=this.lfo(.07+h*.031,s*.5,d.gain);u.connect(d),d.connect(o),u.start()}),o};this.layers.heroPad=t([45,52,59,64,71],"sine",.05,1400),this.layers.tessPad=t([48,55,64,67,72],"triangle",.035,1800)}buildWind(){let e=this.ctx,t=this.layers.wind=this.gain(0),n=this.src(this.noiseBuf),i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=500,i.Q.value=1.4;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=1400,s.Q.value=6,n.connect(i),n.connect(s),i.connect(t),s.connect(t),n.start(),this.windFilter=i,this.windFilter2=s,t.connect(this.verbIn)}buildStation(){let e=this.ctx,t=this.layers.station=this.gain(0);[60,120,180.5].forEach((a,o)=>{let l=e.createOscillator();l.type="sine",l.frequency.value=a;let c=e.createGain();c.gain.value=[.35,.12,.05][o],l.connect(c),c.connect(t),l.start()});let n=this.src(this.noiseBuf),i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=380,i.Q.value=2;let s=e.createGain();s.gain.value=.25,n.connect(i),i.connect(s),s.connect(t),n.start(),this.beepOut=this.gain(0,t),this.beepOut.gain.value=1}buildPlanets(){let e=this.ctx;this.planetVoices=[0,1,2,3,4].map(t=>{let n=e.createStereoPanner?e.createStereoPanner():null,i=e.createGain();if(i.gain.value=0,n?(i.connect(n),n.connect(this.bus)):i.connect(this.bus),i.connect(this.verbIn),t===0){let s=this.src(this.brownBuf),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=600;let o=e.createGain();o.gain.value=.6,this.lfo(.11,.55,o.gain),s.connect(a),a.connect(o),o.connect(i),s.start()}else if(t===1)[1318.5,1975.5,2637].forEach((s,a)=>{let o=e.createOscillator();o.frequency.value=s;let l=e.createGain();l.gain.value=.03,this.lfo(.3+a*.17,.03,l.gain),o.connect(l),l.connect(i),o.start()});else if(t===2){let s=this.src(this.noiseBuf),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=3,this.lfo(.08,500,a.frequency);let o=e.createGain();o.gain.value=.25,s.connect(a),a.connect(o),o.connect(i),s.start()}else if(t===4){[36.7,55,73.4].forEach((l,c)=>{let h=e.createOscillator();h.type=c?"sine":"triangle",h.frequency.value=l;let u=e.createGain();u.gain.value=[.12,.06,.04][c],this.lfo(.05+c*.03,[.08,.04,.03][c],u.gain),h.connect(u),u.connect(i),h.start()});let s=this.src(this.brownBuf),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=240,a.Q.value=1.5,this.lfo(.04,120,a.frequency);let o=e.createGain();o.gain.value=.5,s.connect(a),a.connect(o),o.connect(i),s.start()}else{let s=this.src(this.brownBuf),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=160;let o=e.createOscillator();o.type="sawtooth",o.frequency.value=41;let l=e.createGain();l.gain.value=.08;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=120,o.connect(l),l.connect(c),c.connect(i),o.start(),s.connect(a),a.connect(i),s.start()}return{g:i,pan:n}})}buildMusic(){let e=this.ctx;this.music=this.gain(0,null);let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=3200,t.Q.value=.3,this.music.connect(t),t.connect(this.bus);let n=e.createGain();n.gain.value=1.4,t.connect(n),n.connect(this.verbIn),this.musicFilter=t,this.musicLevel=0,this.musicSlow=1,this.musicKey=0,this.nextNote=0,this.step=0,this.PROG=[[[45,57,60,64,71],[41,53,57,60,64],[36,52,55,60,67],[43,55,59,62,69]],[[36,55,60,64,67],[41,57,60,65,69],[43,55,62,67,71],[36,55,64,67,72]]],this.ARP=[1,2,3,4,3,2,3,1]}note(e,t,n,i=2.6){let s=this.ctx,a=_c(t),o=s.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.012),o.gain.exponentialRampToValueAtTime(1e-4,e+i),[[1,.8],[2,.18],[4.01,.05]].forEach(([l,c])=>{let h=s.createOscillator();h.type="sine",h.frequency.value=a*l;let u=s.createGain();u.gain.value=c,h.connect(u),u.connect(o),h.start(e),h.stop(e+i+.05)}),o.connect(this.music)}playStep(e){let t=this.PROG[this.musicKey],n=t[Math.floor(this.step/8)%t.length],i=this.step%8;i===0&&this.note(e,n[0],.3,5.5),(Math.random()>.14||i===0)&&this.note(e,n[this.ARP[i]]+(i===6&&Math.random()<.3?12:0),.17+(i===0?.05:0)),this.step++}schedule(){if(!this.ready)return;let e=this.ctx;for(this.nextTick<e.currentTime&&(this.nextTick=e.currentTime+.05);this.nextTick<e.currentTime+.2;)this.tickLevel>.02&&this.tick(this.nextTick,this.tickLevel),this.nextTick+=1.25/(this.hyper?2:1);for(this.nextNote<e.currentTime&&(this.nextNote=e.currentTime+.05);this.nextNote<e.currentTime+.25;)this.musicLevel>.02&&this.playStep(this.nextNote),this.nextNote+=.625/Math.max(this.musicSlow,.1)/(this.hyper?1.5:1)}tick(e,t=1){let n=this.ctx,i=this.src(this.noiseBuf,!1),s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=4200,s.Q.value=2.5;let a=n.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.55*t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.045),i.connect(s),s.connect(a),a.connect(this.bus),a.connect(this.verbIn),i.start(e,Math.random()*2,.06);let o=n.createOscillator();o.frequency.setValueAtTime(2300,e),o.frequency.exponentialRampToValueAtTime(900,e+.03);let l=n.createGain();l.gain.setValueAtTime(.18*t,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.05),o.connect(l),l.connect(this.bus),o.start(e),o.stop(e+.06)}blip(e=2200,t=1400,n=.12,i=.05){if(!this.ready||!this.on)return;let s=this.ctx,a=s.currentTime,o=s.createOscillator();o.type="sine",o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(t,a+i);let l=s.createGain();l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(1e-4,a+i*1.6),o.connect(l),l.connect(this.ui),o.start(a),o.stop(a+i*2)}click(){this.blip(2400,1300,.1,.04)}hover(){this.blip(3200,2800,.025,.025)}boom(){if(!this.ready)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(28,t+2.5);let i=e.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.9,t+.05),i.gain.exponentialRampToValueAtTime(1e-4,t+3),n.connect(i),i.connect(this.bus),i.connect(this.verbIn),n.start(t),n.stop(t+3.1);let s=this.src(this.noiseBuf,!1),a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(5e3,t),a.frequency.exponentialRampToValueAtTime(80,t+1.8);let o=e.createGain();o.gain.setValueAtTime(.4,t),o.gain.exponentialRampToValueAtTime(1e-4,t+2),s.connect(a),a.connect(o),o.connect(this.bus),o.connect(this.verbIn),s.start(t),s.stop(t+2.1)}gwave(){if(!this.ready||!this.on)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(34,t),n.frequency.exponentialRampToValueAtTime(260,t+.55);let i=e.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.32,t+.5),i.gain.exponentialRampToValueAtTime(1e-4,t+.62),n.connect(i),i.connect(this.bus),i.connect(this.verbIn),n.start(t),n.stop(t+.7);let s=e.createOscillator();s.frequency.setValueAtTime(70,t+.55),s.frequency.exponentialRampToValueAtTime(24,t+2.6);let a=e.createGain();a.gain.setValueAtTime(1e-4,t+.55),a.gain.exponentialRampToValueAtTime(.85,t+.6),a.gain.exponentialRampToValueAtTime(1e-4,t+3),s.connect(a),a.connect(this.bus),a.connect(this.verbIn),s.start(t+.55),s.stop(t+3.1)}pluck(){if(!this.ready||!this.on)return;let e=this.ctx,t=e.currentTime;if(t-(this.lastPluck||0)<.055)return;this.lastPluck=t;let n=[60,62,64,67,69,72,74,76,79,81],i=n[this.pluckI=((this.pluckI||0)+1+(Math.random()*3|0))%n.length],s=440*Math.pow(2,(i-69)/12),a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.07,t+.006),a.gain.exponentialRampToValueAtTime(1e-4,t+1.6);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(4e3,t),o.frequency.exponentialRampToValueAtTime(700,t+1.2),[[1,"triangle",1],[2,"sine",.35],[3.01,"sine",.12]].forEach(([l,c,h])=>{let u=e.createOscillator();u.type=c,u.frequency.value=s*l;let d=e.createGain();d.gain.value=h,u.connect(d),d.connect(o),u.start(t),u.stop(t+1.7)}),o.connect(a),a.connect(this.ui),a.connect(this.verbIn)}transmit(){if(!this.ready||!this.on)return;let e=this.ctx,t=e.currentTime;for(let n=0;n<3;n++){let i=t+n*.32,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(320,i),s.frequency.exponentialRampToValueAtTime(2600,i+.45);let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.12,i+.05),a.gain.exponentialRampToValueAtTime(1e-4,i+.6),s.connect(a),a.connect(this.ui),s.start(i),s.stop(i+.65)}}morseTone(e){if(!this.ready||!this.on)return;let t=this.ctx,n=t.currentTime,i=t.createOscillator();i.frequency.value=660;let s=t.createGain();s.gain.setValueAtTime(0,n),s.gain.linearRampToValueAtTime(.12,n+.008),s.gain.setValueAtTime(.12,n+e-.01),s.gain.linearRampToValueAtTime(0,n+e),i.connect(s),s.connect(this.ui),i.start(n),i.stop(n+e+.02)}rewind(e){if(!this.ready||!this.on)return;let t=this.ctx,n=t.currentTime,i=this.src(this.noiseBuf),s=t.createBiquadFilter();s.type="bandpass",s.Q.value=4,s.frequency.setValueAtTime(300,n),s.frequency.exponentialRampToValueAtTime(3800,n+e*.8),s.frequency.exponentialRampToValueAtTime(400,n+e);let a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.35,n+.3),a.gain.setValueAtTime(.35,n+e-.4),a.gain.exponentialRampToValueAtTime(1e-4,n+e),i.connect(s),s.connect(a),a.connect(this.bus),i.start(n),i.stop(n+e+.1);let o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(110,n),o.frequency.exponentialRampToValueAtTime(880,n+e);let l=t.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.05,n+.2),l.gain.exponentialRampToValueAtTime(1e-4,n+e);let c=t.createBiquadFilter();c.frequency.value=1200,o.connect(c),c.connect(l),l.connect(this.bus),o.start(n),o.stop(n+e+.1)}whoosh(){if(!this.ready||!this.on)return;let e=this.ctx,t=e.currentTime,n=this.src(this.noiseBuf,!1),i=e.createBiquadFilter();i.type="bandpass",i.Q.value=1.5,i.frequency.setValueAtTime(200,t),i.frequency.exponentialRampToValueAtTime(6e3,t+1.2);let s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.5,t+.5),s.gain.exponentialRampToValueAtTime(1e-4,t+1.4),n.connect(i),i.connect(s),s.connect(this.bus),s.connect(this.verbIn),n.start(t),n.stop(t+1.5)}unlockMobile(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.silent){let n=new ArrayBuffer(8044),i=new DataView(n),s=(a,o)=>[...o].forEach((l,c)=>i.setUint8(a+c,l.charCodeAt(0)));s(0,"RIFF"),i.setUint32(4,36+4e3*2,!0),s(8,"WAVEfmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,8e3,!0),i.setUint32(28,8e3*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),s(36,"data"),i.setUint32(40,4e3*2,!0),this.silent=new Audio(URL.createObjectURL(new Blob([n],{type:"audio/wav"}))),this.silent.loop=!0,this.silent.setAttribute("playsinline","")}if(this.silent.play().catch(()=>{}),this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});let e=this.ctx.createBufferSource();e.buffer=this.ctx.createBuffer(1,1,22050),e.connect(this.ctx.destination),e.start(0)}}setOn(e){if(e&&this.init(),!this.ctx)return;this.on=e,e?this.unlockMobile():this.silent?.pause();let t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?.85:0,t,e?.6:.15)}suspend(e){this.ctx&&(e?(this.ctx.suspend(),this.silent?.pause()):this.on&&(this.ctx.resume(),this.silent?.play().catch(()=>{})))}update(e){if(!this.ready||!this.on)return;let t=this.ctx.currentTime,n=.35,i=(a,o,l=n)=>a.gain.setTargetAtTime(o,t,l);i(this.layers.drone,(.32+e.tunnel*.15)*(1-e.tess*.7)*e.life),i(this.layers.heroPad,e.hero*.9*e.life),i(this.layers.station,e.station*.38),i(this.layers.wind,e.worm*.55+e.tunnel*.38),this.windFilter.frequency.setTargetAtTime(300+e.wormProg*2600,t,.2),this.windFilter2.frequency.setTargetAtTime(900+e.wormProg*3200,t,.2),i(this.layers.organ,e.organ*.55,.8),this.organFilter.frequency.setTargetAtTime(400+e.organ*4200,t,.8),i(this.layers.tessPad,e.tess*.85,1.2),this.horizon.frequency.setTargetAtTime(e.horizonCut,t,.4),this.droneFilter.Q.value=1.2+e.tunnel*6,e.planets.forEach((a,o)=>{let l=this.planetVoices[o];i(l.g,a.gain*.7,.3),l.pan&&l.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,a.pan)),t,.2)}),i(this.music,(e.music??0)*1.1,.8),this.musicLevel=e.music??0,this.musicSlow=e.slow??1;let s=e.tess>.5?1:0;s!==this.musicKey&&(this.musicKey=s,this.step=0),this.tickLevel=e.tick,this.hyper=e.hyper}};var lf={skip:"Skip to content",launch:"Begin the flight",launchSub:"sound \xB7 headphones recommended",launchQuiet:"enter without sound",plTick:"1 tick = 1.25 s",navAbout:"Station",navServices:"Planets",navWorks:"Works",navContact:"Contact",mm0:"Horizon",mm1:"Station",mm2:"Planets",mm3:"Wormhole",mm4:"Event horizon",mm5:"Tesseract",heroEyebrow:"EVENT HORIZON \xB7 immersive worlds studio",heroTitle:"Beyond the possible",heroLede:"We build websites that feel like a flight. Scroll \u2014 the engines are already warm.",scroll:"scroll",aboutEyebrow:"orbital station L-7",aboutTitle:"Station",aboutSub:"A small crew in high orbit. Four principles behind every project we ship.",t1h:"Physics, not scenery",t1p:"We compute light, gravity and time in shaders instead of faking them with pictures. That is why our worlds feel alive.",t2h:"A story, not pages",t2p:"Every project has a setup, a climax and an ending. Scrolling works like film editing.",t3h:"Sound is half the picture",t3p:"We write our own sound design, from engine hum to a button click. Silence is an instrument too.",t4h:"Fast on any orbit",t4p:"60 FPS on a laptop, adaptive quality on phones and a clean fallback without WebGL.",servEyebrow:"a system of five worlds",servTitle:"Planets",s1h:"Immersive websites",s1p:"WebGL launches and promo pages where scrolling becomes cinema. Shaders, 3D, sound and a solid 60 FPS.",s1d:"1 hour here = 7 years on Earth",s2h:"Product design",s2p:"Interfaces you want to touch: research, prototypes, design systems and state animation.",s2d:"1 day here = 3 weeks on Earth",s3h:"Motion & 3D",s3p:"Films, product renders, animated identities and real-time 3D for keynotes and social.",s3d:"1 minute here = 4 hours on Earth",s4h:"Sound & creative tech",s4p:"Sound design, generative music, AR and media installations \u2014 everything that doesn\u2019t fit in a regular browser.",s4d:"1 second here = 1 day on Earth",s5h:"Brand worlds & identity",s5p:"A logo as a system, not a picture: identity that lives in 3D, motion and sound \u2014 with guidelines that make it easy to grow.",s5d:"1 day here = 10 hours \xB7 the storm has raged for 350 years",more:"Learn more",wormEyebrow:"anomaly near IGNIS-e orbit",wormTitle:"Fold the space",wormLede:"Distance is an illusion. To reach the other side, fold the sheet in half and push a pencil through it.",worksEyebrow:"time has almost stopped",worksTitle:"Event horizon",worksSub:"Selected work on the last stable orbit. Drag the spiral and click a card to open it.",drag:"drag",contactEyebrow:"tesseract \xB7 the fifth dimension",contactTitle:"Get in touch",phName:"what should we call you",phContact:"email or @telegram",phMsg:"tell us about the project\u2026",termHint:"some words carry weight here",send:"send signal",bhHintShort:"click the horizon",earthClock:"time passed on Earth",earth:"Return to Earth",rights:"Every world built from scratch.",discuss:"Discuss a project",privacy:"This site counts anonymous statistics: country, device, path through the scenes. IP addresses and cookies are not stored."},cf={ru:{log:[["SYS CHECK","OK"],["NAV ARRAY","OK"],["GRAV LENS MODEL","CALIBRATED"],["ACCRETION DISK","ONLINE"],["TIME DILATION","\xD761 320"],["CREW","READY"]],hyperOn:"HYPERSPEED ENGAGED \xB7 \xD75",hyperOff:"HYPERSPEED OFF",rate:"\u0421\u041B\u0418\u0428\u041A\u041E\u041C \u0427\u0410\u0421\u0422\u041E \xB7 \u041F\u041E\u041F\u0420\u041E\u0411\u0423\u0419\u0422\u0415 \u0427\u0415\u0420\u0415\u0417 \u041C\u0418\u041D\u0423\u0422\u0423",sending:"TRANSMITTING\u2026",sent:"SIGNAL RECEIVED \xB7 \u041E\u0422\u0412\u0415\u0422\u0418\u041C \u0412 \u0422\u0415\u0427\u0415\u041D\u0418\u0415 24 \u0427",invalid:"\u0417\u0410\u041F\u041E\u041B\u041D\u0418\u0422\u0415 \u0412\u0421\u0415 \u041F\u041E\u041B\u042F",fail:"\u041D\u0415\u0422 \u0421\u0412\u042F\u0417\u0418 \xB7 \u041D\u0410\u041F\u0418\u0428\u0418\u0422\u0415 \u041D\u0410 \u041F\u041E\u0427\u0422\u0423",stay:"S \xB7 T \xB7 A \xB7 Y",soundOn:"SND ON",soundOff:"SND OFF",labels:{core:"\u044F\u0434\u0440\u043E \xB7 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 4.2 \u0413\u0412\u0442",hab:"\u0436\u0438\u043B\u043E\u0439 \u043A\u043E\u043D\u0442\u0443\u0440 \xB7 0.38 g",solar:"\u043F\u0430\u043D\u0435\u043B\u0438 \xB7 42 \u043A\u0412\u0442",dish:"\u0434\u0430\u043B\u044C\u043D\u044F\u044F \u0441\u0432\u044F\u0437\u044C \xB7 8.4 \u0413\u0413\u0446",dock:"\u0448\u043B\u044E\u0437 \xB7 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D"},planetHint:"\u043A\u043B\u0438\u043A \u2014 \u043E\u0431\u043B\u0451\u0442",bhName:"EH-1 \xB7 4,3 \u043C\u043B\u043D \u043C\u0430\u0441\u0441 \u0421\u043E\u043B\u043D\u0446\u0430",bhHint:"\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u2014 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0432\u043E\u043B\u043D\u0430",gwTouch:"\u041A\u041E\u0421\u041D\u0418\u0422\u0415\u0421\u042C \u0427\u0401\u0420\u041D\u041E\u0419 \u0414\u042B\u0420\u042B",trackOff:"\u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",trackOn:"\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C",trackDisabled:"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430."},en:{log:[["SYS CHECK","OK"],["NAV ARRAY","OK"],["GRAV LENS MODEL","CALIBRATED"],["ACCRETION DISK","ONLINE"],["TIME DILATION","\xD761 320"],["CREW","READY"]],hyperOn:"HYPERSPEED ENGAGED \xB7 \xD75",hyperOff:"HYPERSPEED OFF",rate:"TOO MANY SIGNALS \xB7 TRY AGAIN IN A MINUTE",sending:"TRANSMITTING\u2026",sent:"SIGNAL RECEIVED \xB7 REPLY WITHIN 24 H",invalid:"FILL IN ALL FIELDS",fail:"NO UPLINK \xB7 PLEASE EMAIL US",stay:"S \xB7 T \xB7 A \xB7 Y",soundOn:"SND ON",soundOff:"SND OFF",labels:{core:"core \xB7 reactor 4.2 GW",hab:"habitat ring \xB7 0.38 g",solar:"arrays \xB7 42 kW",dish:"deep-space comms \xB7 8.4 GHz",dock:"dock \xB7 vacant"},planetHint:"click to orbit",bhName:"EH-1 \xB7 4.3 million solar masses",bhHint:"click \u2014 gravitational wave",gwTouch:"TOUCH THE BLACK HOLE",trackOff:"opt out",trackOn:"opt in",trackDisabled:"Statistics are off for this browser."}},Va=class{constructor(){this.lang="ru",this.ru={},this.listeners=[],document.querySelectorAll("[data-i18n]").forEach(i=>{this.ru[i.dataset.i18n]=i.textContent}),document.querySelectorAll("[data-i18n-ph]").forEach(i=>{this.ru[i.dataset.i18nPh]=i.getAttribute("placeholder")});let e=new URLSearchParams(location.search).get("lang"),t=null;try{t=localStorage.getItem("eh-lang-user")}catch{}(e||t||"ru")==="en"&&this.set("en",!0)}get d(){return cf[this.lang]}onChange(e){this.listeners.push(e)}set(e,t=!1){this.lang=e,document.documentElement.lang=e;let n=e==="en"?lf:this.ru;if(document.querySelectorAll("[data-i18n]").forEach(i=>{let s=n[i.dataset.i18n];s!=null&&(i.textContent=s)}),document.querySelectorAll("[data-i18n-ph]").forEach(i=>{let s=n[i.dataset.i18nPh];s!=null&&i.setAttribute("placeholder",s)}),document.querySelectorAll("#btn-lang span").forEach((i,s)=>i.classList.toggle("on",s===0==(e==="ru"))),!t)try{localStorage.setItem("eh-lang-user",e)}catch{}t||this.listeners.forEach(i=>i(e))}};var Ga=(r,e,t)=>r+(e-r)*t,Wa=class{constructor(e){this.el=document.getElementById("cursor"),this.ring=this.el.querySelector(".c-ring"),this.pt=this.el.querySelector(".c-pt"),this.x=innerWidth/2,this.y=innerHeight/2,this.rx=this.x,this.ry=this.y,this.mag=null,this.audio=e,this.target3d=!1,this.active=!1,addEventListener("pointermove",t=>{t.pointerType==="mouse"&&(this.active=!0,this.x=t.clientX,this.y=t.clientY,this.el.classList.remove("hidden"))},{passive:!0}),document.addEventListener("mouseleave",()=>this.el.classList.add("hidden")),addEventListener("pointerdown",()=>this.el.classList.add("down")),addEventListener("pointerup",()=>this.el.classList.remove("down")),document.addEventListener("pointerover",t=>{if(t.pointerType&&t.pointerType!=="mouse")return;let n=t.target.closest?.("[data-magnetic], .card3d");n&&n!==this.mag?(this.mag=n,this.audio?.hover()):n||(this.mag=null)})}update(e){if(!this.active)return;let t=1-Math.pow(5e-4,e),n=this.x,i=this.y,s=34,a=34,o="50%",l=this.mag;if(l&&l.isConnected&&!l.classList.contains("card3d")){let h=l.getBoundingClientRect(),u=h.left+h.width/2,d=h.top+h.height/2;n=Ga(this.x,u,.55),i=Ga(this.y,d,.55),s=Math.min(h.width+18,240),a=Math.min(h.height+14,120),o="6px",h.width<60&&h.height<60&&(s=a=Math.max(h.width,h.height)+22,o="50%");let p=(this.x-u)*.18,f=(this.y-d)*.25;l.style.transform=`translate(${p.toFixed(1)}px, ${f.toFixed(1)}px)`,this.lastMag=l}else this.lastMag&&(this.lastMag.style.transform="",this.lastMag=null);this.rx=Ga(this.rx,n,t),this.ry=Ga(this.ry,i,t),this.el.classList.toggle("magnet",!!(l&&!l.classList.contains("card3d"))),this.el.classList.toggle("target",this.target3d&&!l),this.pt.style.transform=`translate(${this.x}px, ${this.y}px)`;let c=this.ring;this.target3d&&!l?(c.style.width=c.style.height="",c.style.margin="",c.style.borderRadius=""):(c.style.width=s+"px",c.style.height=a+"px",c.style.margin=`${-a/2}px 0 0 ${-s/2}px`,c.style.borderRadius=o),c.style.transform=`translate(${this.rx}px, ${this.ry}px)`}},Cu="!<>-_\\/[]{}\u2014=+*^?#\u0394\u03A3\u03A901";function qa(r,e=900){r._scr&&cancelAnimationFrame(r._scr);let t=[],n=o=>o.childNodes.forEach(l=>l.nodeType===3?(l._orig??(l._orig=l.textContent),t.push(l)):n(l));n(r);let i=performance.now(),s=t.reduce((o,l)=>o+l._orig.length,0)||1,a=o=>{let l=Math.min(1,(o-i)/e),c=0;for(let h of t){let u=h._orig,d="";for(let p=0;p<u.length;p++,c++){let f=c/s*.7+.3*Math.random();d+=l>=f||u[p]===" "?u[p]:Cu[Math.random()*Cu.length|0]}h.textContent=d}l<1?r._scr=requestAnimationFrame(a):(t.forEach(h=>{h.textContent=h._orig}),r._scr=0)};r._scr=requestAnimationFrame(a)}function Iu(r=document){let e=t=>t.childNodes.forEach(n=>n.nodeType===3?n._orig=void 0:e(n));r.querySelectorAll("[data-scramble], .thesis, .service").forEach(e)}var Pu=0;function Xa(r,e=2600){let t=document.getElementById("toast");t.textContent=r,t.classList.add("show"),clearTimeout(Pu),Pu=setTimeout(()=>t.classList.remove("show"),e)}function Lu(r){let e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],t=0;addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;let i=n.key.length===1?n.key.toLowerCase():n.key;t=i===e[t]?t+1:i===e[0]?1:0,t===e.length&&(t=0,r())})}var os="eh-notrack",ls={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{e==null?localStorage.removeItem(r):localStorage.setItem(r,e)}catch{}}};function hf(){let r=document.querySelector('meta[name="eh-stats-endpoint"]')?.content;if(r)return r;let e=document.querySelector('meta[name="eh-form-endpoint"]')?.content;return e?e.replace(/\/+$/,"")+"/t":""}function uf(){let r=new URLSearchParams(location.search);return r.has("notrack")&&ls.set(os,"1"),r.has("track")&&ls.set(os,null),!(ls.get(os)==="1"||navigator.webdriver||navigator.doNotTrack==="1"||window.doNotTrack==="1"||navigator.globalPrivacyControl||location.protocol==="file:")}function Du(r){ls.set(os,r?null:"1")}function Mc(){return ls.get(os)!=="1"}function Uu(r={}){let e=hf(),t=!!e&&uf(),n={event(){},scene(){},launch(){},set(){},stop(){t=!1},get enabled(){return!1}};if(!t)return n;let i=null;try{i=sessionStorage.getItem("eh-sid")}catch{}if(!i){i=crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2)+"-0000";try{sessionStorage.setItem("eh-sid",i)}catch{}}let s=document.referrer&&!document.referrer.startsWith(location.origin)?document.referrer:"",a=new URLSearchParams(location.search),o={lang:navigator.language||"",ref:s,utm:a.get("utm_source")||a.get("ref")||"",screen:`${screen.width}x${screen.height}@${Math.round((devicePixelRatio||1)*10)/10}`,...r},l={max_scene:-1,launched:0,sound:0,active_ms:0},c=new Set,h=[],u=!0,d=document.visibilityState==="visible"?performance.now():0,p=0,f=()=>p+(d?performance.now()-d:0);function y(x=!1){if(!t||!u&&!h.length)return;l.active_ms=Math.round(f());let v=JSON.stringify({sid:i,meta:o,state:l,events:h.splice(0,20)});if(u=h.length>0,x&&navigator.sendBeacon)try{if(navigator.sendBeacon(e,new Blob([v],{type:"text/plain"})))return}catch{}fetch(e,{method:"POST",body:v,headers:{"Content-Type":"text/plain"},keepalive:!0,mode:"cors",credentials:"omit"}).catch(()=>{})}let m=0,g=(x=2500)=>{u=!0,clearTimeout(m),m=setTimeout(()=>y(),x)};return document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?(d&&(p+=performance.now()-d,d=0),u=!0,y(!0)):d=performance.now()}),addEventListener("pagehide",()=>{u=!0,y(!0)}),setInterval(()=>{document.visibilityState==="visible"&&(u=!0,y())},3e4),setTimeout(()=>y(),800),{get enabled(){return t},event(x,v=""){if(!t)return;let _=x+"|"+v;c.has(_)||(c.add(_),h.push({n:x,v:String(v).slice(0,60)}),g(1200))},scene(x){t&&x>l.max_scene&&(l.max_scene=x,g())},launch(x){t&&(l.launched=1,l.sound=x?1:0,g(600))},set(x,v){t&&(o[x]=v,g())},stop(){y(!0),t=!1}}}var de=r=>document.querySelector(r),Pn=r=>[...document.querySelectorAll(r)],Ft=document.documentElement,yt=Ft.classList.contains("reduced-motion"),cn=Ft.classList.contains("touch"),Ht=Dt.clamp,cs=()=>new Promise(r=>requestAnimationFrame(()=>r())),hs=r=>new Promise(e=>setTimeout(e,r)),Xe=new Va,Fe=new Ha,qt=Uu({site_lang:Xe.lang,webgl:Ft.classList.contains("webgl")?1:0});Xe.onChange(r=>{qt.set("site_lang",r),qt.event("lang",r)});df();Nu();gf();mf();ff();pf();["touchend","pointerup"].forEach(r=>document.addEventListener(r,()=>{Fe.on&&Fe.ctx&&Fe.ctx.state!=="running"&&Fe.unlockMobile()},{passive:!0}));document.addEventListener("click",r=>{r.target.closest("a[data-magnetic], .nav-links a, .ft-social a")&&Fe.click()});Ft.classList.contains("webgl")?xf().catch(r=>{console.error(r),Ft.classList.remove("webgl","is-loading"),Ft.classList.add("no-webgl")}):Ft.classList.remove("is-loading");function Nu(){let r=de("#works-list");r.innerHTML="",qn.forEach((e,t)=>{let n=document.createElement("li"),i=e[Xe.lang];n.innerHTML=`<button class="card3d" data-work="${t}" aria-label="${i.t}">
      <div class="c3-img"><img alt="${i.t}" src="${Ar(e.art,e.pal,t+1,640,400)}"></div>
      <div class="c3-row"><span class="c3-idx">${String(t+1).padStart(2,"0")}</span><span class="c3-idx">${e.year}</span></div>
      <div class="c3-title">${i.t}</div><div class="c3-tags">${i.tags}</div></button>`,n.querySelector("button").addEventListener("click",s=>Sc(t,s.currentTarget.querySelector("img"))),r.appendChild(n)})}function df(){let r=de("#btn-track");if(!r)return;let e=()=>{let t=Mc();r.textContent=t?Xe.d.trackOff:Xe.d.trackOn,r.setAttribute("aria-pressed",String(!t)),de("#track-state").textContent=t?"":Xe.d.trackDisabled};r.addEventListener("click",()=>{let t=!Mc();Du(t),t||qt.stop(),e()}),Xe.onChange(e),e()}function pf(){let r=de(".cb-ticks"),e="";for(let t=0;t<60;t++){let n=t/60*Math.PI*2,i=t%5===0,s=i?36:40,a=44;e+=`<line class="${i?"major":""}" x1="${50+Math.sin(n)*s}" y1="${50-Math.cos(n)*s}" x2="${50+Math.sin(n)*a}" y2="${50-Math.cos(n)*a}"/>`}r.innerHTML=e}function mf(){de("#btn-lang").addEventListener("click",()=>{Xe.set(Xe.lang==="ru"?"en":"ru"),Fe.click()}),Xe.onChange(()=>{Nu(),Iu()})}function ff(){let r=de("#btn-sound"),e=()=>{r.classList.toggle("on",Fe.on),r.setAttribute("aria-pressed",String(Fe.on)),r.querySelector(".sound-txt").textContent=Fe.on?Xe.d.soundOn:Xe.d.soundOff};r.addEventListener("click",()=>{Fe.setOn(!Fe.on),e(),Fe.click(),qt.event("sound",Fe.on?"on":"off")}),Xe.onChange(e),Fe.onSync=e}var Xt={waveStart:-1,morse:0,morseTarget:0,handAngle:0,pluck:-99};function gf(){let r=de("#terminal"),e=Pn(".term-row"),t=de("#term-status"),n=de("#cb-hand"),i=l=>{Xt.handAngle=l,n.style.transform=`rotate(${l}deg)`};setInterval(()=>{document.hidden||i(Xt.handAngle+6)},1e3);let s=()=>e.forEach(l=>l.classList.toggle("empty",!l.querySelector("input,textarea").value));s();let a=0,o=0;r.addEventListener("focusin",()=>{o||(o=performance.now())}),r.addEventListener("input",l=>{o||(o=performance.now()),l.target.name!=="website"&&(Xt.pluck=performance.now()/1e3,Fe.pluck()),s(),l.target.closest(".term-row")?.classList.remove("invalid"),l.target.name==="message"&&/\bSTAY\b/i.test(l.target.value)&&performance.now()-a>6e3&&(a=performance.now(),Ou("STAY"))}),r.addEventListener("submit",async l=>{l.preventDefault(),i(Xt.handAngle+30);let c=!0;if(e.forEach(d=>{let p=d.querySelector("input,textarea"),f=!p.value.trim()||p.name==="contact"&&p.value.trim().length<3;d.classList.toggle("invalid",f),f&&(c=!1)}),!c){t.textContent=Xe.d.invalid,t.className="err",Fe.blip(300,180,.14,.12),r.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:320});return}t.textContent=Xe.d.sending,t.className="",Xt.waveStart=performance.now()/1e3,Fe.transmit();let h={...Object.fromEntries(new FormData(r)),elapsed:Math.round(performance.now()-(o||performance.now())),lang:Xe.lang,page:location.href.split("#")[0]},u=document.querySelector('meta[name="eh-form-endpoint"]')?.content;try{if(u){let d=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(h)});if(d.status===429){t.textContent=Xe.d.rate,t.className="err";return}if(!d.ok)throw new Error(d.status)}else await hs(1400);t.textContent=Xe.d.sent,t.className="ok",qt.event("form"),r.reset(),s(),o=0}catch{t.textContent=Xe.d.fail,t.className="err"}})}var vf={S:"...",T:"-",A:".-",Y:"-.--"};async function Ou(r){qt.event("stay");let e=de("#morse");e.textContent="";let t=150;for(let n of r){for(let i of vf[n]){let s=i==="."?t:t*3;Xt.morseTarget=1,Fe.morseTone(s/1e3),e.textContent+=i==="."?"\xB7":"\u2212",await hs(s),Xt.morseTarget=0,await hs(t)}e.textContent+="  ",await hs(t*2)}e.textContent+=" \u2014 "+Xe.d.stay}var Ot=null,Oi=!1;function Sc(r,e){qt.event("work",qn[r].en.t);let t=qn[r],n=t[Xe.lang],i=de("#modal"),s=de("#md-img");s.src=Ar(t.art,t.pal,r+1,1600,1e3),s.alt=n.t,de("#md-idx").textContent=`${String(r+1).padStart(2,"0")} / ${String(qn.length).padStart(2,"0")}`,de("#md-title").textContent=n.t,de("#md-text").textContent=n.d,de("#md-meta").innerHTML=`<dt>YEAR</dt><dd>${t.year}</dd><dt>ROLE</dt><dd>${n.role}</dd><dt>TAGS</dt><dd>${n.tags}</dd>`,i.classList.add("open"),i.setAttribute("aria-hidden","false"),Oi=!0,Ot?.stop(),Fe.click(),Fe.whoosh();let a=e?.getBoundingClientRect();s.style.transition="none",s.style.transform="";let o=s.getBoundingClientRect();a&&a.width>4&&!yt?s.style.transform=`translate(${a.left-o.left}px, ${a.top-o.top}px) scale(${a.width/o.width}, ${a.height/o.height})`:(s.style.transform="scale(.92)",s.style.opacity="0"),s.getBoundingClientRect(),s.style.transition="transform 1s cubic-bezier(.16,1,.3,1), opacity .6s ease",s.style.transform="",s.style.opacity="1",de("#md-close").focus({preventScroll:!0})}function ja(){if(!Oi)return;let r=de("#modal");r.classList.remove("open"),r.setAttribute("aria-hidden","true"),Oi=!1,Ot?.start(),Fe.click()}de("#md-close").addEventListener("click",ja);de("#bh-hint").addEventListener("click",()=>window.__ehGW?.());de(".md-backdrop").addEventListener("click",ja);async function xf(){let r=_f();r.set(.08);let e=de("#gl"),t=new Ea(e),n=t.renderer,i=yf(n);qt.set("tier",i);let a={...{high:{dpr:Math.min(devicePixelRatio,2),bg:.72,steps:220,samples:4,particles:14e3,rocks:1800,dust:7e3},medium:{dpr:Math.min(devicePixelRatio,1.5),bg:.56,steps:150,samples:2,particles:9e3,rocks:1200,dust:4500},low:{dpr:Math.min(devicePixelRatio,1.25),bg:.42,steps:90,samples:0,particles:5200,rocks:700,dust:2500}}[i]},o={...a};t.q={dpr:a.dpr,bg:a.bg,samples:a.samples},t.resize(innerWidth,innerHeight,!0),r.set(.18),await cs();let l=new kt(42,innerWidth/innerHeight,.05,600),c=new on,h=new Ra(t);h.bh.uniforms.uSteps.value=a.steps;let u=Su(n),d=new Ca(u);c.add(d.group);let p=new ss(16765600,3.4);p.position.set(0,0,0),p.target=d.group,c.add(p),c.add(new va(10475775,656900,.22));let f=new ss(9417983,1.15);f.position.copy(d.group.position).add(new S(22,16,26)),f.target=d.group,c.add(f);let y=new Pa;c.add(y.group);let m=new Ba(a.rocks,a.dust);c.add(m.group);let g=new za(i==="low"?220:420);c.add(g.points);let x=new ka(i==="low"?1:2);c.add(x.group),r.set(.34),await cs();let v=new Ia(a.particles);v.u.uDpr.value=t.q.dpr;let _=new Na(de("#css3d"),(Y,le)=>Sc(Y,le));Xe.onChange(Y=>_.setLang(Y)),Xe.lang!=="ru"&&_.setLang(Xe.lang),r.set(.5),await Promise.race([Promise.all([document.fonts.load("900 100px Unbounded"),document.fonts.load('400 14px "JetBrains Mono"'),document.fonts.ready]),hs(3e3)]),r.set(.62),await cs();let R={pos:new S,tgt:new S,fov:42,roll:0};vc(0,R),l.position.copy(R.pos),l.lookAt(R.tgt),l.updateMatrixWorld(),l.updateProjectionMatrix(),h.syncCamera(l);let A=[h.bh,h.worm,h.tunnel,h.tess];for(let[Y,le]of A.entries())t.fs(le,t.bgRT),await cs(),r.set(.62+(Y+1)*.07);n.compile(c,l),y.group.visible=!0,t.beginScene(),t.renderScene(c,l),t.post(0),await cs(),r.set(1),Ot=new lu({lerp:yt?1:.075,smoothWheel:!yt,wheelMultiplier:.9,touchMultiplier:1.4}),Ot.stop(),window.scrollTo(0,0);let P=Pn(".scene"),L=[],B=()=>{L=P.map(Y=>({top:Y.offsetTop,h:Y.offsetHeight}))};B();let W=Y=>{let le=innerHeight;for(let be=L.length-1;be>=0;be--)if(Y>=L[be].top){let Je=be===L.length-1?Math.max(1,L[be].h-le):L[be].h;return be+Ht((Y-L[be].top)/Je,0,1)}return 0},X=Y=>{let le=Ht(Math.floor(Y),0,L.length-1),be=Y-le,Je=le===L.length-1?L[le].h-innerHeight:L[le].h;return L[le].top+be*Je},V=[0,1.1,2.07,3.12,4.18,5.6];Pn("[data-goto]").forEach(Y=>Y.addEventListener("click",le=>{if(le.preventDefault(),!Ft.classList.contains("launched"))return;D();let be=+Y.dataset.goto;Fe.click(),Ot.scrollTo(X(V[be]),{duration:yt?.01:Ht(Math.abs(V[be]-T.T)*1.1,1.2,4.5),easing:Je=>1-Math.pow(1-Je,3)})}));let T=window.__ehState={T:0,camT:-.2,time:0,sim:0,launched:!1,launchAt:0,introDone:!1,mx:0,my:0,pmx:0,pmy:0,hyper:!1,rewinding:!1,vel:0,lastT:0},F={idx:-1,mix:0,target:0,ang:0},j={t0:-99,x:.5,y:.5,used:!1,hinted:!1};window.__ehGW=()=>K();function K(){if(T.time-j.t0<.9)return;de("#bh-hint").classList.remove("show");let Y=fe();j.t0=T.time,j.x=Y.x/innerWidth,j.y=1-Y.y/innerHeight,j.used=!0,Fe.gwave(),qt.event("gwave")}let J={x:.5,y:.5,s:0,touchOn:!1,tx:0,ty:0};if(cn){let Y=le=>{let be=le.touches[0];be&&(J.tx=be.clientX,J.ty=be.clientY,J.touchOn=!0)};addEventListener("touchstart",le=>{Y(le),J.x=J.tx/innerWidth,J.y=1-J.ty/innerHeight},{passive:!0}),addEventListener("touchmove",Y,{passive:!0}),addEventListener("touchend",()=>{J.touchOn=!1},{passive:!0})}let ae=new ya,ge=new ne(-9,-9),me={kind:null,key:null};addEventListener("pointermove",Y=>{T.mx=Y.clientX/innerWidth*2-1,T.my=Y.clientY/innerHeight*2-1,ge.set(T.mx,-T.my)},{passive:!0});let ie=Y=>{Y.gamma!=null&&(T.mx=Ht(Y.gamma/30,-1,1),T.my=Ht((Y.beta-45)/30,-1,1))},oe=null;addEventListener("pointerdown",Y=>{oe={x:Y.clientX,y:Y.clientY}}),addEventListener("pointerup",Y=>{if(!oe||Math.hypot(Y.clientX-oe.x,Y.clientY-oe.y)>8||!T.launched||Oi||Y.target.closest("a, button, input, textarea, .card3d, .sheet, #modal, .nav, .minimap, form"))return;ge.set(Y.clientX/innerWidth*2-1,-(Y.clientY/innerHeight*2-1));let le=ye();if(le.kind==="bh")K();else if(le.kind==="planet")E(le.key);else if(le.kind==="module"){let be={core:0,hab:1,dish:2,solar:3};be[le.key]!=null?(Fe.click(),Ot.scrollTo(X(1.12+be[le.key]*.205+.07),{duration:1.4})):Xa(Xe.lang==="ru"?"\u0428\u041B\u042E\u0417 \u0417\u0410\u041A\u0420\u042B\u0422 \xB7 \u0421\u0422\u042B\u041A\u041E\u0412\u041A\u0410 \u041D\u0415 \u0422\u0420\u0415\u0411\u0423\u0415\u0422\u0421\u042F":"DOCK SEALED \xB7 NO DOCKING REQUIRED")}});function fe(){let Y=ce(new S(0,0,0)),le=l.position.length(),be=Math.asin(Math.min(1,2.6/le));return Y.r=Math.tan(be)/Math.tan(Dt.degToRad(l.fov)/2)*innerHeight/2,Y}function ye(){if(F.target||Oi)return{kind:null};if(Math.abs(ge.x)>1||Math.abs(ge.y)>1)return{kind:null};if(T.introDone&&T.camT<.4){let Y=fe(),le=(ge.x*.5+.5)*innerWidth,be=(-ge.y*.5+.5)*innerHeight;if(Y.front&&Math.hypot(le-Y.x,be-Y.y)<Y.r*1.35)return{kind:"bh"}}if(ae.setFromCamera(ge,l),d.group.visible&&T.camT>.8&&T.camT<2.02){let Y=ae.intersectObjects(d.pickables,!1)[0];if(Y)return{kind:"module",key:Y.object.userData.module}}if(y.group.visible&&T.camT>1.97&&T.camT<3.05){let Y=y.pick(ae.ray);if(Y>=0)return{kind:"planet",key:Y}}return{kind:null}}let re=de("#planet-panel");function b(Y){let le=Er[Y],be=le[Xe.lang];de("#pp-id").textContent=`${le.id} \xB7 ${String(Y+1).padStart(2,"0")}/${String(Er.length).padStart(2,"0")}`,de("#pp-title").textContent=be.t,de("#pp-text").textContent=be.d,de("#pp-gallery").innerHTML=le.arts.map((Je,ke)=>`<img alt="" src="${Ar(Je,le.pal,40+Y*3+ke,ke?640:960,ke?480:540)}">`).join(""),de("#pp-list").innerHTML=be.list.map(([Je,ke])=>`<li><span>${Je}</span><b>${ke}</b></li>`).join(""),[...re.children].forEach((Je,ke)=>{Je.classList.add("stagger"),Je.style.transitionDelay=`${.15+ke*.06}s`})}function E(Y){qt.event("planet",Er[Y].id),!(F.target&&F.idx===Y)&&(F.idx=Y,F.target=1,F.ang=0,b(Y),re.classList.add("open"),re.setAttribute("aria-hidden","false"),Ot.stop(),Fe.click(),Fe.whoosh(),setTimeout(()=>de("#pp-close").focus({preventScroll:!0}),400))}function D(){F.target&&(F.target=0,re.classList.remove("open"),re.setAttribute("aria-hidden","true"),Oi||Ot.start(),Fe.click())}de("#pp-close").addEventListener("click",D),de("#pp-cta").addEventListener("click",Y=>{Y.preventDefault(),D(),setTimeout(()=>Ot.scrollTo(X(5.6),{duration:4}),300)}),Pn("[data-open-planet]").forEach(Y=>Y.addEventListener("click",()=>E(+Y.dataset.openPlanet))),Xe.onChange(()=>{F.target&&b(F.idx)}),addEventListener("keydown",Y=>{Y.key==="Escape"&&(ja(),D())}),Lu(()=>{qt.event("konami"),T.hyper=!T.hyper,Ft.classList.toggle("hyper",T.hyper),Ot.options.wheelMultiplier=T.hyper?3:.9,Xa(T.hyper?Xe.d.hyperOn:Xe.d.hyperOff),Fe.whoosh()}),de("#btn-earth").addEventListener("click",()=>{if(T.rewinding)return;let Y=yt?1.2:4.6;T.rewinding=!0,Ft.classList.add("rewinding"),D(),ja(),Fe.rewind(Y),qt.event("rewind"),Ot.scrollTo(0,{duration:Y,lock:!0,force:!0,easing:le=>le<.5?4*le*le*le:1-Math.pow(-2*le+2,3)/2,onComplete:()=>{T.rewinding=!1,Ft.classList.remove("rewinding")}})});let N=Pn(".thesis"),C=Pn(".service"),U=de("#leaders"),w=(Y,le)=>{let be=document.createElementNS("http://www.w3.org/2000/svg",Y);return be.setAttribute("class",le),U.appendChild(be),be},I=N.map(()=>({path:w("path","ld"),dot:w("circle","ld-dot"),ring:w("circle","ld-ring")})),z={path:w("path","ld"),dot:w("circle","ld-dot")},ee=de("#hover-label"),k=[{el:de("#about .scene-head"),w:[.8,.9,1.02,1.09]},{el:de("#services .scene-head"),w:[1.96,2.02,2.1,2.16]},{el:de(".worm-copy"),w:[2.98,3.05,3.28,3.4]},{el:de(".worm-hud"),w:[3,3.06,3.5,3.57]},{el:de("#works .scene-head"),w:[3.98,4.05,4.2,4.28]},{el:de(".drag-hint"),w:[4.08,4.14,4.55,4.62]},{el:de(".earth-clock"),w:[4.06,4.14,4.97,5.02]},{el:de(".contact-wrap"),w:[5,5.14,9,10]},...N.map((Y,le)=>({el:Y,w:[1.12+le*.205,1.15+le*.205,1.28+le*.205,1.31+le*.205],panel:!0})),...C.map((Y,le)=>({el:Y,w:[Tr[le]-.04,Tr[le]-.012,Tr[le]+.125,Tr[le]+.15],panel:!0}))];k.forEach(Y=>{Y.op=-1,Y.shown=!1,Y.x=null,Y.y=null});let Q=de(".hero-copy"),Z=de("#hero-title"),te=new S,ce=Y=>(te.copy(Y).project(l),{x:(te.x*.5+.5)*innerWidth,y:(-te.y*.5+.5)*innerHeight,front:te.z<1}),pe=()=>innerWidth<=768;function we(Y){let le=T.T,be=1-ft(.06,.3,le);Q.style.opacity=be.toFixed(3),Q.style.transform=`translateY(${(-le*60).toFixed(1)}px)`,Q.style.visibility=be<.01?"hidden":"";let Je=T.introDone?1-ft(.04,.16,le):0;Z.style.opacity=Je.toFixed(3);for(let Ne of k){let je=Mn(le,...Ne.w)*(F.target?0:1);if(Math.abs(je-Ne.op)>.002&&(Ne.el.style.opacity=je.toFixed(3),Ne.el.style.visibility=je<.01?"hidden":"visible",Ne.panel&&Ne.el.classList.toggle("vis",je>.01),Ne.op=je),je>.05&&!Ne.shown?(Ne.shown=!0,yt||Ne.el.querySelectorAll("[data-scramble], h3, .sv-id, .th-num").forEach(Se=>qa(Se,800))):je<.01&&(Ne.shown=!1),!Ne.panel){let Se=(1-je)*18;Ne.el.style.translate=`0 ${Se.toFixed(1)}px`}}let ke=ce(new S(0,0,0));ke.r=Math.abs(ce(new S(0,0,0).addScaledVector(new S().setFromMatrixColumn(l.matrixWorld,0),12)).x-ke.x);let Mt=ce(d.group.position);if(Mt.r=Math.abs(ce(d.group.position.clone().addScaledVector(new S().setFromMatrixColumn(l.matrixWorld,0),5.5)).x-Mt.x),N.forEach((Ne,je)=>{let Se=I[je],M=k.find(Ee=>Ee.el===Ne);if(M.op<.01||!d.group.visible){Se.path.style.opacity=0,Se.dot.style.opacity=0,Se.ring.style.opacity=0;return}d.anchorWorld(Ne.dataset.anchor,te);let O=ce(te),q=innerWidth,$=innerHeight,G=Ne.offsetWidth,se=Ne.offsetHeight,he,xe,Te,Le;if(pe()){let Ee=Ne.getBoundingClientRect();Te=Ee.left+Ee.width*.5,Le=Ee.top,he=null}else{let Ee=[[O.x+120,O.y-se*.5-60],[O.x-120-G,O.y-se*.5-60],[O.x+70,O.y+90],[O.x-70-G,O.y+90],[O.x+70,O.y-se-110],[O.x-70-G,O.y-se-110]],ct=(mt,ut,_e,Ae,Lt,Dn)=>Math.max(0,Math.min(mt+G,_e+Lt)-Math.max(mt,_e-Lt))*Math.max(0,Math.min(ut+se,Ae+Dn)-Math.max(ut,Ae-Dn)),Ye=([mt,ut])=>{let _e=Ht(mt,70,q-G-90),Ae=Ht(ut,100,$-se-70);return ct(_e,Ae,ke.x,ke.y,ke.r,ke.r*.55)*1.6+ct(_e,Ae,Mt.x,Mt.y,Mt.r,Mt.r)+(Math.abs(_e-mt)+Math.abs(Ae-ut))*40},at=M.cand??0,it=Ye(Ee[at])*.8;Ee.forEach((mt,ut)=>{let _e=Ye(mt);_e<it&&(at=ut,it=_e)}),M.cand=at;let ze=at%2===0;he=Ht(Ee[at][0],70,q-G-90),xe=Ht(Ee[at][1],100,$-se-70),M.x==null&&(M.x=he,M.y=xe),M.x+=(he-M.x)*Math.min(1,Y*5),M.y+=(xe-M.y)*Math.min(1,Y*5),Ne.style.transform=`translate(${M.x.toFixed(1)}px, ${(M.y+(1-M.op)*14).toFixed(1)}px)`,Te=ze?M.x:M.x+G,Le=Ht(O.y,M.y+16,M.y+se-16)}let Be=O.x+(Te-O.x)*.45;Se.path.setAttribute("d",`M${O.x.toFixed(1)},${O.y.toFixed(1)} L${Be.toFixed(1)},${Le.toFixed(1)} L${Te.toFixed(1)},${Le.toFixed(1)}`),Se.path.style.opacity=M.op*(O.front?1:0),Se.dot.setAttribute("cx",O.x),Se.dot.setAttribute("cy",O.y),Se.dot.setAttribute("r",2.2),Se.dot.style.opacity=M.op;let Re=6+T.time*1.2%1*14;Se.ring.setAttribute("cx",O.x),Se.ring.setAttribute("cy",O.y),Se.ring.setAttribute("r",Re.toFixed(1)),Se.ring.style.opacity=M.op*(1-T.time*1.2%1)}),C.forEach((Ne,je)=>{let Se=k.find(xe=>xe.el===Ne);if(Se.op<.01||pe())return;let M=ce(_n[je].pos),O=innerWidth,q=innerHeight,$=Ne.offsetWidth,G=Ne.offsetHeight,se=M.x<O*.5?O-$-Math.max(90,O*.08):Math.max(60,O*.07),he=Ht(q-G-Math.max(70,q*.1),110,q-G-60);Se.x==null&&(Se.x=se,Se.y=he),Se.x+=(se-Se.x)*Math.min(1,Y*3),Se.y+=(he-Se.y)*Math.min(1,Y*3),Ne.style.transform=`translate(${Se.x.toFixed(1)}px, ${(Se.y+(1-Se.op)*16).toFixed(1)}px)`}),me.kind&&!cn){let Ne="",je="",Se=null;me.kind==="module"?(Ne=d.labels[me.key][0],je=Xe.d.labels[me.key],Se=ce(d.anchorWorld(me.key,new S))):me.kind==="bh"?(Ne=Xe.d.bhName,je=Xe.d.bhHint,Se=ce(new S(0,0,0))):(Ne=Er[me.key].id,je=`${Er[me.key][Xe.lang].t} \xB7 ${Xe.d.planetHint}`,Se=ce(_n[me.key].pos)),ee.querySelector("b").textContent=Ne,ee.querySelector("span").textContent=je;let M=(T.mx*.5+.5)*innerWidth+26,O=(T.my*.5+.5)*innerHeight-46;ee.style.transform=`translate(${M}px, ${O}px)`,ee.classList.add("show"),z.path.setAttribute("d",`M${Se.x},${Se.y} L${M},${O+18}`),z.path.style.opacity=.55,z.dot.setAttribute("cx",Se.x),z.dot.setAttribute("cy",Se.y),z.dot.setAttribute("r",2.5),z.dot.style.opacity=1}else ee.classList.remove("show"),z.path.style.opacity=0,z.dot.style.opacity=0}let Ue=Pn(".minimap button"),$e=Pn(".nav-links a"),Ge=["SCN 00 \xB7 SUPERMASSIVE","SCN 01 \xB7 STATION L-7","SCN 02 \xB7 PLANETARY SYSTEM","SCN 03 \xB7 WORMHOLE","SCN 04 \xB7 EVENT HORIZON","SCN 05 \xB7 TESSERACT"],ve={dist:de("#tm-dist"),dil:de("#tm-dil"),vel:de("#tm-vel"),met:de("#tm-met"),tag:de("#scene-tag"),fill:de("#mm-fill"),ship:de("#mm-ship"),hd:de("#hero-dist"),wdt:de("#worm-dt"),ws:de("#worm-stress")},Ke=0,lt=-1,Ze=(Y,le=2)=>String(Math.floor(Y)).padStart(le,"0"),Me=de(".footer"),We=de("#earth-time"),st="";function Xn(Y){if(Y>=4.95)return"\u221E";let le=Math.pow(10,(Y-4.08)*4.6)*.35,be=Xe.lang==="ru",Je=(je,Se,M,O)=>{let q=je%100,$=je%10;return q>10&&q<20?O:$>1&&$<5?M:$===1?Se:O};if(le<1){let je=Math.max(1,Math.round(le*365));return be?`${je} ${Je(je,"\u0434\u0435\u043D\u044C","\u0434\u043D\u044F","\u0434\u043D\u0435\u0439")}`:`${je} day${je>1?"s":""}`}let ke=Math.floor(le),Mt=Math.floor((le-ke)*365),Ne=ke.toLocaleString(be?"ru-RU":"en-US");return ke>=100?be?`${Ne} ${Je(ke,"\u0433\u043E\u0434","\u0433\u043E\u0434\u0430","\u043B\u0435\u0442")}`:`${Ne} years`:be?`${Ne} ${Je(ke,"\u0433\u043E\u0434","\u0433\u043E\u0434\u0430","\u043B\u0435\u0442")} ${Mt} ${Je(Mt,"\u0434\u0435\u043D\u044C","\u0434\u043D\u044F","\u0434\u043D\u0435\u0439")}`:`${Ne} yr ${Mt} d`}function Fi(Y){let le=T.T;if(le>4&&le<5.05){let Se=Xn(T.camT);Se!==st&&(st=Se,We.textContent=Se)}Ft.classList.toggle("at-footer",Me.getBoundingClientRect().top<innerHeight-30);let be=Ht(le/5.85,0,1);ve.fill.style.transform=`scaleY(${be.toFixed(4)})`,ve.ship.style.top=`${(be*100).toFixed(2)}%`;let Je=Ht(Math.floor(le+.03),0,5);if(Je!==lt&&(lt=Je,Ue.forEach((Se,M)=>{Se.classList.toggle("active",M===Je),Se.classList.toggle("passed",M<Je)}),$e.forEach(Se=>Se.classList.toggle("active",+Se.dataset.goto===Je||Je===3&&+Se.dataset.goto==2)),ve.tag.textContent=Ge[Je],qt.scene(Je),yt||qa(ve.tag,600)),T.time-Ke<.1)return;Ke=T.time;let ke=l.position.length(),Mt=Y.tess>.5,Ne=Y.tunnel>.5;ve.dist.textContent=Mt?"\u221E \xB7 5D":Ne?"\u2014 \u2014 \u2014":`${(ke*.046).toFixed(3)} AU \xB7 ${ke.toFixed(2)} Rs`,ve.dil.textContent=Mt?"\u0394t = 0":Ne?"UNDEFINED":`\xD7${(1/Math.sqrt(Math.max(1e-4,1-1/ke))).toFixed(5)}`,ve.vel.textContent=`${Math.min(.99,T.vel*.35).toFixed(3)} c${T.hyper?" \xB7 HYPER":""}`;let je=T.launched?performance.now()/1e3-T.launchAt:0;ve.met.textContent=`${Ze(je/3600)}:${Ze(je/60%60)}:${Ze(je%60)}`,ve.hd.textContent=`${(ke*.046).toFixed(1)} AU`,ve.wdt.textContent=Y.tunnel>.1?"UNDEFINED":`${(1+Y.wormProg*40).toFixed(2)} s`,ve.ws.textContent=`${Ze(12+Y.wormProg*80+Math.random()*3,3)}%`,Pn(".dilation b").forEach(Se=>{let M=+Se.dataset.dil,O=je,q=O*M,$=Math.floor(q/31557600),G=Math.floor(q%31557600/86400);Se.textContent=`LOCAL ${Ze(O/3600)}:${Ze(O/60%60)}:${Ze(O%60)} \xB7 EARTH ${$}y ${Ze(G,3)}d ${Ze(q/3600%24)}:${Ze(q/60%60)}:${Ze(q%60)}`})}let _t={acc:0,n:0,t:0,ups:0},Zt=new URLSearchParams(location.search).has("nogov");function In(Y){if(Zt||!T.launched||T.time-T.launchAt<4||(_t.acc+=Y,_t.n++,_t.t+=Y,_t.t<2))return;let le=_t.acc/_t.n*1e3;_t.acc=0,_t.n=0,_t.t=0;let be=t.q;le>23?(be.bg>.34?t.setQuality({bg:+(be.bg-.08).toFixed(2)}):be.dpr>1&&t.setQuality({dpr:Math.max(1,be.dpr-.25)}),h.bh.uniforms.uSteps.value=Math.max(64,Math.round(h.bh.uniforms.uSteps.value*.85)),v.u.uDpr.value=t.q.dpr):le<12.5&&_t.ups<3&&be.bg<o.bg&&(_t.ups++,t.setQuality({bg:Math.min(o.bg,+(be.bg+.06).toFixed(2))}),h.bh.uniforms.uSteps.value=Math.min(o.steps,Math.round(h.bh.uniforms.uSteps.value*1.12)))}let H=0,jn=innerWidth,Rr=innerHeight,wt=()=>{let Y=cn&&innerWidth===jn&&Math.abs(innerHeight-Rr)<160;B(),!Y&&(jn=innerWidth,Rr=innerHeight,t.resize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),_.resize(innerWidth,innerHeight),B(),clearTimeout(H),H=setTimeout(()=>v.build(Z),200))};addEventListener("resize",wt),Xe.onChange(()=>setTimeout(()=>v.build(Z),50)),v.build(Z);let Ln=0,Bi=performance.now();document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ln),Ln=0,Fe.suspend(!0)):(Bi=performance.now(),Fe.suspend(!1),Ln||(Ln=requestAnimationFrame(Hi)))});function pi(Y){if(T.launched)return;if(T.launched=!0,T.launchAt=performance.now()/1e3,T.launchTime=T.time,Y&&(Fe.setOn(!0),Fe.boom(),Fe.onSync?.()),qt.launch(Y),window.DeviceOrientationEvent){let be=DeviceOrientationEvent.requestPermission;typeof be=="function"?be().then(Je=>Je==="granted"&&addEventListener("deviceorientation",ie)).catch(()=>{}):cn&&addEventListener("deviceorientation",ie)}let le=de("#preloader");le.classList.add("off"),setTimeout(()=>{le.classList.add("gone"),Ft.classList.remove("is-loading")},2300),Ft.classList.add("launched"),r.stop()}de("#btn-launch").addEventListener("click",()=>pi(!0)),de("#btn-quiet").addEventListener("click",()=>pi(!1)),de("#preloader").addEventListener("pointerdown",Y=>{Y.target.closest("#btn-quiet")||Fe.ctx||(Fe.setOn(!0),Fe.onSync?.())}),window.__eh={launch:pi,state:T,lenis:()=>Ot,jump(Y){Ot.scrollTo(X(Y),{immediate:!0,force:!0}),T.camT=Y,T.T=Y},audio:Fe,openPlanet:E,closePlanet:D,openWork:Sc,playMorse:Ou,comet:()=>{x.next=0},quality:()=>({tier:i,...t.q,steps:h.bh.uniforms.uSteps.value})},new URLSearchParams(location.search).has("autostart")&&pi(!1);let Qe={bh:1,worm:0,tunnel:0,tess:0,wormProg:0},zi=new ne,ki=!1;function Hi(Y){Ln=requestAnimationFrame(Hi);let le=Math.min(.05,Math.max(.001,(Y-Bi)/1e3));Bi=Y,T.time+=le,Ot.raf(Y);let be=Ot.animatedScroll??scrollY;T.T=W(be);let Je=T.camT;T.camT+=(T.T-T.camT)*Math.min(1,le*(yt?20:7)),T.vel+=(Math.abs(T.camT-Je)/le-T.vel)*Math.min(1,le*4);let ke=T.launched?T.time-T.launchTime:0,Mt=T.time-j.t0,Ne=Mt>.5&&Mt<3.6?Math.exp(-(Mt-.5)*1.4):0;cn&&T.introDone&&!j.used&&!j.hinted&&ke>9&&T.T<.05&&(j.hinted=!0,Xa(Xe.d.gwTouch,3500));let je=!cn&&T.introDone&&!j.used&&ke>6.5&&T.T<.05&&!yt,Se=de("#bh-hint");if(je){let et=fe();Se.style.transform=`translate(${(et.x+et.r*1.25).toFixed(0)}px, ${(et.y-et.r*1.15).toFixed(0)}px)`}je!==Se.classList.contains("show")&&Se.classList.toggle("show",je),(T.prevCam??0)<1.985!=T.camT<1.985&&Math.abs(T.camT-1.985)<.05&&Fe.whoosh(),T.prevCam=T.camT;let M=yt?1:ft(0,5.2,ke),O=-.2*(1-(1-Math.pow(1-M,3)));T.launched&&!ki&&ke>(yt?1.2:4.6)&&(ki=!0,T.introDone=!0,Ft.classList.add("title-ready","intro-done"),Ot.start(),Pn(".hero-copy [data-scramble]").forEach(et=>!yt&&qa(et,1100)));let q=ft(4.06,4.7,T.camT)*(1-ft(4.96,5.02,T.camT)),$=(T.hyper?5:1)*(1-.93*q)*(T.rewinding?-3:1);T.sim+=le*$;let G=T.camT+O;if(vc(G,R),F.mix+=(F.target-F.mix)*Math.min(1,le*2),F.idx>=0){let et=_n[F.idx].pos,Jt=_n[F.idx].radius;F.ang+=le*.1;let Kt=te.copy(R.pos).sub(et).setY(0).normalize(),$n=Math.cos(F.ang),Vt=Math.sin(F.ang),Ya=new S(Kt.x*$n-Kt.z*Vt,.28,Kt.x*Vt+Kt.z*$n).normalize(),Cr=et.clone().addScaledVector(Ya,Jt*(pe()?4.4:3.5)),us=et.clone().sub(Cr).normalize(),$a=new S().crossVectors(us,new S(0,1,0)).normalize(),qe=pe()?et.clone().add(new S(0,-Jt*1.05,0)):et.clone().addScaledVector($a,Jt*1.05),Vi=F.mix*F.mix*(3-2*F.mix);R.pos.lerp(Cr,Vi),R.tgt.lerp(qe,Vi),R.fov+=(40-R.fov)*Vi,R.roll*=1-Vi,F.target===0&&F.mix<.002&&(F.idx=-1)}l.position.copy(R.pos),l.up.set(0,1,0),l.lookAt(R.tgt),T.pmx+=(T.mx-T.pmx)*Math.min(1,le*2.5),T.pmy+=(T.my-T.pmy)*Math.min(1,le*2.5);let se=yt?.3:1;l.rotateY(-T.pmx*.052*se),l.rotateX(-T.pmy*.035*se),l.rotateZ(R.roll),yt||(l.rotateY(Math.sin(T.time*.11)*.007),l.rotateX(Math.sin(T.time*.083+1.3)*.005)),Qe.worm=Mn(T.camT,2.93,3.05,3.6,3.66),Qe.wormProg=ft(2.95,3.62,T.camT),Qe.tunnel=Mn(T.camT,3.53,3.6,3.89,3.97),Qe.tess=ft(4.99,5.09,T.camT),Qe.bh=Qe.tunnel>.995||Qe.tess>.995?0:1;let he=ft(3.58,3.95,T.camT),xe=yt?0:Ne*.004+(Qe.tunnel*(.0035+he*.004)+Qe.wormProg*Qe.worm*.0015)*(T.hyper?1.6:1);xe>0?(zi.set((Math.random()-.5)*xe,(Math.random()-.5)*xe),l.rotateZ((Math.random()-.5)*xe*2)):zi.set(0,0);let Te=innerWidth/innerHeight,Le=Math.max(1,1.15/Te*.82),Be=Dt.degToRad(R.fov+(T.hyper?6:0));l.fov=Dt.radToDeg(2*Math.atan(Math.tan(Be/2)*Le)),l.updateProjectionMatrix(),l.updateMatrixWorld(),d.group.visible=T.camT>.42&&T.camT<2.4,y.group.visible=T.camT>.95&&T.camT<3.35||F.idx>=0,d.group.visible&&d.update(T.sim,le*Math.abs($)),y.group.visible&&y.update(T.sim,le*Math.abs($),me.kind==="planet"?me.key:-1);let Re=Math.max(ft(1.8,1.99,T.camT),F.idx>=0?1:0);if(m.group.visible=Re>.001&&(T.camT<2.96||F.idx>=0),m.group.visible&&m.update(T.sim,l,innerHeight*t.q.dpr*.012,Re),!cn&&T.launched){let et=ye();(et.kind!==me.kind||et.key!==me.key)&&(me=et,d.setHover(et.kind==="module"?et.key:null),hn.target3d=!!et.kind,et.kind&&Fe.hover())}let Ee=h.bh.uniforms;Ee.uTime.value=T.time,Ee.uDiskTime.value=T.sim*1.1,Ee.uDiskBright.value=(T.launched?ft(.2,2.8,ke):0)*(1+Qe.tess*0),Ee.uStarBright.value=T.launched?.25+.75*ft(0,1.6,ke):.25,Ee.uFade.value=ft(4.84,5,T.camT),Ee.uDiskBright.value*=1+Ne*.9,h.worm.uniforms.uTime.value=T.sim;let ct=h.tunnel.uniforms;ct.uTime.value=T.sim,ct.uProg.value=he,ct.uSpeed.value=yt?.12:1.4+he*2.4;let Ye=h.tess.uniforms;Ye.uTime.value=T.sim,Ye.uProg.value=ft(5,6,T.camT),Ye.uLook.value.set(T.pmx,T.pmy);let at=Xt.waveStart>0?performance.now()/1e3-Xt.waveStart:-1;Ye.uWave.value=at>=0&&at<4?at*12:-1,Xt.morse+=(Xt.morseTarget-Xt.morse)*Math.min(1,le*40),Ye.uMorse.value=Xt.morse,Ye.uPluck.value=performance.now()/1e3-Xt.pluck,Ye.uFlicker.value=.96+.04*Math.sin(T.time*23)*Math.sin(T.time*7),h.syncCamera(l),h.render(Qe),t.beginScene(),g.update(T.sim,l,yt?0:Qe.tess,innerHeight*t.q.dpr*.02),x.update(le,l,T.introDone&&!yt&&T.camT<2.9&&!F.target),(d.group.visible||y.group.visible||m.group.visible||g.points.visible||x.group.visible)&&t.renderScene(c,l);let it=ce(new S(0,0,0)),ze=v.u;ze.uRes.value.set(innerWidth,innerHeight),ze.uHole.value.set(it.x,it.y),ze.uIntro.value=yt?ke>.3?1:0:Ht((ke-1)/3.6,0,1),ze.uSuck.value=ft(.05,.5,T.T),ze.uTime.value=T.time;let mt=T.introDone?1-ft(.04,.16,T.T):0,ut=T.introDone?ft(4.6,5.6,ke):0;ze.uAlpha.value=Math.max(1-ut,1-mt),T.launched&&T.T<.7&&t.renderScene(v.scene,v.camera);let _e=t.final;_e.uBloom.value=.85+Qe.tunnel*.25-Qe.tess*.2,_e.uFlare.value=.55+Qe.tunnel*.3,_e.uCA.value=(yt?.15:.3+Qe.worm*Qe.wormProg*.6+Qe.tunnel*(1.6+he*1.8))+(T.hyper?.5:0)+(T.rewinding?2.2:0),_e.uExposure.value=(T.launched?.2+.8*ft(0,1.4,ke):.2)*(1-Qe.tess*.12),_e.uShake.value.copy(zi),_e.uSat.value=1-q*.35+Qe.tess*.1,_e.uScan.value=T.rewinding?1:0;let Ae=Math.max(Mn(T.camT,3.28,3.48,3.9,4.06),Mn(T.camT,4.66,4.82,5.02,5.12),F.mix*.55);Math.abs(Ae-(T.lb??-1))>.003&&(T.lb=Ae,Ft.style.setProperty("--lb",Ae.toFixed(3)));{let et=T.introDone&&!yt&&!Oi?1-ft(.03,.2,T.T):0,Jt=cn?J.touchOn:hn.active&&!hn.mag&&!hn.el.classList.contains("hidden"),Kt=cn?J.tx:hn.x,$n=cn?J.ty:hn.y,Vt=Math.min(1,le*22);J.x+=(Kt/innerWidth-J.x)*Vt,J.y+=(1-$n/innerHeight-J.y)*Vt,J.s+=((Jt?et:0)-J.s)*Math.min(1,le*(Jt?3:5)),_e.uLens.value.set(J.x,J.y,cn?.056:.044,J.s<.002?0:J.s),hn.el.classList.toggle("lens",J.s>.35)}_e.uRipple.value.set(j.x,j.y,Math.max(0,Mt-.5),Mt>.5&&Mt<3.6&&!yt?1:0);let Lt=Mn(T.camT,3.88,3.93,3.96,4.04),Dn=Mn(T.camT,4.97,5,5.03,5.1);_e.uFlash.value=yt?0:Math.max(Lt*.9,Dn*.75),_e.uFlashColor.value.setRGB(...Dn>Lt?[1,.72,.38]:[.88,.94,1]),_e.uFade.value=0,t.post(T.time),_.update(le*Math.abs($),l,Mn(T.camT,3.96,4.06,4.6,4.72),ft(4,4.7,T.camT)),T.launched&&(we(le),Fi(Qe)),hn.update(le),In(le);let Yn=Mn(T.camT,1.85,2,3,3.2);Fe.update({hero:1-ft(.4,1,T.camT),station:Mn(T.camT,.7,1,1.85,2.1),worm:Qe.worm,wormProg:Qe.wormProg,tunnel:Qe.tunnel,organ:ft(3.3,3.75,T.camT)*(1-ft(4,4.5,T.camT)),tess:Qe.tess,life:1-q*.7,horizonCut:18e3-q*17300,tick:Qe.tess*.7,hyper:T.hyper,music:(T.introDone?1:0)*(.55+.25*Yn)*(1-Qe.tunnel)*(1-.55*Qe.worm*Qe.wormProg)*(1-.35*q),slow:Math.abs($)/(T.hyper?5:1),planets:_n.map(et=>{let Jt=l.position.distanceTo(et.pos),Kt=ce(et.pos);return{gain:Yn*Ht(1-(Jt-et.radius*2)/22,0,1),pan:Kt.x/innerWidth*2-1}})})}let hn=new Wa(Fe);Ln=requestAnimationFrame(Hi)}function yf(r){let e=r.getContext(),t="";try{let s=e.getExtension("WEBGL_debug_renderer_info");s&&(t=e.getParameter(s.UNMASKED_RENDERER_WEBGL)||"")}catch{}let n=new URLSearchParams(location.search).get("q");if(n)return n;let i=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||cn&&Math.min(screen.width,screen.height)<820;return/SwiftShader|llvmpipe|softpipe|Software/i.test(t)?"low":i?/Apple/i.test(t)?"medium":"low":/Intel|Mali|Adreno|PowerVR|Iris|UHD/i.test(t)?"medium":"high"}function _f(){let r=de("#pl-num"),e=de("#pl-bar"),t=de("#pl-log"),n=de("#pl-clock"),i=de("#pl-actions"),s=0,a=0,o=0,l=!0,c=performance.now(),h=yt?600:2600,u=de("#pd-ticks"),d="";for(let v=0;v<48;v++){let _=v/48*Math.PI*2,R=v%4?41:37;d+=`<line x1="${50+Math.sin(_)*R}" y1="${50-Math.cos(_)*R}" x2="${50+Math.sin(_)*45}" y2="${50-Math.cos(_)*45}"/>`}u.innerHTML=d;let p=[...u.children],f=0,y=de("#pd-hand"),m=de("#pd-pulse"),g=setInterval(()=>{if(!l){clearInterval(g);return}f++,y.style.transform=`rotate(${f*7.5}deg)`,p[f%48].classList.add("on"),m.classList.remove("go"),m.getBoundingClientRect(),m.classList.add("go"),Fe.ready&&Fe.on&&Fe.tick(Fe.ctx.currentTime+.01,.8)},1250),x=v=>{if(!l)return;let _=Math.min(1,(v-c)/h),R=Math.min(s,_);a+=(R-a)*.08+(R>a?.002:0),a=Math.min(a,R);let A=Math.round(a*100);r.textContent=String(A).padStart(3,"0"),e.style.transform=`scaleX(${a})`;let P=Xe.d.log;for(;o<P.length&&a>=(o+1)/(P.length+.5);){let B=document.createElement("li");B.innerHTML=`<span>${P[o][0]} ${".".repeat(22-P[o][0].length)}</span><b class="${o===4?"warn":""}">${P[o][1]}</b>`,t.appendChild(B),o++}let L=Math.max(0,(1-a)*9.99);n.textContent=`T\u2212 00:00:${L.toFixed(2).padStart(5,"0")}`,A>=100&&(i.classList.add("ready"),de("#btn-launch").disabled=!1,de("#btn-quiet").disabled=!1,n.textContent="T\u2212 00:00:00.00 \xB7 GO",i.dataset.focused||(i.dataset.focused=1,de("#btn-launch").focus({preventScroll:!0}))),requestAnimationFrame(x)};return requestAnimationFrame(x),{set(v){s=Math.max(s,v)},stop(){l=!1}}}})();
