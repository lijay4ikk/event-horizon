(()=>{var vu=Object.defineProperty;var xu=(r,e,t)=>e in r?vu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ae=(r,e,t)=>xu(r,typeof e!="symbol"?e+"":e,t);var co="170";var yu=0,ar=1,or=2,dh=0,ph=1,ea=2;var mh=5,fi=100,_u=101,Mu=102;var Su=200,Bl=201,bu=202,Tu=203,ho=204,Er=205,wu=206,Eu=207,Au=208,Ru=209,Cu=210,Pu=211,Iu=212,Lu=213,Du=214,Uu=0,Nu=1,Ou=2,Fu=3,Bu=4,zu=5,ku=6,Hu=7;var fh=0;var gh=300,Yi=301,Zi=302,uo=303,po=304,ta=306,Ar=1e3,Rr=1001,mo=1002,vn=1003,Vu=1004;var Jr=1005;var nn=1006,Ca=1007;var Gi=1008;var Qn=1009,vh=1010,xh=1011,Cr=1012,zl=1013,xi=1014,Fn=1015,Ti=1016,kl=1017,Hl=1018,$i=1020,yh=35902,_h=1021,Mh=1022,rn=1023,Sh=1024,bh=1025,Pr=1026,Ji=1027,Th=1028,Vl=1029,wh=1030,Gl=1031;var Wl=1033,As=33776,Rs=33777,Cs=33778,Ps=33779,fo=35840,go=35841,vo=35842,xo=35843,yo=36196,_o=37492,Mo=37496,So=37808,bo=37809,To=37810,wo=37811,Eo=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Io=37817,Lo=37818,Do=37819,Uo=37820,No=37821,Is=36492,Oo=36494,Fo=36495,Eh=36283,Bo=36284,zo=36285,ko=36286;var Ls=2300,Ho=2301,Pa=2302,rc=2400,sc=2401,ac=2402;var Hi="",St="srgb",lr="srgb-linear",na="linear",at="srgb";var Ri=7680;var Gu=512,Wu=513,Xu=514,qu=515,ju=516,Yu=517,Zu=518,$u=519,oc=35044;var lc="300 es",Ki=2e3,Ds=2001,ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,Xi=Math.PI/180,Ir=180/Math.PI;function wi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Lt[255&r]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[255&e]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[63&t|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[255&n]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function Vo(r,e){return(r%e+e)%e}function Sr(r,e,t){return(1-t)*r+t*e}function Vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Xt={DEG2RAD:Xi,RAD2DEG:Ir,generateUUID:wi,clamp:Rt,euclideanModulo:Vo,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Sr,damp:function(r,e,t,n){return Sr(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Vo(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(cc=r);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Xi},radToDeg:function(r){return r*Ir},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ot,denormalize:Vi},ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=i[0],m=i[3],f=i[6],v=i[1],x=i[4],_=i[7],A=i[2],E=i[5],I=i[8];return s[0]=a*y+o*v+l*A,s[3]=a*m+o*x+l*E,s[6]=a*f+o*_+l*I,s[1]=c*y+h*v+u*A,s[4]=c*m+h*x+u*E,s[7]=c*f+h*_+u*I,s[2]=d*y+p*v+g*A,s[5]=d*m+p*x+g*E,s[8]=d*f+p*_+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new Be;function Ah(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ju(){let r=Us("canvas");return r.style.display="block",r}var hc={};function Mr(r){r in hc||(hc[r]=!0,console.warn(r))}var Ke={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===at&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?na:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Bn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function qi(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var uc=[.64,.33,.3,.6,.15,.06],dc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Ci;Ke.define({[lr]:{primaries:uc,whitePoint:pc,transfer:na,toXYZ:mc,fromXYZ:fc,luminanceCoefficients:dc,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:uc,whitePoint:pc,transfer:at,toXYZ:mc,fromXYZ:fc,luminanceCoefficients:dc,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var Go=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Us("canvas")),Ci.width=e.width,Ci.height=e.height;let n=Ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Bn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Bn(t[n]/255)):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ku=0,Ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(La(i[a].image)):s.push(La(i[a]))}else s=La(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function La(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Go.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qu=0,$t=class r extends ei{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=wi(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=gh,$t.DEFAULT_ANISOTROPY=1;var ut=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(p+1)/2,A=(f+1)/2,E=(h+d)/4,I=(u+y)/4,D=(g+m)/4;return x>_&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=I/n):_>A?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=E/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=I/s,i=D/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Wo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Os=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*y,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let A=Math.sqrt(x),E=Math.atan2(A,f*v);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}let _=o*v;if(l=l*m+d*_,c=c*m+p*_,h=h*m+g*_,u=u*m+y*_,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new b,gc=new sn,wn=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Qr.subVectors(this.max,fr),Pi.subVectors(e.a,fr),Ii.subVectors(e.b,fr),Li.subVectors(e.c,fr),Xn.subVectors(Ii,Pi),qn.subVectors(Li,Ii),li.subVectors(Pi,Li);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-li.z,li.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,li.z,0,-li.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-li.y,li.x,0];return!!Ua(t,Pi,Ii,Li,Qr)&&(t=[1,0,0,0,1,0,0,0,1],!!Ua(t,Pi,Ii,Li,Qr)&&(es.crossVectors(Xn,qn),t=[es.x,es.y,es.z],Ua(t,Pi,Ii,Li,Qr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(mn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new b,new b,new b,new b,new b,new b,new b,new b],mn=new b,Kr=new wn,Pi=new b,Ii=new b,Li=new b,Xn=new b,qn=new b,li=new b,fr=new b,Qr=new b,es=new b,ci=new b;function Ua(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ci.fromArray(r,s);let o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ed=new wn,gr=new b,Na=new b,an=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Na)),this.expandByPoint(gr.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new b,Oa=new b,ts=new b,jn=new b,Fa=new b,ns=new b,Ba=new b,yi=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oa.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Oa);let s=.5*e.distanceTo(t),a=-this.direction.dot(ts),o=jn.dot(this.direction),l=-jn.dot(ts),c=jn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oa).addScaledVector(ts,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,s){Fa.subVectors(t,e),ns.subVectors(n,e),Ba.crossVectors(Fa,ns);let a,o=this.direction.dot(Ba);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}jn.subVectors(this.origin,e);let l=a*this.direction.dot(ns.crossVectors(jn,ns));if(l<0)return null;let c=a*this.direction.dot(Fa.cross(jn));if(c<0||l+c>o)return null;let h=-a*jn.dot(Ba);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,g,y,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,g,y,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){let i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Yn.crossVectors(n,jt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Yn.crossVectors(n,jt)),Yn.normalize(),is.crossVectors(jt,Yn),i[0]=Yn.x,i[4]=is.x,i[8]=jt.x,i[1]=Yn.y,i[5]=is.y,i[9]=jt.y,i[2]=Yn.z,i[6]=is.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],v=n[3],x=n[7],_=n[11],A=n[15],E=i[0],I=i[4],D=i[8],O=i[12],T=i[1],F=i[5],V=i[9],Y=i[13],k=i[2],q=i[6],j=i[10],se=i[14],Q=i[3],ve=i[7],be=i[11],te=i[15];return s[0]=a*E+o*T+l*k+c*Q,s[4]=a*I+o*F+l*q+c*ve,s[8]=a*D+o*V+l*j+c*be,s[12]=a*O+o*Y+l*se+c*te,s[1]=h*E+u*T+d*k+p*Q,s[5]=h*I+u*F+d*q+p*ve,s[9]=h*D+u*V+d*j+p*be,s[13]=h*O+u*Y+d*se+p*te,s[2]=g*E+y*T+m*k+f*Q,s[6]=g*I+y*F+m*q+f*ve,s[10]=g*D+y*V+m*j+f*be,s[14]=g*O+y*Y+m*se+f*te,s[3]=v*E+x*T+_*k+A*Q,s[7]=v*I+x*F+_*q+A*ve,s[11]=v*D+x*V+_*j+A*be,s[15]=v*O+x*Y+_*se+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],v=u*m*c-y*d*c+y*l*p-o*m*p-u*l*f+o*d*f,x=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,_=h*y*c-g*u*c+g*o*p-a*y*p-h*o*f+a*u*f,A=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,E=t*v+n*x+i*_+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=v*I,e[1]=(y*d*s-u*m*s-y*i*p+n*m*p+u*i*f-n*d*f)*I,e[2]=(o*m*s-y*l*s+y*i*c-n*m*c-o*i*f+n*l*f)*I,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*I,e[4]=x*I,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*I,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*f-t*l*f)*I,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*I,e[8]=_*I,e[9]=(g*u*s-h*y*s-g*n*p+t*y*p+h*n*f-t*u*f)*I,e[10]=(a*y*s-g*o*s+g*n*c-t*y*c-a*n*f+t*o*f)*I,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*I,e[12]=A*I,e[13]=(h*y*i-g*u*i+g*n*d-t*y*d-h*n*m+t*u*m)*I,e[14]=(g*o*i-a*y*i-g*n*l+t*y*l+a*n*m-t*o*m)*I,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,y=a*h,m=a*u,f=o*u,v=l*c,x=l*h,_=l*u,A=n.x,E=n.y,I=n.z;return i[0]=(1-(y+f))*A,i[1]=(p+_)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(d+f))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*I,i[9]=(m-v)*I,i[10]=(1-(d+y))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Di.set(i[0],i[1],i[2]).length(),a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);let l=1/s,c=1/a,h=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=c,fn.elements[5]*=c,fn.elements[6]*=c,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(o===Ki)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else{if(o!==Ds)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),g=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,g,y;if(o===Ki)g=(a+s)*u,y=-2*u;else{if(o!==Ds)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=s*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Di=new b,fn=new Ie,td=new b(0,0,0),nd=new b(1,1,1),Yn=new b,is=new b,jt=new b,vc=new Ie,xc=new sn,En=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},id=0,yc=new b,Ui=new sn,Dn=new Ie,rs=new b,vr=new b,rd=new b,sd=new sn,_c=new b(1,0,0),Mc=new b(0,1,0),Sc=new b(0,0,1),bc={type:"added"},ad={type:"removed"},Ni={type:"childadded",child:null},za={type:"childremoved",child:null},pt=class r extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new En,n=new sn,i=new b(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Be}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(Sc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(Sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(vr,rs,this.up):Dn.lookAt(rs,vr,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};pt.DEFAULT_UP=new b(0,1,0),pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new b,Un=new b,ka=new b,Nn=new b,Oi=new b,Fi=new b,Tc=new b,Ha=new b,Va=new b,Ga=new b,Wa=new ut,Xa=new ut,qa=new ut,Jn=class r{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),Un.subVectors(n,t),ka.subVectors(e,t);let a=gn.dot(gn),o=gn.dot(Un),l=gn.dot(ka),c=Un.dot(Un),h=Un.dot(ka),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Wa,s.x),a.addScaledVector(Xa,s.y),a.addScaledVector(qa,s.z),a}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Un.subVectors(e,t),gn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),.5*gn.cross(Un).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Oi.subVectors(i,n),Fi.subVectors(s,n),Ha.subVectors(e,n);let l=Oi.dot(Ha),c=Fi.dot(Ha);if(l<=0&&c<=0)return t.copy(n);Va.subVectors(e,i);let h=Oi.dot(Va),u=Fi.dot(Va);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Oi,a);Ga.subVectors(e,s);let p=Oi.dot(Ga),g=Fi.dot(Ga);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Fi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Tc.subVectors(s,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Tc,o);let f=1/(m+y+d);return a=y*f,o=d*f,t.copy(n).addScaledVector(Oi,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function ja(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Vo(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ja(a,s,e+1/3),this.g=ja(a,s,e),this.b=ja(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ke.fromWorkingColorSpace(Dt.copy(this),e),65536*Math.round(Rt(255*Dt.r,0,255))+256*Math.round(Rt(255*Dt.g,0,255))+Math.round(Rt(255*Dt.b,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Dt.copy(this),t);let n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=St){Ke.fromWorkingColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,i=Dt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(ss);let n=Sr(Zn.h,ss.h,t),i=Sr(Zn.s,ss.s,t),s=Sr(Zn.l,ss.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new De;De.NAMES=Rh;var od=0,ti=class extends ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=wi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=Er,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qi=class extends ti{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wm=ld();function ld(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Mt=new b,as=new ne,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}};var Fs=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bs=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Oe=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},cd=0,tn=new Ie,Ya=new pt,Bi=new b,Yt=new wn,xr=new wn,At=new b,mt=class r extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Bs:Fs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new b,1/0);if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Yt.min,xr.min),Yt.expandByPoint(At),At.addVectors(Yt.max,xr.max),Yt.expandByPoint(At)):(Yt.expandByPoint(xr.min),Yt.expandByPoint(xr.max))}Yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),At.add(Bi)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new b,l[D]=new b;let c=new b,h=new b,u=new b,d=new ne,p=new ne,g=new ne,y=new b,m=new b;function f(D,O,T){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,T),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,O),g.fromBufferAttribute(s,T),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(F),o[D].add(y),o[O].add(y),o[T].add(y),l[D].add(m),l[O].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,O=v.length;D<O;++D){let T=v[D],F=T.start;for(let V=F,Y=F+T.count;V<Y;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let x=new b,_=new b,A=new b,E=new b;function I(D){A.fromBufferAttribute(i,D),E.copy(A);let O=o[D];x.copy(O),x.sub(A.multiplyScalar(A.dot(O))).normalize(),_.crossVectors(E,O);let T=_.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,T)}for(let D=0,O=v.length;D<O;++D){let T=v[D],F=T.start;for(let V=F,Y=F+T.count;V<Y;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new Ie,hi=new yi,os=new an,Ec=new b,ls=new b,cs=new b,hs=new b,Za=new b,us=new b,Ac=new b,ds=new b,He=class extends pt{constructor(e=new mt,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Za.fromBufferAttribute(u,e),a?us.addScaledVector(Za,h):us.addScaledVector(Za.sub(t),h))}t.add(us)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),hi.copy(e.ray).recast(e.near),os.containsPoint(hi.origin)===!1&&(hi.intersectSphere(os,Ec)===null||hi.origin.distanceToSquared(Ec)>(e.far-e.near)**2))return;wc.copy(s).invert(),hi.copy(e.ray).applyMatrix4(wc),n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,hi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)i=ps(this,f,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);g<y;g+=3)i=ps(this,a,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)i=ps(this,f,e,n,c,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);g<y;g+=3)i=ps(this,a,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}};function ps(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ls),r.getVertexPosition(l,cs),r.getVertexPosition(c,hs);let h=function(u,d,p,g,y,m,f,v){let x;if(x=d.side===1?g.intersectTriangle(f,m,y,!0,v):g.intersectTriangle(y,m,f,d.side===0,v),x===null)return null;ds.copy(v),ds.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(ds);return _<p.near||_>p.far?null:{distance:_,point:ds.clone(),object:u}}(r,e,t,n,ls,cs,hs,Ac);if(h){let u=new b;Jn.getBarycoord(Ac,ls,cs,hs,u),i&&(h.uv=Jn.getInterpolatedAttribute(i,o,l,c,u,new ne)),s&&(h.uv1=Jn.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new b,materialIndex:0};Jn.getNormal(ls,cs,hs,d.normal),h.face=d,h.barycoord=u}return h}var An=class r extends mt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function g(y,m,f,v,x,_,A,E,I,D,O){let T=_/I,F=A/D,V=_/2,Y=A/2,k=E/2,q=I+1,j=D+1,se=0,Q=0,ve=new b;for(let be=0;be<j;be++){let te=be*F-Y;for(let oe=0;oe<q;oe++){let ge=oe*T-V;ve[y]=ge*v,ve[m]=te*x,ve[f]=k,c.push(ve.x,ve.y,ve.z),ve[y]=0,ve[m]=0,ve[f]=E>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(oe/I),u.push(1-be/D),se+=1}}for(let be=0;be<D;be++)for(let te=0;te<I;te++){let oe=d+te+q*be,ge=d+te+q*(be+1),ye=d+(te+1)+q*(be+1),ce=d+(te+1)+q*be;l.push(oe,ge,ce),l.push(ge,ye,ce),Q+=6}o.addGroup(p,Q,O),p+=Q,d+=se}g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function er(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(r){let e={};for(let t=0;t<r.length;t++){let n=er(r[t]);for(let i in n)e[i]=n[i]}return e}function Ch(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var hd={clone:er,merge:Ft},ft=class extends ti{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Dr=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new b,Rc=new ne,Cc=new ne,Bt=class extends Dr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ir*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Xi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ir*Math.atan(Math.tan(.5*Xi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Rc,Cc),t.subVectors(Cc,Rc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Xi*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zi=-90,qo=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bt(zi,1,e,t);i.layers=this.layers,this.add(i);let s=new Bt(zi,1,e,t);s.layers=this.layers,this.add(s);let a=new Bt(zi,1,e,t);a.layers=this.layers,this.add(a);let o=new Bt(zi,1,e,t);o.layers=this.layers,this.add(o);let l=new Bt(zi,1,e,t);l.layers=this.layers,this.add(l);let c=new Bt(zi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ds)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zs=class extends $t{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Yi,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jo=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new An(5,5,5),s=new ft({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new He(i,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=nn),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},$a=new b,ud=new b,dd=new Be,On=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=$a.subVectors(n,t).cross(ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dd.getNormalMatrix(e),i=this.coplanarPoint($a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ui=new an,ms=new b,tr=class{constructor(e=new On,t=new On,n=new On,i=new On,s=new On,a=new On){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],y=i[10],m=i[11],f=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,m-p,_-f).normalize(),n[1].setComponents(l+s,d+c,m+p,_+f).normalize(),n[2].setComponents(l+a,d+h,m+g,_+v).normalize(),n[3].setComponents(l-a,d-h,m-g,_-v).normalize(),n[4].setComponents(l-o,d-u,m-y,_-x).normalize(),t===Ki)n[5].setComponents(l+o,d+u,m+y,_+x).normalize();else{if(t!==Ds)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,y,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ms.x=i.normal.x>0?e.max.x:e.min.x,ms.y=i.normal.y>0?e.max.y:e.min.y,ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ph(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function pd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}}(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var _i=class r extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let v=f*d-a;for(let x=0;x<c;x++){let _=x*u-s;g.push(_,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let x=v+c*f,_=v+c*(f+1),A=v+1+c*(f+1),E=v+1+c*f;p.push(x,_,E),p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},le={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tn={basic:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([le.common,le.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([le.lights,le.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Tn.physical={uniforms:Ft([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var fs={r:0,b:0,g:0},di=new En,md=new Ie;function fd(r,e,t,n,i,s,a){let o=new De(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function g(m){let f=m.isScene===!0?m.background:null;return f&&f.isTexture&&(f=(m.backgroundBlurriness>0?t:e).get(f)),f}function y(m,f){m.getRGB(fs,Ch(r)),n.buffers.color.setClear(fs.r,fs.g,fs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),h=f,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,y(o,h)},render:function(m){let f=!1,v=g(m);v===null?y(o,h):v&&v.isColor&&(y(v,1),f=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||f)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,f){let v=g(f);v&&(v.isCubeTexture||v.mapping===ta)?(c===void 0&&(c=new He(new An(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:er(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,_,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),di.copy(f.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(md.makeRotationFromEuler(di)),c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==at,u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new He(new _i(2,2),new ft({name:"BackgroundMaterial",uniforms:er(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function gd(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(f){return r.bindVertexArray(f)}function l(f){return r.deleteVertexArray(f)}function c(f){let v=[],x=[],_=[];for(let A=0;A<t;A++)v[A]=0,x[A]=0,_[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:_,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let v=0,x=f.length;v<x;v++)f[v]=0}function u(f){d(f,0)}function d(f,v){let x=s.newAttributes,_=s.enabledAttributes,A=s.attributeDivisors;x[f]=1,_[f]===0&&(r.enableVertexAttribArray(f),_[f]=1),A[f]!==v&&(r.vertexAttribDivisor(f,v),A[f]=v)}function p(){let f=s.newAttributes,v=s.enabledAttributes;for(let x=0,_=v.length;x<_;x++)v[x]!==f[x]&&(r.disableVertexAttribArray(x),v[x]=0)}function g(f,v,x,_,A,E,I){I===!0?r.vertexAttribIPointer(f,v,x,A,E):r.vertexAttribPointer(f,v,x,_,A,E)}function y(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(f,v,x,_,A){let E=!1,I=function(D,O,T){let F=T.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let Y=V[O.id];Y===void 0&&(Y={},V[O.id]=Y);let k=Y[F];return k===void 0&&(k=c(r.createVertexArray()),Y[F]=k),k}(_,x,v);s!==I&&(s=I,o(s.object)),E=function(D,O,T,F){let V=s.attributes,Y=O.attributes,k=0,q=T.getAttributes();for(let j in q)if(q[j].location>=0){let se=V[j],Q=Y[j];if(Q===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),se===void 0||se.attribute!==Q||Q&&se.data!==Q.data)return!0;k++}return s.attributesNum!==k||s.index!==F}(f,_,x,A),E&&function(D,O,T,F){let V={},Y=O.attributes,k=0,q=T.getAttributes();for(let j in q)if(q[j].location>=0){let se=Y[j];se===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));let Q={};Q.attribute=se,se&&se.data&&(Q.data=se.data),V[j]=Q,k++}s.attributes=V,s.attributesNum=k,s.index=F}(f,_,x,A),A!==null&&e.update(A,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,function(D,O,T,F){h();let V=F.attributes,Y=T.getAttributes(),k=O.defaultAttributeValues;for(let q in Y){let j=Y[q];if(j.location>=0){let se=V[q];if(se===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),se!==void 0){let Q=se.normalized,ve=se.itemSize,be=e.get(se);if(be===void 0)continue;let te=be.buffer,oe=be.type,ge=be.bytesPerElement,ye=oe===r.INT||oe===r.UNSIGNED_INT||se.gpuType===zl;if(se.isInterleavedBufferAttribute){let ce=se.data,R=ce.stride,w=se.offset;if(ce.isInstancedInterleavedBuffer){for(let N=0;N<j.locationSize;N++)d(j.location+N,ce.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let N=0;N<j.locationSize;N++)u(j.location+N);r.bindBuffer(r.ARRAY_BUFFER,te);for(let N=0;N<j.locationSize;N++)g(j.location+N,ve/j.locationSize,oe,Q,R*ge,(w+ve/j.locationSize*N)*ge,ye)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<j.locationSize;ce++)d(j.location+ce,se.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<j.locationSize;ce++)u(j.location+ce);r.bindBuffer(r.ARRAY_BUFFER,te);for(let ce=0;ce<j.locationSize;ce++)g(j.location+ce,ve/j.locationSize,oe,Q,ve*ge,ve/j.locationSize*ce*ge,ye)}}else if(k!==void 0){let Q=k[q];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(j.location,Q);break;case 3:r.vertexAttrib3fv(j.location,Q);break;case 4:r.vertexAttrib4fv(j.location,Q);break;default:r.vertexAttrib1fv(j.location,Q)}}}}p()}(f,v,x,_),A!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:y,resetDefaultState:m,dispose:function(){y();for(let f in n){let v=n[f];for(let x in v){let _=v[x];for(let A in _)l(_[A].object),delete _[A];delete v[x]}delete n[f]}},releaseStatesOfGeometry:function(f){if(n[f.id]===void 0)return;let v=n[f.id];for(let x in v){let _=v[x];for(let A in _)l(_[A].object),delete _[A];delete v[x]}delete n[f.id]},releaseStatesOfProgram:function(f){for(let v in n){let x=n[v];if(x[f.id]===void 0)continue;let _=x[f.id];for(let A in _)l(_[A].object),delete _[A];delete x[f.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function vd(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function xd(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===rn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Qn&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Fn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function yd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new On,o=new Be,l={value:null,needsUpdate:!1};function c(h,u,d,p){let g=h!==null?h.length:0,y=null;if(g!==0){if(y=l.value,p!==!0||y===null){let m=d+4*g,f=u.matrixWorldInverse;o.getNormalMatrix(f),(y===null||y.length<m)&&(y=new Float32Array(m));for(let v=0,x=d;v!==g;++v,x+=4)a.copy(h[v]).applyMatrix4(f,o),a.normal.toArray(y,x),y[x+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,g=h.clipIntersection,y=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!y)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let f=s?0:n,v=4*f,x=m.clippingState||null;l.value=x,x=c(p,u,v,d);for(let _=0;_!==v;++_)x[_]=t[_];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}function _d(r){let e=new WeakMap;function t(i,s){return s===uo?i.mapping=Yi:s===po&&(i.mapping=Zi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===uo||s===po){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new jo(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var ni=class extends Dr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pc=[.125,.215,.35,.446,.526,.582],yr=20,Ja=new ni,Ic=new De,Ka=null,Qa=0,eo=0,to=!1,mi=(1+Math.sqrt(5))/2,ki=1/mi,Lc=[new b(-mi,ki,0),new b(mi,ki,0),new b(-ki,0,mi),new b(ki,0,mi),new b(0,mi,-ki),new b(0,mi,ki),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ka=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Qa,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ti,format:rn,colorSpace:lr,depthBuffer:!1},i=Dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Pc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let g=1/p;d>a-4?g=Pc[d-a+4-1]:d===0&&(g=0),c.push(g);let y=1/(p-2),m=-y,f=1+y,v=[m,m,f,m,f,f,m,m,f,f,m,f],x=6,_=6,A=3,E=2,I=1,D=new Float32Array(A*_*x),O=new Float32Array(E*_*x),T=new Float32Array(I*_*x);for(let V=0;V<x;V++){let Y=V%3*2/3-1,k=V>2?0:-1,q=[Y,k,0,Y+2/3,k,0,Y+2/3,k+1,0,Y,k,0,Y+2/3,k+1,0,Y,k+1,0];D.set(q,A*_*V),O.set(v,E*_*V);let j=[V,V,V,V,V,V];T.set(j,I*_*V)}let F=new mt;F.setAttribute("position",new Ut(D,A)),F.setAttribute("uv",new Ut(O,E)),F.setAttribute("faceIndex",new Ut(T,I)),o.push(F),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(yr),h=new b(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,i){let s=new Bt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ic),l.toneMapping=0,l.autoClear=!1;let u=new Qi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new He(new An,u),p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Ic),p=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):m===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let f=this._cubeSize;gs(i,m*f,y>2?f:0,f,f),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Yi||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;gs(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lc[(i-s-1)%Lc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new He(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/p,y=isFinite(s)?1+Math.floor(3*g):yr;y>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let m=[],f=0;for(let _=0;_<yr;++_){let A=_/g,E=Math.exp(-A*A/2);m.push(E),_===0?f+=E:_<y&&(f+=2*E)}for(let _=0;_<m.length;_++)m[_]=m[_]/f;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[i];gs(t,3*x*(i>v-4?i-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Ja)}};function Dc(r,e,t){let n=new yn(r,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Uc(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nc(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function Md(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===uo||s===po,o=s===Yi||s===Zi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new nr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&function(u){let d=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p}(h)?(t===null&&(t=new nr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Sd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bd(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,g=d.length;p<g;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let m=0,f=y.length;m<f;m+=3){let v=y[m+0],x=y[m+1],_=y[m+2];c.push(v,x,x,_,_,v)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let m=0,f=y.length/3-1;m<f;m+=3){let v=m+0,x=m+1,_=m+2;c.push(v,x,x,_,_,v)}}}let p=new(Ah(c)?Bs:Fs)(c,1);p.version=d;let g=s.get(l);g&&e.remove(g),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,g=d.length;p<g;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Td(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function wd(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Ed(r,e,t){let n=new WeakMap,i=new ut;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let x=a.attributes.position.count*v,_=1;x>e.maxTextureSize&&(_=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*_*4*h),E=new Os(A,x,_,h);E.type=Fn,E.needsUpdate=!0;let I=4*v;for(let O=0;O<h;O++){let T=y[O],F=m[O],V=f[O],Y=x*_*4*O;for(let k=0;k<T.count;k++){let q=k*I;d===!0&&(i.fromBufferAttribute(T,k),A[Y+q+0]=i.x,A[Y+q+1]=i.y,A[Y+q+2]=i.z,A[Y+q+3]=0),p===!0&&(i.fromBufferAttribute(F,k),A[Y+q+4]=i.x,A[Y+q+5]=i.y,A[Y+q+6]=i.z,A[Y+q+7]=0),g===!0&&(i.fromBufferAttribute(V,k),A[Y+q+8]=i.x,A[Y+q+9]=i.y,A[Y+q+10]=i.z,A[Y+q+11]=V.itemSize===4?i.w:1)}}u={count:h,texture:E,size:new ne(x,_)},n.set(a,u),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Ad(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var ks=class extends $t{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==Pr&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pr&&(n=xi),n===void 0&&h===Ji&&(n=$i),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ih=new $t,Oc=new ks(1,1),Lh=new Os,Dh=new Xo,Uh=new zs,Fc=[],Bc=[],zc=new Float32Array(16),kc=new Float32Array(9),Hc=new Float32Array(4);function cr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Fc[i];if(s===void 0&&(s=new Float32Array(i),Fc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ia(r,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Rd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Cd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function Pd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function Id(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function Ld(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Hc.set(n),r.uniformMatrix2fv(this.addr,!1,Hc),Tt(t,n)}}function Dd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;kc.set(n),r.uniformMatrix3fv(this.addr,!1,kc),Tt(t,n)}}function Ud(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;zc.set(n),r.uniformMatrix4fv(this.addr,!1,zc),Tt(t,n)}}function Nd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Od(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function Fd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function Bd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function zd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function Hd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function Vd(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Gd(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Oc.compareFunction=515,s=Oc):s=Ih,t.setTexture2D(e||s,i)}function Wd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dh,i)}function Xd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uh,i)}function qd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lh,i)}function jd(r,e){r.uniform1fv(this.addr,e)}function Yd(r,e){let t=cr(e,this.size,2);r.uniform2fv(this.addr,t)}function Zd(r,e){let t=cr(e,this.size,3);r.uniform3fv(this.addr,t)}function $d(r,e){let t=cr(e,this.size,4);r.uniform4fv(this.addr,t)}function Jd(r,e){let t=cr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Kd(r,e){let t=cr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qd(r,e){let t=cr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ep(r,e){r.uniform1iv(this.addr,e)}function tp(r,e){r.uniform2iv(this.addr,e)}function np(r,e){r.uniform3iv(this.addr,e)}function ip(r,e){r.uniform4iv(this.addr,e)}function rp(r,e){r.uniform1uiv(this.addr,e)}function sp(r,e){r.uniform2uiv(this.addr,e)}function ap(r,e){r.uniform3uiv(this.addr,e)}function op(r,e){r.uniform4uiv(this.addr,e)}function lp(r,e,t){let n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ih,s[a])}function cp(r,e,t){let n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Dh,s[a])}function hp(r,e,t){let n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Uh,s[a])}function up(r,e,t){let n=this.cache,i=e.length,s=ia(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Lh,s[a])}var Yo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return Rd;case 35664:return Cd;case 35665:return Pd;case 35666:return Id;case 35674:return Ld;case 35675:return Dd;case 35676:return Ud;case 5124:case 35670:return Nd;case 35667:case 35671:return Od;case 35668:case 35672:return Fd;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return kd;case 36295:return Hd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Gd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return qd}}(t.type)}},Zo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return jd;case 35664:return Yd;case 35665:return Zd;case 35666:return $d;case 35674:return Jd;case 35675:return Kd;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return sp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}(t.type)}},$o=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},no=/(\w+)(\])?(\[|\.)?/g;function Vc(r,e){r.seq.push(e),r.map[e.id]=e}function dp(r,e,t){let n=r.name,i=n.length;for(no.lastIndex=0;;){let s=no.exec(n),a=no.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Vc(t,c===void 0?new Yo(o,r,e):new Zo(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new $o(o),Vc(t,h)),t=h}}}var ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);dp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Gc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var pp=0,Wc=new Be;function Xc(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let g=p+1;h.push(`${g===l?">":" "} ${g}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function mp(r,e){let t=function(n){Ke._getMatrix(Wc,Ke.workingColorSpace,n);let i=`mat3( ${Wc.elements.map(s=>s.toFixed(4))} )`;switch(Ke.getTransfer(n)){case na:return[i,"LinearTransferOETF"];case at:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}}(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fp(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vs=new b;function gp(){return Ke.getLuminanceCoefficients(vs),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${vs.x.toFixed(4)}, ${vs.y.toFixed(4)}, ${vs.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _r(r){return r!==""}function qc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(r){return r.replace(vp,yp)}var xp=new Map;function yp(r,e){let t=ze[e];if(t===void 0){let n=xp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Jo(t)}var _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(r){return r.replace(_p,Mp)}function Mp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Sp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(F){let V="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===1?V="SHADOWMAP_TYPE_PCF":F.shadowMapType===2?V="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===3&&(V="SHADOWMAP_TYPE_VSM"),V}(t),c=function(F){let V="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case Yi:case Zi:V="ENVMAP_TYPE_CUBE";break;case ta:V="ENVMAP_TYPE_CUBE_UV"}return V}(t),h=function(F){let V="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===Zi&&(V="ENVMAP_MODE_REFRACTION"),V}(t),u=function(F){let V="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case 0:V="ENVMAP_BLENDING_MULTIPLY";break;case 1:V="ENVMAP_BLENDING_MIX";break;case 2:V="ENVMAP_BLENDING_ADD"}return V}(t),d=function(F){let V=F.envMapCubeUVHeight;if(V===null)return null;let Y=Math.log2(V)-2,k=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:k,maxMip:Y}}(t),p=function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",F.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}(t),g=function(F){let V=[];for(let Y in F){let k=F[Y];k!==!1&&V.push("#define "+Y+" "+k)}return V.join(`
`)}(s),y=i.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(m=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ze.tonemapping_pars_fragment:"",t.toneMapping!==0?fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,mp("linearToOutputTexel",t.outputColorSpace),gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=Jo(a),a=qc(a,t),a=jc(a,t),o=Jo(o),o=qc(o,t),o=jc(o,t),a=Yc(a),o=Yc(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=v+m+a,_=v+f+o,A=Gc(i,i.VERTEX_SHADER,x),E=Gc(i,i.FRAGMENT_SHADER,_);function I(F){if(r.debug.checkShaderErrors){let V=i.getProgramInfoLog(y).trim(),Y=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(E).trim(),q=!0,j=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,A,E);else{let se=Xc(i,A,"vertex"),Q=Xc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+se+`
`+Q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):Y!==""&&k!==""||(j=!1);j&&(F.diagnostics={runnable:q,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:k,prefix:f}})}i.deleteShader(A),i.deleteShader(E),D=new ji(i,y),O=function(V,Y){let k={},q=V.getProgramParameter(Y,V.ACTIVE_ATTRIBUTES);for(let j=0;j<q;j++){let se=V.getActiveAttrib(Y,j),Q=se.name,ve=1;se.type===V.FLOAT_MAT2&&(ve=2),se.type===V.FLOAT_MAT3&&(ve=3),se.type===V.FLOAT_MAT4&&(ve=4),k[Q]={type:se.type,location:V.getAttribLocation(Y,Q),locationSize:ve}}return k}(i,y)}let D,O;i.attachShader(y,A),i.attachShader(y,E),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),this.getUniforms=function(){return D===void 0&&I(this),D},this.getAttributes=function(){return O===void 0&&I(this),O};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(y,37297)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=E,this}var bp=0,Ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qo(e),t.set(e,n)),n}},Qo=class{constructor(e){this.id=bp++,this.code=e,this.usedTimes=0}};function Tp(r,e,t,n,i,s,a){let o=new Lr,l=new Ko,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,f,v,x,_){let A=x.fog,E=_.geometry,I=m.isMeshStandardMaterial?x.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||I),O=D&&D.mapping===ta?D.image.height:null,T=g[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let F=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,V=F!==void 0?F.length:0,Y,k,q,j,se=0;if(E.morphAttributes.position!==void 0&&(se=1),E.morphAttributes.normal!==void 0&&(se=2),E.morphAttributes.color!==void 0&&(se=3),T){let Vn=Tn[T];Y=Vn.vertexShader,k=Vn.fragmentShader}else Y=m.vertexShader,k=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),j=l.getFragmentShaderID(m);let Q=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),be=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,oe=!!m.map,ge=!!m.matcap,ye=!!D,ce=!!m.aoMap,R=!!m.lightMap,w=!!m.bumpMap,N=!!m.normalMap,U=!!m.displacementMap,C=!!m.emissiveMap,L=!!m.metalnessMap,M=!!m.roughnessMap,P=m.anisotropy>0,B=m.clearcoat>0,ee=m.dispersion>0,z=m.iridescence>0,J=m.sheen>0,Z=m.transmission>0,$=P&&!!m.anisotropyMap,me=B&&!!m.clearcoatMap,he=B&&!!m.clearcoatNormalMap,fe=B&&!!m.clearcoatRoughnessMap,Ce=z&&!!m.iridescenceMap,qe=z&&!!m.iridescenceThicknessMap,Re=J&&!!m.sheenColorMap,Te=J&&!!m.sheenRoughnessMap,Je=!!m.specularMap,it=!!m.specularColorMap,lt=!!m.specularIntensityMap,_e=Z&&!!m.transmissionMap,Ve=Z&&!!m.thicknessMap,Ze=!!m.gradientMap,Mn=!!m.alphaMap,Pn=m.alphaTest>0,Ge=!!m.alphaHash,Ht=!!m.extensions,Sn=0;m.toneMapped&&(Q!==null&&Q.isXRRenderTarget!==!0||(Sn=r.toneMapping));let H={shaderID:T,shaderType:m.type,shaderName:m.name,vertexShader:Y,fragmentShader:k,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:j,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:te,batchingColor:te&&_._colorsTexture!==null,instancing:be,instancingColor:be&&_.instanceColor!==null,instancingMorph:be&&_.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:lr,alphaToCoverage:!!m.alphaToCoverage,map:oe,matcap:ge,envMap:ye,envMapMode:ye&&D.mapping,envMapCubeUVHeight:O,aoMap:ce,lightMap:R,bumpMap:w,normalMap:N,displacementMap:d&&U,emissiveMap:C,normalMapObjectSpace:N&&m.normalMapType===1,normalMapTangentSpace:N&&m.normalMapType===0,metalnessMap:L,roughnessMap:M,anisotropy:P,anisotropyMap:$,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:fe,dispersion:ee,iridescence:z,iridescenceMap:Ce,iridescenceThicknessMap:qe,sheen:J,sheenColorMap:Re,sheenRoughnessMap:Te,specularMap:Je,specularColorMap:it,specularIntensityMap:lt,transmission:Z,transmissionMap:_e,thicknessMap:Ve,gradientMap:Ze,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Mn,alphaTest:Pn,alphaHash:Ge,combine:m.combine,mapUv:oe&&y(m.map.channel),aoMapUv:ce&&y(m.aoMap.channel),lightMapUv:R&&y(m.lightMap.channel),bumpMapUv:w&&y(m.bumpMap.channel),normalMapUv:N&&y(m.normalMap.channel),displacementMapUv:U&&y(m.displacementMap.channel),emissiveMapUv:C&&y(m.emissiveMap.channel),metalnessMapUv:L&&y(m.metalnessMap.channel),roughnessMapUv:M&&y(m.roughnessMap.channel),anisotropyMapUv:$&&y(m.anisotropyMap.channel),clearcoatMapUv:me&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:Te&&y(m.sheenRoughnessMap.channel),specularMapUv:Je&&y(m.specularMap.channel),specularColorMapUv:it&&y(m.specularColorMap.channel),specularIntensityMapUv:lt&&y(m.specularIntensityMap.channel),transmissionMapUv:_e&&y(m.transmissionMap.channel),thicknessMapUv:Ve&&y(m.thicknessMap.channel),alphaMapUv:Mn&&y(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(N||P),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!E.attributes.uv&&(oe||Mn),fog:!!A,useFog:m.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ve,skinning:_.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:se,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:Sn,decodeVideoTexture:oe&&m.map.isVideoTexture===!0&&Ke.getTransfer(m.map.colorSpace)===at,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(m.emissiveMap.colorSpace)===at,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ht&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&m.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return H.vertexUv1s=c.has(1),H.vertexUv2s=c.has(2),H.vertexUv3s=c.has(3),c.clear(),H},getProgramCacheKey:function(m){let f=[];if(m.shaderID?f.push(m.shaderID):(f.push(m.customVertexShaderID),f.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)f.push(v),f.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}(f,m),function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}(f,m),f.push(r.outputColorSpace)),f.push(m.customProgramCacheKey),f.join()},getUniforms:function(m){let f=g[m.type],v;if(f){let x=Tn[f];v=hd.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,f){let v;for(let x=0,_=h.length;x<_;x++){let A=h[x];if(A.cacheKey===f){v=A,++v.usedTimes;break}}return v===void 0&&(v=new Sp(r,f,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let f=h.indexOf(m);h[f]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function wp(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Ep(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $c(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jc(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Ep),n.length>1&&n.sort(o||$c),i.length>1&&i.sort(o||$c)}}}function Ap(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Jc,r.set(e,[i])):t>=n.length?(i=new Jc,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Rp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new De};break;case"SpotLight":t={position:new b,direction:new b,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var Cp=0;function Pp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ip(r){let e=new Rp,t=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new b);let i=new b,s=new Ie,a=new Ie;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,d=0,p=0,g=0,y=0,m=0,f=0,v=0,x=0,_=0,A=0;o.sort(Pp);for(let I=0,D=o.length;I<D;I++){let O=o[I],T=O.color,F=O.intensity,V=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=T.r*F,c+=T.g*F,h+=T.b*F;else if(O.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(O.sh.coefficients[k],F);A++}else if(O.isDirectionalLight){let k=e.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let q=O.shadow,j=t.get(O);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[u]=j,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=O.shadow.matrix,m++}n.directional[u]=k,u++}else if(O.isSpotLight){let k=e.get(O);k.position.setFromMatrixPosition(O.matrixWorld),k.color.copy(T).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(O.angle),k.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),k.decay=O.decay,n.spot[p]=k;let q=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,q.updateMatrices(O),O.castShadow&&_++),n.spotLightMatrix[p]=q.matrix,O.castShadow){let j=t.get(O);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=Y,v++}p++}else if(O.isRectAreaLight){let k=e.get(O);k.color.copy(T).multiplyScalar(F),k.halfWidth.set(.5*O.width,0,0),k.halfHeight.set(0,.5*O.height,0),n.rectArea[g]=k,g++}else if(O.isPointLight){let k=e.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity),k.distance=O.distance,k.decay=O.decay,O.castShadow){let q=O.shadow,j=t.get(O);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=O.shadow.matrix,f++}n.point[d]=k,d++}else if(O.isHemisphereLight){let k=e.get(O);k.skyColor.copy(O.color).multiplyScalar(F),k.groundColor.copy(O.groundColor).multiplyScalar(F),n.hemi[y]=k,y++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let E=n.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===g&&E.hemiLength===y&&E.numDirectionalShadows===m&&E.numPointShadows===f&&E.numSpotShadows===v&&E.numSpotMaps===x&&E.numLightProbes===A||(n.directional.length=u,n.spot.length=p,n.rectArea.length=g,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=v+x-_,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=A,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=g,E.hemiLength=y,E.numDirectionalShadows=m,E.numPointShadows=f,E.numSpotShadows=v,E.numSpotMaps=x,E.numLightProbes=A,n.version=Cp++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,g=l.matrixWorldInverse;for(let y=0,m=o.length;y<m;y++){let f=o[y];if(f.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),c++}else if(f.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(f.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(.5*f.width,0,0),v.halfHeight.set(0,.5*f.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(f.matrixWorld),v.direction.transformDirection(g),p++}}},state:n}}function Kc(r){let e=new Ip(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Lp(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Kc(r),e.set(t,[s])):n>=i.length?(s=new Kc(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var el=class extends ti{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends ti{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dp(r,e,t){let n=new tr,i=new ne,s=new ne,a=new ut,o=new el({depthPacking:3201}),l=new tl,c={},h=t.maxTextureSize,u={[yu]:1,[ar]:0,[or]:2},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new He(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;function v(E,I){let D=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(I,null,D,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(I,null,D,p,y,null)}function x(E,I,D,O){let T=null,F=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)T=F;else if(T=D.isPointLight===!0?l:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let V=T.uuid,Y=I.uuid,k=c[V];k===void 0&&(k={},c[V]=k);let q=k[Y];q===void 0&&(q=T.clone(),k[Y]=q,I.addEventListener("dispose",A)),T=q}return T.visible=I.visible,T.wireframe=I.wireframe,T.side=O===3?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(r.properties.get(T).light=D),T}function _(E,I,D,O,T){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let V=e.update(E),Y=E.material;if(Array.isArray(Y)){let k=V.groups;for(let q=0,j=k.length;q<j;q++){let se=k[q],Q=Y[se.materialIndex];if(Q&&Q.visible){let ve=x(E,Q,O,T);E.onBeforeShadow(r,E,I,D,V,ve,se),r.renderBufferDirect(D,null,V,ve,E,se),E.onAfterShadow(r,E,I,D,V,ve,se)}}}else if(Y.visible){let k=x(E,Y,O,T);E.onBeforeShadow(r,E,I,D,V,k,null),r.renderBufferDirect(D,null,V,k,E,null),E.onAfterShadow(r,E,I,D,V,k,null)}}let F=E.children;for(let V=0,Y=F.length;V<Y;V++)_(F[V],I,D,O,T)}function A(E){E.target.removeEventListener("dispose",A);for(let I in c){let D=c[I],O=E.target.uuid;O in D&&(D[O].dispose(),delete D[O])}}this.render=function(E,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let O=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),V=r.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Y=f!==3&&this.type===3,k=f===3&&this.type!==3;for(let q=0,j=E.length;q<j;q++){let se=E[q],Q=se.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let ve=Q.getFrameExtents();if(i.multiply(ve),s.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ve.x),i.x=s.x*ve.x,Q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ve.y),i.y=s.y*ve.y,Q.mapSize.y=s.y)),Q.map===null||Y===!0||k===!0){let te=this.type!==3?{minFilter:vn,magFilter:vn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new yn(i.x,i.y,te),Q.map.texture.name=se.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();let be=Q.getViewportCount();for(let te=0;te<be;te++){let oe=Q.getViewport(te);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a),Q.updateMatrices(se,te),n=Q.getFrustum(),_(I,D,Q.camera,se,this.type)}Q.isPointLightShadow!==!0&&this.type===3&&v(Q,D),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(O,T,F)}}var Up={[Uu]:1,[Ou]:6,[Bu]:7,[Fu]:5,[Nu]:0,[ku]:2,[Hu]:4,[zu]:3};function Np(r,e){let t=new function(){let M=!1,P=new ut,B=null,ee=new ut(0,0,0,0);return{setMask:function(z){B===z||M||(r.colorMask(z,z,z,z),B=z)},setLocked:function(z){M=z},setClear:function(z,J,Z,$,me){me===!0&&(z*=$,J*=$,Z*=$),P.set(z,J,Z,$),ee.equals(P)===!1&&(r.clearColor(z,J,Z,$),ee.copy(P))},reset:function(){M=!1,B=null,ee.set(-1,0,0,0)}}},n=new function(){let M=!1,P=!1,B=null,ee=null,z=null;return{setReversed:function(J){if(P!==J){let Z=e.get("EXT_clip_control");P?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);let $=z;z=null,this.setClear($)}P=J},getReversed:function(){return P},setTest:function(J){J?ye(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(J){B===J||M||(r.depthMask(J),B=J)},setFunc:function(J){if(P&&(J=Up[J]),ee!==J){switch(J){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}ee=J}},setLocked:function(J){M=J},setClear:function(J){z!==J&&(P&&(J=1-J),r.clearDepth(J),z=J)},reset:function(){M=!1,B=null,ee=null,z=null,P=!1}}},i=new function(){let M=!1,P=null,B=null,ee=null,z=null,J=null,Z=null,$=null,me=null;return{setTest:function(he){M||(he?ye(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(he){P===he||M||(r.stencilMask(he),P=he)},setFunc:function(he,fe,Ce){B===he&&ee===fe&&z===Ce||(r.stencilFunc(he,fe,Ce),B=he,ee=fe,z=Ce)},setOp:function(he,fe,Ce){J===he&&Z===fe&&$===Ce||(r.stencilOp(he,fe,Ce),J=he,Z=fe,$=Ce)},setLocked:function(he){M=he},setClear:function(he){me!==he&&(r.clearStencil(he),me=he)},reset:function(){M=!1,P=null,B=null,ee=null,z=null,J=null,Z=null,$=null,me=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,y=null,m=null,f=null,v=null,x=null,_=new De(0,0,0),A=0,E=!1,I=null,D=null,O=null,T=null,F=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,k=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=k>=2);let j=null,se={},Q=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),be=new ut().fromArray(Q),te=new ut().fromArray(ve);function oe(M,P,B,ee){let z=new Uint8Array(4),J=r.createTexture();r.bindTexture(M,J),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Z=0;Z<B;Z++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(P,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,z):r.texImage2D(P+Z,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,z);return J}let ge={};function ye(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function ce(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}ge[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),ye(r.DEPTH_TEST),n.setFunc(3),U(!1),C(1),ye(r.CULL_FACE),N(0);let R={[fi]:r.FUNC_ADD,[_u]:r.FUNC_SUBTRACT,[Mu]:r.FUNC_REVERSE_SUBTRACT};R[103]=r.MIN,R[104]=r.MAX;let w={[Su]:r.ZERO,[Bl]:r.ONE,[bu]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[Cu]:r.SRC_ALPHA_SATURATE,[Au]:r.DST_COLOR,[wu]:r.DST_ALPHA,[Tu]:r.ONE_MINUS_SRC_COLOR,[Er]:r.ONE_MINUS_SRC_ALPHA,[Ru]:r.ONE_MINUS_DST_COLOR,[Eu]:r.ONE_MINUS_DST_ALPHA,[Pu]:r.CONSTANT_COLOR,[Iu]:r.ONE_MINUS_CONSTANT_COLOR,[Lu]:r.CONSTANT_ALPHA,[Du]:r.ONE_MINUS_CONSTANT_ALPHA};function N(M,P,B,ee,z,J,Z,$,me,he){if(M!==0){if(d===!1&&(ye(r.BLEND),d=!0),M===5)z=z||P,J=J||B,Z=Z||ee,P===g&&z===f||(r.blendEquationSeparate(R[P],R[z]),g=P,f=z),B===y&&ee===m&&J===v&&Z===x||(r.blendFuncSeparate(w[B],w[ee],w[J],w[Z]),y=B,m=ee,v=J,x=Z),$.equals(_)!==!1&&me===A||(r.blendColor($.r,$.g,$.b,me),_.copy($),A=me),p=M,E=!1;else if(M!==p||he!==E){if(g===fi&&f===fi||(r.blendEquation(r.FUNC_ADD),g=fi,f=fi),he)switch(M){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}y=null,m=null,v=null,x=null,_.set(0,0,0),A=0,p=M,E=he}}else d===!0&&(ce(r.BLEND),d=!1)}function U(M){I!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),I=M)}function C(M){M!==0?(ye(r.CULL_FACE),M!==D&&(M===1?r.cullFace(r.BACK):M===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),D=M}function L(M,P,B){M?(ye(r.POLYGON_OFFSET_FILL),T===P&&F===B||(r.polygonOffset(P,B),T=P,F=B)):ce(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:ye,disable:ce,bindFramebuffer:function(M,P){return l[M]!==P&&(r.bindFramebuffer(M,P),l[M]=P,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=P),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(M,P){let B=h,ee=!1;if(M){B=c.get(P),B===void 0&&(B=[],c.set(P,B));let z=M.textures;if(B.length!==z.length||B[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Z=z.length;J<Z;J++)B[J]=r.COLOR_ATTACHMENT0+J;B.length=z.length,ee=!0}}else B[0]!==r.BACK&&(B[0]=r.BACK,ee=!0);ee&&r.drawBuffers(B)},useProgram:function(M){return u!==M&&(r.useProgram(M),u=M,!0)},setBlending:N,setMaterial:function(M,P){M.side===2?ce(r.CULL_FACE):ye(r.CULL_FACE);let B=M.side===1;P&&(B=!B),U(B),M.blending===1&&M.transparent===!1?N(0):N(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let ee=M.stencilWrite;i.setTest(ee),ee&&(i.setMask(M.stencilWriteMask),i.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),i.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),L(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:U,setCullFace:C,setLineWidth:function(M){M!==O&&(Y&&r.lineWidth(M),O=M)},setPolygonOffset:L,setScissorTest:function(M){M?ye(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+V-1),j!==M&&(r.activeTexture(M),j=M)},bindTexture:function(M,P,B){B===void 0&&(B=j===null?r.TEXTURE0+V-1:j);let ee=se[B];ee===void 0&&(ee={type:void 0,texture:void 0},se[B]=ee),ee.type===M&&ee.texture===P||(j!==B&&(r.activeTexture(B),j=B),r.bindTexture(M,P||ge[M]),ee.type=M,ee.texture=P)},unbindTexture:function(){let M=se[j];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,P){let B=a.get(P);B===void 0&&(B=new WeakMap,a.set(P,B));let ee=B.get(M);ee===void 0&&(ee=r.getUniformBlockIndex(P,M.name),B.set(M,ee))},uniformBlockBinding:function(M,P){let B=a.get(P).get(M);s.get(P)!==B&&(r.uniformBlockBinding(P,B,M.__bindingPointIndex),s.set(P,B))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){be.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),be.copy(M))},viewport:function(M){te.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),te.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},j=null,se={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,g=null,y=null,m=null,f=null,v=null,x=null,_=new De(0,0,0),A=0,E=!1,I=null,D=null,O=null,T=null,F=null,be.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Qc(r,e,t,n){let i=function(s){switch(s){case Qn:case vh:return{byteLength:1,components:1};case Cr:case xh:case Ti:return{byteLength:2,components:1};case kl:case Hl:return{byteLength:2,components:4};case xi:case zl:case Fn:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(n);switch(t){case _h:case Sh:return r*e;case bh:return r*e*2;case Th:case Vl:return r*e/i.components*i.byteLength;case wh:case Gl:return r*e*2/i.components*i.byteLength;case Mh:return r*e*3/i.components*i.byteLength;case rn:case Wl:return r*e*4/i.components*i.byteLength;case As:case Rs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Ps:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case go:case xo:return Math.max(r,16)*Math.max(e,8)/4;case fo:case vo:return Math.max(r,8)*Math.max(e,8)/2;case yo:case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Is:case Oo:case Fo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Eh:case Bo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zo:case ko:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Us("canvas")}function y(R,w,N){let U=1,C=ce(R);if((C.width>N||C.height>N)&&(U=N/Math.max(C.width,C.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let L=Math.floor(U*C.width),M=Math.floor(U*C.height);u===void 0&&(u=g(L,M));let P=w?g(L,M):u;return P.width=L,P.height=M,P.getContext("2d").drawImage(R,0,0,L,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+L+"x"+M+")."),P}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),R}return R}function m(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,w,N,U,C=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let L=w;if(w===r.RED&&(N===r.FLOAT&&(L=r.R32F),N===r.HALF_FLOAT&&(L=r.R16F),N===r.UNSIGNED_BYTE&&(L=r.R8)),w===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(L=r.R8UI),N===r.UNSIGNED_SHORT&&(L=r.R16UI),N===r.UNSIGNED_INT&&(L=r.R32UI),N===r.BYTE&&(L=r.R8I),N===r.SHORT&&(L=r.R16I),N===r.INT&&(L=r.R32I)),w===r.RG&&(N===r.FLOAT&&(L=r.RG32F),N===r.HALF_FLOAT&&(L=r.RG16F),N===r.UNSIGNED_BYTE&&(L=r.RG8)),w===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(L=r.RG8UI),N===r.UNSIGNED_SHORT&&(L=r.RG16UI),N===r.UNSIGNED_INT&&(L=r.RG32UI),N===r.BYTE&&(L=r.RG8I),N===r.SHORT&&(L=r.RG16I),N===r.INT&&(L=r.RG32I)),w===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(L=r.RGB8UI),N===r.UNSIGNED_SHORT&&(L=r.RGB16UI),N===r.UNSIGNED_INT&&(L=r.RGB32UI),N===r.BYTE&&(L=r.RGB8I),N===r.SHORT&&(L=r.RGB16I),N===r.INT&&(L=r.RGB32I)),w===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(L=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(L=r.RGBA16UI),N===r.UNSIGNED_INT&&(L=r.RGBA32UI),N===r.BYTE&&(L=r.RGBA8I),N===r.SHORT&&(L=r.RGBA16I),N===r.INT&&(L=r.RGBA32I)),w===r.RGB&&N===r.UNSIGNED_INT_5_9_9_9_REV&&(L=r.RGB9_E5),w===r.RGBA){let M=C?na:Ke.getTransfer(U);N===r.FLOAT&&(L=r.RGBA32F),N===r.HALF_FLOAT&&(L=r.RGBA16F),N===r.UNSIGNED_BYTE&&(L=M===at?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(L=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(L=r.RGB5_A1)}return L!==r.R16F&&L!==r.R32F&&L!==r.RG16F&&L!==r.RG32F&&L!==r.RGBA16F&&L!==r.RGBA32F||e.get("EXT_color_buffer_float"),L}function _(R,w){let N;return R?w===null||w===xi||w===$i?N=r.DEPTH24_STENCIL8:w===Fn?N=r.DEPTH32F_STENCIL8:w===Cr&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===xi||w===$i?N=r.DEPTH_COMPONENT24:w===Fn?N=r.DEPTH_COMPONENT32F:w===Cr&&(N=r.DEPTH_COMPONENT16),N}function A(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){let w=R.target;w.removeEventListener("dispose",E),function(N){let U=n.get(N);if(U.__webglInit===void 0)return;let C=N.source,L=d.get(C);if(L){let M=L[U.__cacheKey];M.usedTimes--,M.usedTimes===0&&D(N),Object.keys(L).length===0&&d.delete(C)}n.remove(N)}(w),w.isVideoTexture&&h.delete(w)}function I(R){let w=R.target;w.removeEventListener("dispose",I),function(N){let U=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(U.__webglFramebuffer[L]))for(let M=0;M<U.__webglFramebuffer[L].length;M++)r.deleteFramebuffer(U.__webglFramebuffer[L][M]);else r.deleteFramebuffer(U.__webglFramebuffer[L]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[L])}else{if(Array.isArray(U.__webglFramebuffer))for(let L=0;L<U.__webglFramebuffer.length;L++)r.deleteFramebuffer(U.__webglFramebuffer[L]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let L=0;L<U.__webglColorRenderbuffer.length;L++)U.__webglColorRenderbuffer[L]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[L]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let C=N.textures;for(let L=0,M=C.length;L<M;L++){let P=n.get(C[L]);P.__webglTexture&&(r.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(C[L])}n.remove(N)}(w)}function D(R){let w=n.get(R);r.deleteTexture(w.__webglTexture);let N=R.source;delete d.get(N)[w.__cacheKey],a.memory.textures--}let O=0;function T(R,w){let N=n.get(R);if(R.isVideoTexture&&function(U){let C=a.render.frame;h.get(U)!==C&&(h.set(U,C),U.update())}(R),R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){let U=R.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void j(N,R,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+w)}let F={[Ar]:r.REPEAT,[Rr]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},V={[vn]:r.NEAREST,[Vu]:r.NEAREST_MIPMAP_NEAREST,[Jr]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[Ca]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},Y={[Gu]:r.NEVER,[$u]:r.ALWAYS,[Wu]:r.LESS,[qu]:r.LEQUAL,[Xu]:r.EQUAL,[Zu]:r.GEQUAL,[ju]:r.GREATER,[Yu]:r.NOTEQUAL};function k(R,w){if(w.type!==Fn||e.has("OES_texture_float_linear")!==!1||w.magFilter!==nn&&w.magFilter!==Ca&&w.magFilter!==Jr&&w.magFilter!==Gi&&w.minFilter!==nn&&w.minFilter!==Ca&&w.minFilter!==Jr&&w.minFilter!==Gi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,F[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,F[w.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,F[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,V[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,V[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Y[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vn||w.minFilter!==Jr&&w.minFilter!==Gi||w.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function q(R,w){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));let U=w.source,C=d.get(U);C===void 0&&(C={},d.set(U,C));let L=function(M){let P=[];return P.push(M.wrapS),P.push(M.wrapT),P.push(M.wrapR||0),P.push(M.magFilter),P.push(M.minFilter),P.push(M.anisotropy),P.push(M.internalFormat),P.push(M.format),P.push(M.type),P.push(M.generateMipmaps),P.push(M.premultiplyAlpha),P.push(M.flipY),P.push(M.unpackAlignment),P.push(M.colorSpace),P.join()}(w);if(L!==R.__cacheKey){C[L]===void 0&&(C[L]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),C[L].usedTimes++;let M=C[R.__cacheKey];M!==void 0&&(C[R.__cacheKey].usedTimes--,M.usedTimes===0&&D(w)),R.__cacheKey=L,R.__webglTexture=C[L].texture}return N}function j(R,w,N){let U=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(U=r.TEXTURE_3D);let C=q(R,w),L=w.source;t.bindTexture(U,R.__webglTexture,r.TEXTURE0+N);let M=n.get(L);if(L.version!==M.__version||C===!0){t.activeTexture(r.TEXTURE0+N);let P=Ke.getPrimaries(Ke.workingColorSpace),B=w.colorSpace===Hi?null:Ke.getPrimaries(w.colorSpace),ee=w.colorSpace===Hi||P===B?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let z=y(w.image,!1,i.maxTextureSize);z=ye(w,z);let J=s.convert(w.format,w.colorSpace),Z=s.convert(w.type),$,me=x(w.internalFormat,J,Z,w.colorSpace,w.isVideoTexture);k(U,w);let he=w.mipmaps,fe=w.isVideoTexture!==!0,Ce=M.__version===void 0||C===!0,qe=L.dataReady,Re=A(w,z);if(w.isDepthTexture)me=_(w.format===Ji,w.type),Ce&&(fe?t.texStorage2D(r.TEXTURE_2D,1,me,z.width,z.height):t.texImage2D(r.TEXTURE_2D,0,me,z.width,z.height,0,J,Z,null));else if(w.isDataTexture)if(he.length>0){fe&&Ce&&t.texStorage2D(r.TEXTURE_2D,Re,me,he[0].width,he[0].height);for(let Te=0,Je=he.length;Te<Je;Te++)$=he[Te],fe?qe&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,$.width,$.height,J,Z,$.data):t.texImage2D(r.TEXTURE_2D,Te,me,$.width,$.height,0,J,Z,$.data);w.generateMipmaps=!1}else fe?(Ce&&t.texStorage2D(r.TEXTURE_2D,Re,me,z.width,z.height),qe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,z.width,z.height,J,Z,z.data)):t.texImage2D(r.TEXTURE_2D,0,me,z.width,z.height,0,J,Z,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,me,he[0].width,he[0].height,z.depth);for(let Te=0,Je=he.length;Te<Je;Te++)if($=he[Te],w.format!==rn)if(J!==null)if(fe){if(qe)if(w.layerUpdates.size>0){let it=Qc($.width,$.height,w.format,w.type);for(let lt of w.layerUpdates){let _e=$.data.subarray(lt*it/$.data.BYTES_PER_ELEMENT,(lt+1)*it/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,lt,$.width,$.height,1,J,_e)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,$.width,$.height,z.depth,J,$.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,me,$.width,$.height,z.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?qe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,$.width,$.height,z.depth,J,Z,$.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Te,me,$.width,$.height,z.depth,0,J,Z,$.data)}else{fe&&Ce&&t.texStorage2D(r.TEXTURE_2D,Re,me,he[0].width,he[0].height);for(let Te=0,Je=he.length;Te<Je;Te++)$=he[Te],w.format!==rn?J!==null?fe?qe&&t.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,$.width,$.height,J,$.data):t.compressedTexImage2D(r.TEXTURE_2D,Te,me,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?qe&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,$.width,$.height,J,Z,$.data):t.texImage2D(r.TEXTURE_2D,Te,me,$.width,$.height,0,J,Z,$.data)}else if(w.isDataArrayTexture)if(fe){if(Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,me,z.width,z.height,z.depth),qe)if(w.layerUpdates.size>0){let Te=Qc(z.width,z.height,w.format,w.type);for(let Je of w.layerUpdates){let it=z.data.subarray(Je*Te/z.data.BYTES_PER_ELEMENT,(Je+1)*Te/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Je,z.width,z.height,1,J,Z,it)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,J,Z,z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,z.width,z.height,z.depth,0,J,Z,z.data);else if(w.isData3DTexture)fe?(Ce&&t.texStorage3D(r.TEXTURE_3D,Re,me,z.width,z.height,z.depth),qe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,J,Z,z.data)):t.texImage3D(r.TEXTURE_3D,0,me,z.width,z.height,z.depth,0,J,Z,z.data);else if(w.isFramebufferTexture){if(Ce)if(fe)t.texStorage2D(r.TEXTURE_2D,Re,me,z.width,z.height);else{let Te=z.width,Je=z.height;for(let it=0;it<Re;it++)t.texImage2D(r.TEXTURE_2D,it,me,Te,Je,0,J,Z,null),Te>>=1,Je>>=1}}else if(he.length>0){if(fe&&Ce){let Te=ce(he[0]);t.texStorage2D(r.TEXTURE_2D,Re,me,Te.width,Te.height)}for(let Te=0,Je=he.length;Te<Je;Te++)$=he[Te],fe?qe&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,J,Z,$):t.texImage2D(r.TEXTURE_2D,Te,me,J,Z,$);w.generateMipmaps=!1}else if(fe){if(Ce){let Te=ce(z);t.texStorage2D(r.TEXTURE_2D,Re,me,Te.width,Te.height)}qe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J,Z,z)}else t.texImage2D(r.TEXTURE_2D,0,me,J,Z,z);m(w)&&f(U),M.__version=L.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function se(R,w,N,U,C,L){let M=s.convert(N.format,N.colorSpace),P=s.convert(N.type),B=x(N.internalFormat,M,P,N.colorSpace),ee=n.get(w),z=n.get(N);if(z.__renderTarget=w,!ee.__hasExternalTextures){let J=Math.max(1,w.width>>L),Z=Math.max(1,w.height>>L);C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?t.texImage3D(C,L,B,J,Z,w.depth,0,M,P,null):t.texImage2D(C,L,B,J,Z,0,M,P,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,C,z.__webglTexture,0,oe(w)):(C===r.TEXTURE_2D||C>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,C,z.__webglTexture,L),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(R,w,N){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){let U=w.depthTexture,C=U&&U.isDepthTexture?U.type:null,L=_(w.stencilBuffer,C),M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=oe(w);ge(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,L,w.width,w.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,P,L,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,L,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,R)}else{let U=w.textures;for(let C=0;C<U.length;C++){let L=U[C],M=s.convert(L.format,L.colorSpace),P=s.convert(L.type),B=x(L.internalFormat,M,P,L.colorSpace),ee=oe(w);N&&ge(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,B,w.width,w.height):ge(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,B,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,B,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(R){let w=n.get(R),N=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),U){let C=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,U.removeEventListener("dispose",C)};U.addEventListener("dispose",C),w.__depthDisposeCallback=C}w.__boundDepthTexture=U}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let L=n.get(C.depthTexture);L.__renderTarget=C,L.__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),T(C.depthTexture,0);let M=L.__webglTexture,P=oe(C);if(C.depthTexture.format===Pr)ge(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0,P):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0);else{if(C.depthTexture.format!==Ji)throw new Error("Unknown depthTexture format");ge(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0,P):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0)}})(w.__webglFramebuffer,R)}else if(N){w.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[U]),w.__webglDepthbuffer[U]===void 0)w.__webglDepthbuffer[U]=r.createRenderbuffer(),Q(w.__webglDepthbuffer[U],R,!1);else{let C=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=w.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,C,r.RENDERBUFFER,L)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Q(w.__webglDepthbuffer,R,!1);else{let U=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,C)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let be=[],te=[];function oe(R){return Math.min(i.maxSamples,R.samples)}function ge(R){let w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ye(R,w){let N=R.colorSpace,U=R.format,C=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==lr&&N!==Hi&&(Ke.getTransfer(N)===at?U===rn&&C===Qn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),w}function ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=O;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),O+=1,R},this.resetTextureUnits=function(){O=0},this.setTexture2D=T,this.setTexture2DArray=function(R,w){let N=n.get(R);R.version>0&&N.__version!==R.version?j(N,R,w):t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+w)},this.setTexture3D=function(R,w){let N=n.get(R);R.version>0&&N.__version!==R.version?j(N,R,w):t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+w)},this.setTextureCube=function(R,w){let N=n.get(R);R.version>0&&N.__version!==R.version?function(U,C,L){if(C.image.length!==6)return;let M=q(U,C),P=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+L);let B=n.get(P);if(P.version!==B.__version||M===!0){t.activeTexture(r.TEXTURE0+L);let ee=Ke.getPrimaries(Ke.workingColorSpace),z=C.colorSpace===Hi?null:Ke.getPrimaries(C.colorSpace),J=C.colorSpace===Hi||ee===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let Z=C.isCompressedTexture||C.image[0].isCompressedTexture,$=C.image[0]&&C.image[0].isDataTexture,me=[];for(let _e=0;_e<6;_e++)me[_e]=Z||$?$?C.image[_e].image:C.image[_e]:y(C.image[_e],!0,i.maxCubemapSize),me[_e]=ye(C,me[_e]);let he=me[0],fe=s.convert(C.format,C.colorSpace),Ce=s.convert(C.type),qe=x(C.internalFormat,fe,Ce,C.colorSpace),Re=C.isVideoTexture!==!0,Te=B.__version===void 0||M===!0,Je=P.dataReady,it,lt=A(C,he);if(k(r.TEXTURE_CUBE_MAP,C),Z){Re&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,qe,he.width,he.height);for(let _e=0;_e<6;_e++){it=me[_e].mipmaps;for(let Ve=0;Ve<it.length;Ve++){let Ze=it[Ve];C.format!==rn?fe!==null?Re?Je&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,Ze.width,Ze.height,fe,Ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,qe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?Je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,Ze.width,Ze.height,fe,Ce,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,qe,Ze.width,Ze.height,0,fe,Ce,Ze.data)}}}else{if(it=C.mipmaps,Re&&Te){it.length>0&&lt++;let _e=ce(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,qe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if($){Re?Je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,me[_e].width,me[_e].height,fe,Ce,me[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,qe,me[_e].width,me[_e].height,0,fe,Ce,me[_e].data);for(let Ve=0;Ve<it.length;Ve++){let Ze=it[Ve].image[_e].image;Re?Je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,Ze.width,Ze.height,fe,Ce,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,qe,Ze.width,Ze.height,0,fe,Ce,Ze.data)}}else{Re?Je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe,Ce,me[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,qe,fe,Ce,me[_e]);for(let Ve=0;Ve<it.length;Ve++){let Ze=it[Ve];Re?Je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,fe,Ce,Ze.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,qe,fe,Ce,Ze.image[_e])}}}m(C)&&f(r.TEXTURE_CUBE_MAP),B.__version=P.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}(N,R,w):t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+w)},this.rebindTextures=function(R,w,N){let U=n.get(R);w!==void 0&&se(U.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&ve(R)},this.setupRenderTarget=function(R){let w=R.texture,N=n.get(R),U=n.get(w);R.addEventListener("dispose",I);let C=R.textures,L=R.isWebGLCubeRenderTarget===!0,M=C.length>1;if(M||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=w.version,a.memory.textures++),L){N.__webglFramebuffer=[];for(let P=0;P<6;P++)if(w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer[P]=[];for(let B=0;B<w.mipmaps.length;B++)N.__webglFramebuffer[P][B]=r.createFramebuffer()}else N.__webglFramebuffer[P]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer=[];for(let P=0;P<w.mipmaps.length;P++)N.__webglFramebuffer[P]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(M)for(let P=0,B=C.length;P<B;P++){let ee=n.get(C[P]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let P=0;P<C.length;P++){let B=C[P];N.__webglColorRenderbuffer[P]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[P]);let ee=s.convert(B.format,B.colorSpace),z=s.convert(B.type),J=x(B.internalFormat,ee,z,B.colorSpace,R.isXRRenderTarget===!0),Z=oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,J,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.RENDERBUFFER,N.__webglColorRenderbuffer[P])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(N.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),k(r.TEXTURE_CUBE_MAP,w);for(let P=0;P<6;P++)if(w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)se(N.__webglFramebuffer[P][B],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,B);else se(N.__webglFramebuffer[P],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);m(w)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(M){for(let P=0,B=C.length;P<B;P++){let ee=C[P],z=n.get(ee);t.bindTexture(r.TEXTURE_2D,z.__webglTexture),k(r.TEXTURE_2D,ee),se(N.__webglFramebuffer,R,ee,r.COLOR_ATTACHMENT0+P,r.TEXTURE_2D,0),m(ee)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let P=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(P=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(P,U.__webglTexture),k(P,w),w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)se(N.__webglFramebuffer[B],R,w,r.COLOR_ATTACHMENT0,P,B);else se(N.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,P,0);m(w)&&f(P),t.unbindTexture()}R.depthBuffer&&ve(R)},this.updateRenderTargetMipmap=function(R){let w=R.textures;for(let N=0,U=w.length;N<U;N++){let C=w[N];if(m(C)){let L=v(R),M=n.get(C).__webglTexture;t.bindTexture(L,M),f(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(ge(R)===!1){let w=R.textures,N=R.width,U=R.height,C=r.COLOR_BUFFER_BIT,L=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,M=n.get(R),P=w.length>1;if(P)for(let B=0;B<w.length;B++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let B=0;B<w.length;B++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(C|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(C|=r.STENCIL_BUFFER_BIT)),P){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,M.__webglColorRenderbuffer[B]);let ee=n.get(w[B]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,N,U,0,0,N,U,C,r.NEAREST),l===!0&&(be.length=0,te.length=0,be.push(r.COLOR_ATTACHMENT0+B),R.depthBuffer&&R.resolveDepthBuffer===!1&&(be.push(L),te.push(L),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),P)for(let B=0;B<w.length;B++){t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,M.__webglColorRenderbuffer[B]);let ee=n.get(w[B]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ge}function Fp(r,e){return{convert:function(t,n=""){let i,s=Ke.getTransfer(n);if(t===Qn)return r.UNSIGNED_BYTE;if(t===kl)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Hl)return r.UNSIGNED_SHORT_5_5_5_1;if(t===yh)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===vh)return r.BYTE;if(t===xh)return r.SHORT;if(t===Cr)return r.UNSIGNED_SHORT;if(t===zl)return r.INT;if(t===xi)return r.UNSIGNED_INT;if(t===Fn)return r.FLOAT;if(t===Ti)return r.HALF_FLOAT;if(t===_h)return r.ALPHA;if(t===Mh)return r.RGB;if(t===rn)return r.RGBA;if(t===Sh)return r.LUMINANCE;if(t===bh)return r.LUMINANCE_ALPHA;if(t===Pr)return r.DEPTH_COMPONENT;if(t===Ji)return r.DEPTH_STENCIL;if(t===Th)return r.RED;if(t===Vl)return r.RED_INTEGER;if(t===wh)return r.RG;if(t===Gl)return r.RG_INTEGER;if(t===Wl)return r.RGBA_INTEGER;if(t===As||t===Rs||t===Cs||t===Ps)if(s===at){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===As)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Rs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Cs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ps)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===As)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Rs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Cs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ps)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===fo||t===go||t===vo||t===xo){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===fo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===go)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===vo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===xo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===yo||t===_o||t===Mo){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===yo||t===_o)return s===at?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Mo)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===So||t===bo||t===To||t===wo||t===Eo||t===Ao||t===Ro||t===Co||t===Po||t===Io||t===Lo||t===Do||t===Uo||t===No){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===So)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===bo)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===To)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===wo)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Eo)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Ao)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ro)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Co)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Po)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Io)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Lo)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Do)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Uo)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===No)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Is||t===Oo||t===Fo){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Is)return s===at?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Oo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Fo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Eh||t===Bo||t===zo||t===ko){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Is)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Bo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===zo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===ko)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===$i?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var nl=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Zt=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bp={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new $t;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rl=class extends ei{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new il,m=t.getContextAttributes(),f=null,v=null,x=[],_=[],A=new ne,E=null,I=new Bt;I.viewport=new ut;let D=new Bt;D.viewport=new ut;let O=[I,D],T=new nl,F=null,V=null;function Y(te){let oe=_.indexOf(te.inputSource);if(oe===-1)return;let ge=x[oe];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||a),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let te=0;te<x.length;te++){let oe=_[te];oe!==null&&(_[te]=null,x[te].disconnect(oe))}F=null,V=null,y.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,v=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}function q(te){for(let oe=0;oe<te.removed.length;oe++){let ge=te.removed[oe],ye=_.indexOf(ge);ye>=0&&(_[ye]=null,x[ye].disconnect(ge))}for(let oe=0;oe<te.added.length;oe++){let ge=te.added[oe],ye=_.indexOf(ge);if(ye===-1){for(let R=0;R<x.length;R++){if(R>=_.length){_.push(ge),ye=R;break}if(_[R]===null){_[R]=ge,ye=R;break}}if(ye===-1)break}let ce=x[ye];ce&&ce.connect(ge)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=x[te];return oe===void 0&&(oe=new br,x[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=x[te];return oe===void 0&&(oe=new br,x[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=x[te];return oe===void 0&&(oe=new br,x[te]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new yn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ge=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Ji:Pr,ge=m.stencil?$i:xi);let ce={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new yn(d.textureWidth,d.textureHeight,{format:rn,type:Qn,depthTexture:new ks(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let j=new b,se=new b;function Q(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let oe=te.near,ge=te.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),T.near=D.near=I.near=oe,T.far=D.far=I.far=ge,F===T.near&&V===T.far||(i.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,V=T.far),I.layers.mask=2|te.layers.mask,D.layers.mask=4|te.layers.mask,T.layers.mask=I.layers.mask|D.layers.mask;let ye=te.parent,ce=T.cameras;Q(T,ye);for(let R=0;R<ce.length;R++)Q(ce[R],ye);ce.length===2?function(R,w,N){j.setFromMatrixPosition(w.matrixWorld),se.setFromMatrixPosition(N.matrixWorld);let U=j.distanceTo(se),C=w.projectionMatrix.elements,L=N.projectionMatrix.elements,M=C[14]/(C[10]-1),P=C[14]/(C[10]+1),B=(C[9]+1)/C[5],ee=(C[9]-1)/C[5],z=(C[8]-1)/C[0],J=(L[8]+1)/L[0],Z=M*z,$=M*J,me=U/(-z+J),he=me*-z;if(w.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(he),R.translateZ(me),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),C[10]===-1)R.projectionMatrix.copy(w.projectionMatrix),R.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let fe=M+me,Ce=P+me,qe=Z-he,Re=$+(U-he),Te=B*P/Ce*fe,Je=ee*P/Ce*fe;R.projectionMatrix.makePerspective(qe,Re,Te,Je,fe,Ce),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}(T,I,D):T.projectionMatrix.copy(I.projectionMatrix),function(R,w,N){N===null?R.matrix.copy(w.matrixWorld):(R.matrix.copy(N.matrixWorld),R.matrix.invert(),R.matrix.multiply(w.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(w.projectionMatrix),R.projectionMatrixInverse.copy(w.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=2*Ir*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}(te,T,ye)},this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(T)};let ve=null,be=new Ph;be.setAnimationLoop(function(te,oe){if(h=oe.getViewerPose(c||a),g=oe,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ye=!1;ge.length!==T.cameras.length&&(T.cameras.length=0,ye=!0);for(let R=0;R<ge.length;R++){let w=ge[R],N=null;if(p!==null)N=p.getViewport(w);else{let C=u.getViewSubImage(d,w);N=C.viewport,R===0&&(e.setRenderTargetTextures(v,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(v))}let U=O[R];U===void 0&&(U=new Bt,U.layers.enable(R),U.viewport=new ut,O[R]=U),U.matrix.fromArray(w.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(w.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(N.x,N.y,N.width,N.height),R===0&&(T.matrix.copy(U.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ye===!0&&T.cameras.push(U)}let ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")){let R=u.getDepthInformation(ge[0]);R&&R.isValid&&R.texture&&y.init(e,R,i.renderState)}}for(let ge=0;ge<x.length;ge++){let ye=_[ge],ce=x[ge];ye!==null&&ce!==void 0&&ce.update(ye,oe,c||a)}ve&&ve(te,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}},pi=new En,zp=new Ie;function kp(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,pi.copy(l),pi.x*=-1,pi.y*=-1,pi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),i.envMapRotation.value.setFromMatrix4(zp.makeRotationFromEuler(pi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Ch(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Hp(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,g){let y=u.value,m=d+"_"+p;if(g[m]===void 0)return g[m]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let f=g[m];if(typeof y=="number"||typeof y=="boolean"){if(f!==y)return g[m]=y,!0}else if(f.equals(y)===!1)return f.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(m){let f=m.uniforms,v=0,x=16;for(let A=0,E=f.length;A<E;A++){let I=Array.isArray(f[A])?f[A]:[f[A]];for(let D=0,O=I.length;D<O;D++){let T=I[D],F=Array.isArray(T.value)?T.value:[T.value];for(let V=0,Y=F.length;V<Y;V++){let k=c(F[V]),q=v%x,j=q%k.boundary,se=q+j;v+=j,se!==0&&x-se<k.storage&&(v+=x-se),T.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,v+=k.storage}}}let _=v%x;_>0&&(v+=x-_),m.__size=v,m.__cache={}}(u),p=function(m){let f=function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=f;let v=r.createBuffer(),x=m.__size,_=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,x,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,v),v}(u),i[u.id]=p,u.addEventListener("dispose",h));let g=d.program;n.updateUBOMapping(u,g);let y=e.render.frame;s[u.id]!==y&&(function(m){let f=i[m.id],v=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let _=0,A=v.length;_<A;_++){let E=Array.isArray(v[_])?v[_]:[v[_]];for(let I=0,D=E.length;I<D;I++){let O=E[I];if(l(O,_,I,x)===!0){let T=O.__offset,F=Array.isArray(O.value)?O.value:[O.value],V=0;for(let Y=0;Y<F.length;Y++){let k=F[Y],q=c(k);typeof k=="number"||typeof k=="boolean"?(O.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,T+V,O.__data)):k.isMatrix3?(O.__data[0]=k.elements[0],O.__data[1]=k.elements[1],O.__data[2]=k.elements[2],O.__data[3]=0,O.__data[4]=k.elements[3],O.__data[5]=k.elements[4],O.__data[6]=k.elements[5],O.__data[7]=0,O.__data[8]=k.elements[6],O.__data[9]=k.elements[7],O.__data[10]=k.elements[8],O.__data[11]=0):(k.toArray(O.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,T,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),s[u.id]=y)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Hs=class{constructor(e={}){let{canvas:t=Ju(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=0,this.toneMappingExposure=1;let _=this,A=!1,E=0,I=0,D=null,O=-1,T=null,F=new ut,V=new ut,Y=null,k=new De(0),q=0,j=t.width,se=t.height,Q=1,ve=null,be=null,te=new ut(0,0,j,se),oe=new ut(0,0,j,se),ge=!1,ye=new tr,ce=!1,R=!1,w=new Ie,N=new Ie,U=new b,C=new ut,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function P(){return D===null?Q:1}let B,ee,z,J,Z,$,me,he,fe,Ce,qe,Re,Te,Je,it,lt,_e,Ve,Ze,Mn,Pn,Ge,Ht,Sn,H=n;function Vn(S,G){return t.getContext(S,G)}try{let S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),H===null){let G="webgl2";if(H=Vn(G,S),H===null)throw Vn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function re(){B=new Sd(H),B.init(),Ge=new Fp(H,B),ee=new xd(H,B,e,Ge),z=new Np(H,B),ee.reverseDepthBuffer&&d&&z.buffers.depth.setReversed(!0),J=new wd(H),Z=new wp,$=new Op(H,B,z,Z,ee,Ge,J),me=new _d(_),he=new Md(_),fe=new pd(H),Ht=new gd(H,fe),Ce=new bd(H,fe,J,Ht),qe=new Ad(H,Ce,fe,J),Ze=new Ed(H,ee,$),lt=new yd(Z),Re=new Tp(_,me,he,B,ee,Ht,lt),Te=new kp(_,Z),Je=new Ap,it=new Lp(B),Ve=new fd(_,me,he,z,qe,p,l),_e=new Dp(_,qe,ee),Sn=new Hp(H,J,ee,z),Mn=new vd(H,B,J),Pn=new Td(H,B,J),J.programs=Re.programs,_.capabilities=ee,_.extensions=B,_.properties=Z,_.renderLists=Je,_.shadowMap=_e,_.state=z,_.info=J}re();let ae=new rl(_,H);function Le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=J.autoReset,G=_e.enabled,W=_e.autoUpdate,K=_e.needsUpdate,X=_e.type;re(),J.autoReset=S,_e.enabled=G,_e.autoUpdate=W,_e.needsUpdate=K,_e.type=X}function Qe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Vt(S){let G=S.target;G.removeEventListener("dispose",Vt),function(W){(function(K){let X=Z.get(K).programs;X!==void 0&&(X.forEach(function(ie){Re.releaseProgram(ie)}),K.isShaderMaterial&&Re.releaseShaderCache(K))})(W),Z.remove(W)}(G)}function We(S,G,W){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,It(S,G,W),S.side=0,S.needsUpdate=!0,It(S,G,W),S.side=2):It(S,G,W)}this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let S=B.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=B.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(j,se,!1))},this.getSize=function(S){return S.set(j,se)},this.setSize=function(S,G,W=!0){ae.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(j=S,se=G,t.width=Math.floor(S*Q),t.height=Math.floor(G*Q),W===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G))},this.getDrawingBufferSize=function(S){return S.set(j*Q,se*Q).floor()},this.setDrawingBufferSize=function(S,G,W){j=S,se=G,Q=W,t.width=Math.floor(S*W),t.height=Math.floor(G*W),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,G,W,K){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,G,W,K),z.viewport(F.copy(te).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,G,W,K){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,G,W,K),z.scissor(V.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){z.setScissorTest(ge=S)},this.setOpaqueSort=function(S){ve=S},this.setTransparentSort=function(S){be=S},this.getClearColor=function(S){return S.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(S=!0,G=!0,W=!0){let K=0;if(S){let X=!1;if(D!==null){let ie=D.texture.format;X=ie===Wl||ie===Gl||ie===Vl}if(X){let ie=D.texture.type,ue=ie===Qn||ie===xi||ie===Cr||ie===$i||ie===kl||ie===Hl,Me=Ve.getClearColor(),Se=Ve.getClearAlpha(),de=Me.r,we=Me.g,xe=Me.b;ue?(g[0]=de,g[1]=we,g[2]=xe,g[3]=Se,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=de,y[1]=we,y[2]=xe,y[3]=Se,H.clearBufferiv(H.COLOR,0,y))}else K|=H.COLOR_BUFFER_BIT}G&&(K|=H.DEPTH_BUFFER_BIT),W&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),Je.dispose(),it.dispose(),Z.dispose(),me.dispose(),he.dispose(),qe.dispose(),Ht.dispose(),Sn.dispose(),Re.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ee),ae.removeEventListener("sessionend",Ye),Pe.stop()},this.renderBufferDirect=function(S,G,W,K,X,ie){G===null&&(G=L);let ue=X.isMesh&&X.matrixWorld.determinant()<0,Me=function(Xe,Pt,xt,ke,Ne){Pt.isScene!==!0&&(Pt=L),$.resetTextureUnits();let un=Pt.fog,ba=ke.isMeshStandardMaterial?Pt.environment:null,pr=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:lr,Ai=(ke.isMeshStandardMaterial?he:me).get(ke.envMap||ba),Ta=ke.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,wa=!!xt.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),Ea=!!xt.morphAttributes.position,Gn=!!xt.morphAttributes.normal,mu=!!xt.morphAttributes.color,ec=0;ke.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(ec=_.toneMapping));let tc=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,fu=tc!==void 0?tc.length:0,je=Z.get(ke),gu=f.state.lights;if(ce===!0&&(R===!0||Xe!==T)){let en=Xe===T&&ke.id===O;lt.setState(ke,Xe,en)}let dn=!1;ke.version===je.__version?je.needsLights&&je.lightsStateVersion!==gu.state.version||je.outputColorSpace!==pr||Ne.isBatchedMesh&&je.batching===!1?dn=!0:Ne.isBatchedMesh||je.batching!==!0?Ne.isBatchedMesh&&je.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&je.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&je.instancing===!1?dn=!0:Ne.isInstancedMesh||je.instancing!==!0?Ne.isSkinnedMesh&&je.skinning===!1?dn=!0:Ne.isSkinnedMesh||je.skinning!==!0?Ne.isInstancedMesh&&je.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&je.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&je.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&je.instancingMorph===!1&&Ne.morphTexture!==null||je.envMap!==Ai||ke.fog===!0&&je.fog!==un?dn=!0:je.numClippingPlanes===void 0||je.numClippingPlanes===lt.numPlanes&&je.numIntersection===lt.numIntersection?(je.vertexAlphas!==Ta||je.vertexTangents!==wa||je.morphTargets!==Ea||je.morphNormals!==Gn||je.morphColors!==mu||je.toneMapping!==ec||je.morphTargetsCount!==fu)&&(dn=!0):dn=!0:dn=!0:dn=!0:dn=!0:(dn=!0,je.__version=ke.version);let ai=je.currentProgram;dn===!0&&(ai=It(ke,Pt,Ne));let nc=!1,mr=!1,Aa=!1,_t=ai.getUniforms(),Wn=je.uniforms;if(z.useProgram(ai.program)&&(nc=!0,mr=!0,Aa=!0),ke.id!==O&&(O=ke.id,mr=!0),nc||T!==Xe){z.buffers.depth.getReversed()?(w.copy(Xe.projectionMatrix),function(oi){let ct=oi.elements;ct[2]=.5*ct[2]+.5*ct[3],ct[6]=.5*ct[6]+.5*ct[7],ct[10]=.5*ct[10]+.5*ct[11],ct[14]=.5*ct[14]+.5*ct[15]}(w),function(oi){let ct=oi.elements;ct[11]===-1?(ct[10]=-ct[10]-1,ct[14]=-ct[14]):(ct[10]=-ct[10],ct[14]=1-ct[14])}(w),_t.setValue(H,"projectionMatrix",w)):_t.setValue(H,"projectionMatrix",Xe.projectionMatrix),_t.setValue(H,"viewMatrix",Xe.matrixWorldInverse);let en=_t.map.cameraPosition;en!==void 0&&en.setValue(H,U.setFromMatrixPosition(Xe.matrixWorld)),ee.logarithmicDepthBuffer&&_t.setValue(H,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&_t.setValue(H,"isOrthographic",Xe.isOrthographicCamera===!0),T!==Xe&&(T=Xe,mr=!0,Aa=!0)}if(Ne.isSkinnedMesh){_t.setOptional(H,Ne,"bindMatrix"),_t.setOptional(H,Ne,"bindMatrixInverse");let en=Ne.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),_t.setValue(H,"boneTexture",en.boneTexture,$))}Ne.isBatchedMesh&&(_t.setOptional(H,Ne,"batchingTexture"),_t.setValue(H,"batchingTexture",Ne._matricesTexture,$),_t.setOptional(H,Ne,"batchingIdTexture"),_t.setValue(H,"batchingIdTexture",Ne._indirectTexture,$),_t.setOptional(H,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&_t.setValue(H,"batchingColorTexture",Ne._colorsTexture,$));let Ra=xt.morphAttributes;Ra.position===void 0&&Ra.normal===void 0&&Ra.color===void 0||Ze.update(Ne,xt,ai),(mr||je.receiveShadow!==Ne.receiveShadow)&&(je.receiveShadow=Ne.receiveShadow,_t.setValue(H,"receiveShadow",Ne.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(Wn.envMap.value=Ai,Wn.flipEnvMap.value=Ai.isCubeTexture&&Ai.isRenderTargetTexture===!1?-1:1),ke.isMeshStandardMaterial&&ke.envMap===null&&Pt.environment!==null&&(Wn.envMapIntensity.value=Pt.environmentIntensity),mr&&(_t.setValue(H,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&(pn=Aa,(bn=Wn).ambientLightColor.needsUpdate=pn,bn.lightProbe.needsUpdate=pn,bn.directionalLights.needsUpdate=pn,bn.directionalLightShadows.needsUpdate=pn,bn.pointLights.needsUpdate=pn,bn.pointLightShadows.needsUpdate=pn,bn.spotLights.needsUpdate=pn,bn.spotLightShadows.needsUpdate=pn,bn.rectAreaLights.needsUpdate=pn,bn.hemisphereLights.needsUpdate=pn),un&&ke.fog===!0&&Te.refreshFogUniforms(Wn,un),Te.refreshMaterialUniforms(Wn,ke,Q,se,f.state.transmissionRenderTarget[Xe.id]),ji.upload(H,hn(je),Wn,$));var bn,pn;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(ji.upload(H,hn(je),Wn,$),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&_t.setValue(H,"center",Ne.center),_t.setValue(H,"modelViewMatrix",Ne.modelViewMatrix),_t.setValue(H,"normalMatrix",Ne.normalMatrix),_t.setValue(H,"modelMatrix",Ne.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){let en=ke.uniformsGroups;for(let oi=0,ct=en.length;oi<ct;oi++){let ic=en[oi];Sn.update(ic,ai),Sn.bind(ic,ai)}}return ai}(S,G,W,K,X);z.setMaterial(K,ue);let Se=W.index,de=1;if(K.wireframe===!0){if(Se=Ce.getWireframeAttribute(W),Se===void 0)return;de=2}let we=W.drawRange,xe=W.attributes.position,Ue=we.start*de,rt=(we.start+we.count)*de;ie!==null&&(Ue=Math.max(Ue,ie.start*de),rt=Math.min(rt,(ie.start+ie.count)*de)),Se!==null?(Ue=Math.max(Ue,0),rt=Math.min(rt,Se.count)):xe!=null&&(Ue=Math.max(Ue,0),rt=Math.min(rt,xe.count));let st=rt-Ue;if(st<0||st===1/0)return;let vt;Ht.setup(X,K,Me,W,Se);let ot=Mn;if(Se!==null&&(vt=fe.get(Se),ot=Pn,ot.setIndex(vt)),X.isMesh)K.wireframe===!0?(z.setLineWidth(K.wireframeLinewidth*P()),ot.setMode(H.LINES)):ot.setMode(H.TRIANGLES);else if(X.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),z.setLineWidth(Xe*P()),X.isLineSegments?ot.setMode(H.LINES):X.isLineLoop?ot.setMode(H.LINE_LOOP):ot.setMode(H.LINE_STRIP)}else X.isPoints?ot.setMode(H.POINTS):X.isSprite&&ot.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Xe=X._multiDrawStarts,Pt=X._multiDrawCounts,xt=X._multiDrawCount,ke=Se?fe.get(Se).bytesPerElement:1,Ne=Z.get(K).currentProgram.getUniforms();for(let un=0;un<xt;un++)Ne.setValue(H,"_gl_DrawID",un),ot.render(Xe[un]/ke,Pt[un])}else if(X.isInstancedMesh)ot.renderInstances(Ue,st,X.count);else if(W.isInstancedBufferGeometry){let Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,Xe);ot.renderInstances(Ue,st,Pt)}else ot.render(Ue,st)},this.compile=function(S,G,W=null){W===null&&(W=S),f=it.get(W),f.init(G),x.push(f),W.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),S!==W&&S.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();let K=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ie=X.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let Me=ie[ue];We(Me,W,X),K.add(Me)}else We(ie,W,X),K.add(ie)}),x.pop(),f=null,K},this.compileAsync=function(S,G,W=null){let K=this.compile(S,G,W);return new Promise(X=>{function ie(){K.forEach(function(ue){Z.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size!==0?setTimeout(ie,10):X(S)}B.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let tt=null;function Ee(){Pe.stop()}function Ye(){Pe.start()}let Pe=new Ph;function yt(S,G,W,K){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ye.intersectsSprite(S)){K&&C.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);let ie=qe.update(S),ue=S.material;ue.visible&&m.push(S,ie,ue,W,C.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ye.intersectsObject(S))){let ie=qe.update(S),ue=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),C.copy(S.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),C.copy(ie.boundingSphere.center)),C.applyMatrix4(S.matrixWorld).applyMatrix4(N)),Array.isArray(ue)){let Me=ie.groups;for(let Se=0,de=Me.length;Se<de;Se++){let we=Me[Se],xe=ue[we.materialIndex];xe&&xe.visible&&m.push(S,ie,xe,W,C.z,we)}}else ue.visible&&m.push(S,ie,ue,W,C.z,null)}}let X=S.children;for(let ie=0,ue=X.length;ie<ue;ie++)yt(X[ie],G,W,K)}function Gt(S,G,W,K){let X=S.opaque,ie=S.transmissive,ue=S.transparent;f.setupLightsView(W),ce===!0&&lt.setGlobalState(_.clippingPlanes,W),K&&z.viewport(F.copy(K)),X.length>0&&Et(X,G,W),ie.length>0&&Et(ie,G,W),ue.length>0&&Et(ue,G,W),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ct(S,G,W,K){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new yn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Ti:Qn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let X=f.state.transmissionRenderTarget[K.id],ie=K.viewport||F;X.setSize(ie.z,ie.w);let ue=_.getRenderTarget();_.setRenderTarget(X),_.getClearColor(k),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),M&&Ve.render(W);let Me=_.toneMapping;_.toneMapping=0;let Se=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),ce===!0&&lt.setGlobalState(_.clippingPlanes,K),Et(S,W,K),$.updateMultisampleRenderTarget(X),$.updateRenderTargetMipmap(X),B.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let we=0,xe=G.length;we<xe;we++){let Ue=G[we],rt=Ue.object,st=Ue.geometry,vt=Ue.material,ot=Ue.group;if(vt.side===2&&rt.layers.test(K.layers)){let Xe=vt.side;vt.side=1,vt.needsUpdate=!0,Qt(rt,W,K,st,vt,ot),vt.side=Xe,vt.needsUpdate=!0,de=!0}}de===!0&&($.updateMultisampleRenderTarget(X),$.updateRenderTargetMipmap(X))}_.setRenderTarget(ue),_.setClearColor(k,q),Se!==void 0&&(K.viewport=Se),_.toneMapping=Me}function Et(S,G,W){let K=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ie=S.length;X<ie;X++){let ue=S[X],Me=ue.object,Se=ue.geometry,de=K===null?ue.material:K,we=ue.group;Me.layers.test(W.layers)&&Qt(Me,G,W,Se,de,we)}}function Qt(S,G,W,K,X,ie){S.onBeforeRender(_,G,W,K,X,ie),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(_,G,W,K,S,ie),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,_.renderBufferDirect(W,G,K,X,S,ie),X.side=0,X.needsUpdate=!0,_.renderBufferDirect(W,G,K,X,S,ie),X.side=2):_.renderBufferDirect(W,G,K,X,S,ie),S.onAfterRender(_,G,W,K,X,ie)}function It(S,G,W){G.isScene!==!0&&(G=L);let K=Z.get(S),X=f.state.lights,ie=f.state.shadowsArray,ue=X.state.version,Me=Re.getParameters(S,X.state,ie,G,W),Se=Re.getProgramCacheKey(Me),de=K.programs;K.environment=S.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(S.isMeshStandardMaterial?he:me).get(S.envMap||K.environment),K.envMapRotation=K.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,de===void 0&&(S.addEventListener("dispose",Vt),de=new Map,K.programs=de);let we=de.get(Se);if(we!==void 0){if(K.currentProgram===we&&K.lightsStateVersion===ue)return Wt(S,Me),we}else Me.uniforms=Re.getUniforms(S),S.onBeforeCompile(Me,_),we=Re.acquireProgram(Me,Se),de.set(Se,we),K.uniforms=Me.uniforms;let xe=K.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(xe.clippingPlanes=lt.uniform),Wt(S,Me),K.needsLights=function(Ue){return Ue.isMeshLambertMaterial||Ue.isMeshToonMaterial||Ue.isMeshPhongMaterial||Ue.isMeshStandardMaterial||Ue.isShadowMaterial||Ue.isShaderMaterial&&Ue.lights===!0}(S),K.lightsStateVersion=ue,K.needsLights&&(xe.ambientLightColor.value=X.state.ambient,xe.lightProbe.value=X.state.probe,xe.directionalLights.value=X.state.directional,xe.directionalLightShadows.value=X.state.directionalShadow,xe.spotLights.value=X.state.spot,xe.spotLightShadows.value=X.state.spotShadow,xe.rectAreaLights.value=X.state.rectArea,xe.ltc_1.value=X.state.rectAreaLTC1,xe.ltc_2.value=X.state.rectAreaLTC2,xe.pointLights.value=X.state.point,xe.pointLightShadows.value=X.state.pointShadow,xe.hemisphereLights.value=X.state.hemi,xe.directionalShadowMap.value=X.state.directionalShadowMap,xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,xe.spotShadowMap.value=X.state.spotShadowMap,xe.spotLightMatrix.value=X.state.spotLightMatrix,xe.spotLightMap.value=X.state.spotLightMap,xe.pointShadowMap.value=X.state.pointShadowMap,xe.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=we,K.uniformsList=null,we}function hn(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=ji.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Wt(S,G){let W=Z.get(S);W.outputColorSpace=G.outputColorSpace,W.batching=G.batching,W.batchingColor=G.batchingColor,W.instancing=G.instancing,W.instancingColor=G.instancingColor,W.instancingMorph=G.instancingMorph,W.skinning=G.skinning,W.morphTargets=G.morphTargets,W.morphNormals=G.morphNormals,W.morphColors=G.morphColors,W.morphTargetsCount=G.morphTargetsCount,W.numClippingPlanes=G.numClippingPlanes,W.numIntersection=G.numClipIntersection,W.vertexAlphas=G.vertexAlphas,W.vertexTangents=G.vertexTangents,W.toneMapping=G.toneMapping}Pe.setAnimationLoop(function(S){tt&&tt(S)}),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(S){tt=S,ae.setAnimationLoop(S),S===null?Pe.stop():Pe.start()},ae.addEventListener("sessionstart",Ee),ae.addEventListener("sessionend",Ye),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,G,D),f=it.get(S,x.length),f.init(G),x.push(f),N.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ye.setFromProjectionMatrix(N),R=this.localClippingEnabled,ce=lt.init(this.clippingPlanes,R),m=Je.get(S,v.length),m.init(),v.push(m),ae.enabled===!0&&ae.isPresenting===!0){let ie=_.xr.getDepthSensingMesh();ie!==null&&yt(ie,G,-1/0,_.sortObjects)}yt(S,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ve,be),M=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,M&&Ve.addToRenderList(m,S),this.info.render.frame++,ce===!0&&lt.beginShadows();let W=f.state.shadowsArray;_e.render(W,S,G),ce===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,X=m.transmissive;if(f.setupLights(),G.isArrayCamera){let ie=G.cameras;if(X.length>0)for(let ue=0,Me=ie.length;ue<Me;ue++)Ct(K,X,S,ie[ue]);M&&Ve.render(S);for(let ue=0,Me=ie.length;ue<Me;ue++){let Se=ie[ue];Gt(m,S,Se,Se.viewport)}}else X.length>0&&Ct(K,X,S,G),M&&Ve.render(S),Gt(m,S,G);D!==null&&($.updateMultisampleRenderTarget(D),$.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(_,S,G),Ht.resetDefaultState(),O=-1,T=null,x.pop(),x.length>0?(f=x[x.length-1],ce===!0&&lt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,G,W){Z.get(S.texture).__webglTexture=G,Z.get(S.depthTexture).__webglTexture=W;let K=Z.get(S);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=W===void 0,K.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,G){let W=Z.get(S);W.__webglFramebuffer=G,W.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,W=0){D=S,E=G,I=W;let K=!0,X=null,ie=!1,ue=!1;if(S){let Me=Z.get(S);if(Me.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(H.FRAMEBUFFER,null),K=!1;else if(Me.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(Me.__hasExternalTextures)$.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let we=S.depthTexture;if(Me.__boundDepthTexture!==we){if(we!==null&&Z.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}let Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ue=!0);let de=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Array.isArray(de[G])?de[G][W]:de[G],ie=!0):X=S.samples>0&&$.useMultisampledRTT(S)===!1?Z.get(S).__webglMultisampledFramebuffer:Array.isArray(de)?de[W]:de,F.copy(S.viewport),V.copy(S.scissor),Y=S.scissorTest}else F.copy(te).multiplyScalar(Q).floor(),V.copy(oe).multiplyScalar(Q).floor(),Y=ge;if(z.bindFramebuffer(H.FRAMEBUFFER,X)&&K&&z.drawBuffers(S,X),z.viewport(F),z.scissor(V),z.setScissorTest(Y),ie){let Me=Z.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Me.__webglTexture,W)}else if(ue){let Me=Z.get(S.texture),Se=G||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Me.__webglTexture,W||0,Se)}O=-1},this.readRenderTargetPixels=function(S,G,W,K,X,ie,ue){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){z.bindFramebuffer(H.FRAMEBUFFER,Me);try{let Se=S.texture,de=Se.format,we=Se.type;if(!ee.textureFormatReadable(de))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(we))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=S.width-K&&W>=0&&W<=S.height-X&&H.readPixels(G,W,K,X,Ge.convert(de),Ge.convert(we),ie)}finally{let Se=D!==null?Z.get(D).__webglFramebuffer:null;z.bindFramebuffer(H.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,G,W,K,X,ie,ue){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){let Se=S.texture,de=Se.format,we=Se.type;if(!ee.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=S.width-K&&W>=0&&W<=S.height-X){z.bindFramebuffer(H.FRAMEBUFFER,Me);let xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.bufferData(H.PIXEL_PACK_BUFFER,ie.byteLength,H.STREAM_READ),H.readPixels(G,W,K,X,Ge.convert(de),Ge.convert(we),0);let Ue=D!==null?Z.get(D).__webglFramebuffer:null;z.bindFramebuffer(H.FRAMEBUFFER,Ue);let rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await function(st,vt,ot){return new Promise(function(Xe,Pt){setTimeout(function xt(){switch(st.clientWaitSync(vt,st.SYNC_FLUSH_COMMANDS_BIT,0)){case st.WAIT_FAILED:Pt();break;case st.TIMEOUT_EXPIRED:setTimeout(xt,ot);break;default:Xe()}},ot)})}(H,rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ie),H.deleteBuffer(xe),H.deleteSync(rt),ie}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,G=null,W=0){S.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1]);let K=Math.pow(2,-W),X=Math.floor(S.image.width*K),ie=Math.floor(S.image.height*K),ue=G!==null?G.x:0,Me=G!==null?G.y:0;$.setTexture2D(S,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,ue,Me,X,ie),z.unbindTexture()},this.copyTextureToTexture=function(S,G,W=null,K=null,X=0){let ie,ue,Me,Se,de,we,xe,Ue,rt;S.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,S=arguments[1],G=arguments[2],X=arguments[3]||0,W=null);let st=S.isCompressedTexture?S.mipmaps[X]:S.image;W!==null?(ie=W.max.x-W.min.x,ue=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Se=W.min.x,de=W.min.y,we=W.isBox3?W.min.z:0):(ie=st.width,ue=st.height,Me=st.depth||1,Se=0,de=0,we=0),K!==null?(xe=K.x,Ue=K.y,rt=K.z):(xe=0,Ue=0,rt=0);let vt=Ge.convert(G.format),ot=Ge.convert(G.type),Xe;G.isData3DTexture?($.setTexture3D(G,0),Xe=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?($.setTexture2DArray(G,0),Xe=H.TEXTURE_2D_ARRAY):($.setTexture2D(G,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let Pt=H.getParameter(H.UNPACK_ROW_LENGTH),xt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ke=H.getParameter(H.UNPACK_SKIP_PIXELS),Ne=H.getParameter(H.UNPACK_SKIP_ROWS),un=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,st.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,st.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Se),H.pixelStorei(H.UNPACK_SKIP_ROWS,de),H.pixelStorei(H.UNPACK_SKIP_IMAGES,we);let ba=S.isDataArrayTexture||S.isData3DTexture,pr=G.isDataArrayTexture||G.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Ai=Z.get(S),Ta=Z.get(G),wa=Z.get(Ai.__renderTarget),Ea=Z.get(Ta.__renderTarget);z.bindFramebuffer(H.READ_FRAMEBUFFER,wa.__webglFramebuffer),z.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Gn=0;Gn<Me;Gn++)ba&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,X,we+Gn),S.isDepthTexture?(pr&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,X,rt+Gn),H.blitFramebuffer(Se,de,ie,ue,xe,Ue,ie,ue,H.DEPTH_BUFFER_BIT,H.NEAREST)):pr?H.copyTexSubImage3D(Xe,X,xe,Ue,rt+Gn,Se,de,ie,ue):H.copyTexSubImage2D(Xe,X,xe,Ue,rt+Gn,Se,de,ie,ue);z.bindFramebuffer(H.READ_FRAMEBUFFER,null),z.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pr?S.isDataTexture||S.isData3DTexture?H.texSubImage3D(Xe,X,xe,Ue,rt,ie,ue,Me,vt,ot,st.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,X,xe,Ue,rt,ie,ue,Me,vt,st.data):H.texSubImage3D(Xe,X,xe,Ue,rt,ie,ue,Me,vt,ot,st):S.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,xe,Ue,ie,ue,vt,ot,st.data):S.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,xe,Ue,st.width,st.height,vt,st.data):H.texSubImage2D(H.TEXTURE_2D,X,xe,Ue,ie,ue,vt,ot,st);H.pixelStorei(H.UNPACK_ROW_LENGTH,Pt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,un),X===0&&G.generateMipmaps&&H.generateMipmap(Xe),z.unbindTexture()},this.copyTextureToTexture3D=function(S,G,W=null,K=null,X=0){return S.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,K=arguments[1]||null,S=arguments[2],G=arguments[3],X=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,G,W,K,X)},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),z.unbindTexture()},this.resetState=function(){E=0,I=0,D=null,z.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var on=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xm=new b;var qm=new b,jm=new b,Ym=new b,Zm=new ne,$m=new ne,Jm=new Ie,Km=new b,Qm=new b,ef=new b,tf=new ne,nf=new ne,rf=new ne;var sf=new b,af=new b;var of=new b,lf=new ut,cf=new ut,hf=new b,uf=new Ie,df=new b,pf=new an,mf=new Ie,ff=new yi;var gf=new Ie,vf=new Ie;var xf=new Ie,yf=new Ie;var _f=new wn,Mf=new Ie,Sf=new He,bf=new an;var sl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Tf=new Ie,wf=new De(1,1,1),Ef=new tr,Af=new wn,Rf=new an,Cf=new b,Pf=new b,If=new b,Lf=new sl,Df=new He;var Uf=new b,Nf=new b,Of=new Ie,Ff=new yi,Bf=new an,zf=new b,kf=new b;var Hf=new b,Vf=new b;var al=class extends ti{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eh=new Ie,ol=new yi,xs=new an,ys=new b,Vs=class extends pt{constructor(e=new mt,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;eh.copy(i).invert(),ol.copy(e.ray).applyMatrix4(eh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);ys.fromBufferAttribute(h,p),th(ys,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ys.fromBufferAttribute(h,u),th(ys,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function th(r,e,t,n,i,s,a){let o=ol.distanceSqToPoint(r);if(o<t){let l=new b;ol.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Mi=class extends $t{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ne:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,i=[],s=[],a=[],o=new b,l=new Ie;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Rt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Rt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ur=class extends ln{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends Ur{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ql(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var _s=new b,io=new ql,ro=new ql,so=new ql,cl=class extends ln{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(_s.subVectors(i[0],i[1]).add(i[0]),o=_s);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(_s.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=_s),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),io.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,g,y,m),ro.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,g,y,m),so.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,g,y,m)}else this.curveType==="catmullrom"&&(io.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),ro.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),so.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(io.calc(h),ro.calc(h),so.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Tr(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function wr(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}var Gs=class extends ln{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,s.x,a.x,o.x),wr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hl=class extends ln{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,s.x,a.x,o.x),wr(e,i.y,s.y,a.y,o.y),wr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ws=class extends ln{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends ln{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends ln{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Tr(e,i.x,s.x,a.x),Tr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qs=class extends ln{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Tr(e,i.x,s.x,a.x),Tr(e,i.y,s.y,a.y),Tr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},js=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(nh(o,l.x,c.x,h.x,u.x),nh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ne().fromArray(i))}return this}},Ys=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:cl,CubicBezierCurve:Gs,CubicBezierCurve3:hl,EllipseCurve:Ur,LineCurve:Ws,LineCurve3:ul,QuadraticBezierCurve:Xs,QuadraticBezierCurve3:qs,SplineCurve:js}),dl=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ys[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ys[i.type]().fromJSON(i))}return this}},Nr=class extends dl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ws(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Xs(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Gs(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new js(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Ur(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ir=class r extends mt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Rt(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new b,d=new ne,p=new b,g=new b,y=new b,m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=1*f,p.y=-m,p.z=0*f,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=1*f,p.y=-m,p.z=0*f,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let v=0;v<=t;v++){let x=n+v*h*i,_=Math.sin(x),A=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*A,a.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),o.push(d.x,d.y);let I=l[3*E+0]*_,D=l[3*E+1],O=l[3*E+0]*A;c.push(I,D,O)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let _=x+v*e.length,A=_,E=_+e.length,I=_+e.length+1,D=_+1;s.push(A,E,D),s.push(I,D,E)}this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Or=class r extends ir{constructor(e=1,t=1,n=4,i=8){let s=new Nr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},pl=class r extends mt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new b,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class r extends mt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;function v(x){let _=g,A=new ne,E=new b,I=0,D=x===!0?e:t,O=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*O,0),d.push(0,O,0),p.push(.5,.5),g++;let T=g;for(let F=0;F<=i;F++){let V=F/i*l+o,Y=Math.cos(V),k=Math.sin(V);E.x=D*k,E.y=m*O,E.z=D*Y,u.push(E.x,E.y,E.z),d.push(0,O,0),A.x=.5*Y+.5,A.y=.5*k*O+.5,p.push(A.x,A.y),g++}for(let F=0;F<i;F++){let V=_+F,Y=T+F;x===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),I+=3}c.addGroup(f,I,x===!0?1:2),f+=I}(function(){let x=new b,_=new b,A=0,E=(t-e)/n;for(let I=0;I<=s;I++){let D=[],O=I/s,T=O*(t-e)+e;for(let F=0;F<=i;F++){let V=F/i,Y=V*l+o,k=Math.sin(Y),q=Math.cos(Y);_.x=T*k,_.y=-O*n+m,_.z=T*q,u.push(_.x,_.y,_.z),x.set(k,E,q).normalize(),d.push(x.x,x.y,x.z),p.push(V,1-O),D.push(g++)}y.push(D)}for(let I=0;I<i;I++)for(let D=0;D<s;D++){let O=y[D][I],T=y[D+1][I],F=y[D+1][I+1],V=y[D][I+1];(e>0||D!==0)&&(h.push(O,T,V),A+=3),(t>0||D!==s-1)&&(h.push(T,F,V),A+=3)}c.addGroup(f,A,0),f+=A})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fr=class r extends Jt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Si=class r extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,g,y){let m=y+1,f=[];for(let v=0;v<=m;v++){f[v]=[];let x=d.clone().lerp(g,v/m),_=p.clone().lerp(g,v/m),A=m-v;for(let E=0;E<=A;E++)f[v][E]=E===0&&v===m?x:x.clone().lerp(_,E/A)}for(let v=0;v<m;v++)for(let x=0;x<2*(m-v)-1;x++){let _=Math.floor(x/2);x%2==0?(l(f[v][_+1]),l(f[v+1][_]),l(f[v][_])):(l(f[v][_+1]),l(f[v+1][_+1]),l(f[v+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let g=3*d;p.x=e[g+0],p.y=e[g+1],p.z=e[g+2]}function h(d,p,g,y){y<0&&d.x===1&&(a[p]=d.x-1),g.x===0&&g.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new b,g=new b,y=new b;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],g),c(t[m+2],y),o(p,g,y,d)})(i),function(d){let p=new b;for(let g=0;g<s.length;g+=3)p.x=s[g+0],p.y=s[g+1],p.z=s[g+2],p.normalize().multiplyScalar(d),s[g+0]=p.x,s[g+1]=p.y,s[g+2]=p.z}(n),function(){let d=new b;for(let g=0;g<s.length;g+=3){d.x=s[g+0],d.y=s[g+1],d.z=s[g+2];let y=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-m)}var p;(function(){let g=new b,y=new b,m=new b,f=new b,v=new ne,x=new ne,_=new ne;for(let A=0,E=0;A<s.length;A+=9,E+=6){g.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),v.set(a[E+0],a[E+1]),x.set(a[E+2],a[E+3]),_.set(a[E+4],a[E+5]),f.copy(g).add(y).add(m).divideScalar(3);let I=u(f);h(v,E+0,g,I),h(x,E+2,y,I),h(_,E+4,m,I)}})(),function(){for(let g=0;g<a.length;g+=6){let y=a[g+0],m=a[g+2],f=a[g+4],v=Math.max(y,m,f),x=Math.min(y,m,f);v>.9&&x<.1&&(y<.2&&(a[g+0]+=1),m<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}}()}(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},ml=class r extends Si{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ms=new b,Ss=new b,ao=new b,bs=new Jn,fl=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Xi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:f}=bs;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),bs.getNormal(ao),u[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,_=u[v],A=u[x],E=bs[h[v]],I=bs[h[x]],D=`${_}_${A}`,O=`${A}_${_}`;O in d&&d[O]?(ao.dot(d[O].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(I.x,I.y,I.z)),d[O]=null):D in d||(d[D]={index0:c[v],index1:c[x],normal:ao.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:m}=d[g];Ms.fromBufferAttribute(o,y),Ss.fromBufferAttribute(o,m),p.push(Ms.x,Ms.y,Ms.z),p.push(Ss.x,Ss.y,Ss.z)}this.setAttribute("position",new Oe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Zs=class extends Nr{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Nr().fromJSON(i))}return this}},Vp=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=ih(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(g,y,m,f){let v=[],x,_,A,E,I;for(x=0,_=y.length;x<_;x++)A=y[x]*f,E=x<_-1?y[x+1]*f:g.length,I=ih(g,A,E,f,!1),I===I.next&&(I.steiner=!0),v.push($p(I));for(v.sort(jp),x=0;x<v.length;x++)m=Yp(v[x],m);return m}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Br(s,a,t,o,l,p,0),a};function ih(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=rh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=rh(s,r[s],r[s+1],a);return a&&ra(a,a.next)&&(kr(a),a=a.next),a}function bi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ra(n,n.next)&&dt(n.prev,n,n.next)!==0)n=n.next;else{if(kr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Br(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let g=h;do g.z===0&&(g.z=gl(g.x,g.y,u,d,p)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==h);g.prevZ.nextZ=null,g.prevZ=null,function(y){let m,f,v,x,_,A,E,I,D=1;do{for(f=y,y=null,_=null,A=0;f;){for(A++,v=f,E=0,m=0;m<D&&(E++,v=v.nextZ,v);m++);for(I=D;E>0||I>0&&v;)E!==0&&(I===0||!v||f.z<=v.z)?(x=f,f=f.nextZ,E--):(x=v,v=v.nextZ,I--),_?_.nextZ=x:y=x,x.prevZ=_,_=x;f=v}_.nextZ=null,D*=2}while(A>1)}(g)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Wp(r,n,i,s):Gp(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),kr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Br(r=Xp(bi(r),e,t),e,t,n,i,s,2):a===2&&qp(r,e,t,n,i,s):Br(bi(r),e,t,n,i,s,1);break}}function Gp(r){let e=r.prev,t=r,n=r.next;if(dt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Wi(i,o,s,l,a,c,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wp(r,e,t,n){let i=r.prev,s=r,a=r.next;if(dt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=gl(p,g,e,t,n),v=gl(y,m,e,t,n),x=r.prevZ,_=r.nextZ;for(;x&&x.z>=f&&_&&_.z<=v;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Wi(o,h,l,u,c,d,x.x,x.y)&&dt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Wi(o,h,l,u,c,d,_.x,_.y)&&dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Wi(o,h,l,u,c,d,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Wi(o,h,l,u,c,d,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xp(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ra(i,s)&&Nh(i,n,n.next,s)&&zr(i,s)&&zr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),kr(n),kr(n.next),n=r=s),n=n.next}while(n!==r);return bi(n)}function qp(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jp(a,o)){let l=Oh(a,o);return a=bi(a,a.next),l=bi(l,l.next),Br(a,e,t,n,i,s,0),void Br(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function jp(r,e){return r.x-e.x}function Yp(r,e){let t=function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,g,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Wi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(g=Math.abs(h-o.y)/(c-o.x),zr(o,i)&&(g<y||g===y&&(o.x>a.x||o.x===a.x&&Zp(a,o)))&&(a=o,y=g)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;let n=Oh(t,r);return bi(n,n.next),bi(t,t.next)}function Zp(r,e){return dt(r.prev,r,e.prev)<0&&dt(e.next,r,r.next)<0}function gl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function $p(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Wi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Jp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Nh(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(zr(r,e)&&zr(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(dt(r.prev,r,e.prev)||dt(r,e.prev,e))||ra(r,e)&&dt(r.prev,r,r.next)>0&&dt(e.prev,e,e.next)>0)}function dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ra(r,e){return r.x===e.x&&r.y===e.y}function Nh(r,e,t,n){let i=ws(dt(r,e,t)),s=ws(dt(r,e,n)),a=ws(dt(t,n,r)),o=ws(dt(t,n,e));return i!==s&&a!==o||!(i!==0||!Ts(r,t,e))||!(s!==0||!Ts(r,n,e))||!(a!==0||!Ts(t,r,n))||!(o!==0||!Ts(t,e,n))}function Ts(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ws(r){return r>0?1:r<0?-1:0}function zr(r,e){return dt(r.prev,r,r.next)<0?dt(r,e,r.next)>=0&&dt(r,r.prev,e)>=0:dt(r,e,r.prev)<0||dt(r,r.next,e)<0}function Oh(r,e){let t=new vl(r.i,r.x,r.y),n=new vl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function rh(r,e,t,n){let i=new vl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function kr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function vl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Kn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];sh(e),ah(n,e);let a=e.length;t.forEach(sh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,ah(n,t[l]);let o=Vp(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function sh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ah(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var xl=class r extends mt{constructor(e=new Zs([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Kp,x,_,A,E,I,D=!1;f&&(x=f.getSpacedPoints(h),D=!0,d=!1,_=f.computeFrenetFrames(h,!1),A=new b,E=new b,I=new b),d||(m=0,p=0,g=0,y=0);let O=o.extractPoints(c),T=O.shape,F=O.holes;if(!Kn.isClockWise(T)){T=T.reverse();for(let U=0,C=F.length;U<C;U++){let L=F[U];Kn.isClockWise(L)&&(F[U]=L.reverse())}}let V=Kn.triangulateShape(T,F),Y=T;for(let U=0,C=F.length;U<C;U++){let L=F[U];T=T.concat(L)}function k(U,C,L){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(C,L)}let q=T.length,j=V.length;function se(U,C,L){let M,P,B,ee=U.x-C.x,z=U.y-C.y,J=L.x-U.x,Z=L.y-U.y,$=ee*ee+z*z,me=ee*Z-z*J;if(Math.abs(me)>Number.EPSILON){let he=Math.sqrt($),fe=Math.sqrt(J*J+Z*Z),Ce=C.x-z/he,qe=C.y+ee/he,Re=((L.x-Z/fe-Ce)*Z-(L.y+J/fe-qe)*J)/(ee*Z-z*J);M=Ce+ee*Re-U.x,P=qe+z*Re-U.y;let Te=M*M+P*P;if(Te<=2)return new ne(M,P);B=Math.sqrt(Te/2)}else{let he=!1;ee>Number.EPSILON?J>Number.EPSILON&&(he=!0):ee<-Number.EPSILON?J<-Number.EPSILON&&(he=!0):Math.sign(z)===Math.sign(Z)&&(he=!0),he?(M=-z,P=ee,B=Math.sqrt($)):(M=ee,P=z,B=Math.sqrt($/2))}return new ne(M/B,P/B)}let Q=[];for(let U=0,C=Y.length,L=C-1,M=U+1;U<C;U++,L++,M++)L===C&&(L=0),M===C&&(M=0),Q[U]=se(Y[U],Y[L],Y[M]);let ve=[],be,te=Q.concat();for(let U=0,C=F.length;U<C;U++){let L=F[U];be=[];for(let M=0,P=L.length,B=P-1,ee=M+1;M<P;M++,B++,ee++)B===P&&(B=0),ee===P&&(ee=0),be[M]=se(L[M],L[B],L[ee]);ve.push(be),te=te.concat(be)}for(let U=0;U<m;U++){let C=U/m,L=p*Math.cos(C*Math.PI/2),M=g*Math.sin(C*Math.PI/2)+y;for(let P=0,B=Y.length;P<B;P++){let ee=k(Y[P],Q[P],M);ye(ee.x,ee.y,-L)}for(let P=0,B=F.length;P<B;P++){let ee=F[P];be=ve[P];for(let z=0,J=ee.length;z<J;z++){let Z=k(ee[z],be[z],M);ye(Z.x,Z.y,-L)}}}let oe=g+y;for(let U=0;U<q;U++){let C=d?k(T[U],te[U],oe):T[U];D?(E.copy(_.normals[0]).multiplyScalar(C.x),A.copy(_.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(E).add(A),ye(I.x,I.y,I.z)):ye(C.x,C.y,0)}for(let U=1;U<=h;U++)for(let C=0;C<q;C++){let L=d?k(T[C],te[C],oe):T[C];D?(E.copy(_.normals[U]).multiplyScalar(L.x),A.copy(_.binormals[U]).multiplyScalar(L.y),I.copy(x[U]).add(E).add(A),ye(I.x,I.y,I.z)):ye(L.x,L.y,u/h*U)}for(let U=m-1;U>=0;U--){let C=U/m,L=p*Math.cos(C*Math.PI/2),M=g*Math.sin(C*Math.PI/2)+y;for(let P=0,B=Y.length;P<B;P++){let ee=k(Y[P],Q[P],M);ye(ee.x,ee.y,u+L)}for(let P=0,B=F.length;P<B;P++){let ee=F[P];be=ve[P];for(let z=0,J=ee.length;z<J;z++){let Z=k(ee[z],be[z],M);D?ye(Z.x,Z.y+x[h-1].y,x[h-1].x+L):ye(Z.x,Z.y,u+L)}}}function ge(U,C){let L=U.length;for(;--L>=0;){let M=L,P=L-1;P<0&&(P=U.length-1);for(let B=0,ee=h+2*m;B<ee;B++){let z=q*B,J=q*(B+1);R(C+M+z,C+P+z,C+P+J,C+M+J)}}}function ye(U,C,L){l.push(U),l.push(C),l.push(L)}function ce(U,C,L){w(U),w(C),w(L);let M=i.length/3,P=v.generateTopUV(n,i,M-3,M-2,M-1);N(P[0]),N(P[1]),N(P[2])}function R(U,C,L,M){w(U),w(C),w(M),w(C),w(L),w(M);let P=i.length/3,B=v.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);N(B[0]),N(B[1]),N(B[3]),N(B[1]),N(B[2]),N(B[3])}function w(U){i.push(l[3*U+0]),i.push(l[3*U+1]),i.push(l[3*U+2])}function N(U){s.push(U.x),s.push(U.y)}(function(){let U=i.length/3;if(d){let C=0,L=q*C;for(let M=0;M<j;M++){let P=V[M];ce(P[2]+L,P[1]+L,P[0]+L)}C=h+2*m,L=q*C;for(let M=0;M<j;M++){let P=V[M];ce(P[0]+L,P[1]+L,P[2]+L)}}else{for(let C=0;C<j;C++){let L=V[C];ce(L[2],L[1],L[0])}for(let C=0;C<j;C++){let L=V[C];ce(L[0]+q*h,L[1]+q*h,L[2]+q*h)}}n.addGroup(U,i.length/3-U,0)})(),function(){let U=i.length/3,C=0;ge(Y,C),C+=Y.length;for(let L=0,M=F.length;L<M;L++){let P=F[L];ge(P,C),C+=P.length}n.addGroup(U,i.length/3-U,1)}()}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ys[i.type]().fromJSON(i)),new r(n,e.options)}},Kp={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],g=e[3*i+2],y=e[3*s],m=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-g),new ne(y,1-f)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-g),new ne(m,1-f)]}},yl=class r extends Si{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},_l=class r extends Si{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Hr=class r extends mt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new b,g=new ne;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){let f=s+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<i;y++){let m=y*(n+1);for(let f=0;f<n;f++){let v=f+m,x=v,_=v+n+1,A=v+n+2,E=v+1;o.push(x,_,E),o.push(_,A,E)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ml=class r extends mt{constructor(e=new Zs([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,g=d.holes;Kn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];Kn.isClockWise(v)===!0&&(g[m]=v.reverse())}let y=Kn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,f=y.length;m<f;m++){let v=y[m],x=v[0]+u,_=v[1]+u,A=v[2]+u;n.push(x,_,A),l+=3}}this.setIndex(n),this.setAttribute("position",new Oe(i,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},ii=class r extends mt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new b,d=new b,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let v=[],x=f/n,_=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(i+E*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+E*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+_,1-x),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){let x=h[f][v+1],_=h[f][v],A=h[f+1][v],E=h[f+1][v+1];(f!==0||a>0)&&p.push(x,_,E),(f!==n-1||l<Math.PI)&&p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Sl=class r extends Si{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},rr=class r extends mt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new b,u=new b,d=new b;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let y=g/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let y=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,v=(i+1)*p+g;a.push(y,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},bl=class r extends mt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new b,d=new b,p=new b,g=new b,y=new b,m=new b,f=new b;for(let x=0;x<=n;++x){let _=x/n*s*Math.PI*2;v(_,s,a,e,p),v(_+.01,s,a,e,g),m.subVectors(g,p),f.addVectors(g,p),y.crossVectors(m,f),f.crossVectors(y,m),y.normalize(),f.normalize();for(let A=0;A<=i;++A){let E=A/i*Math.PI*2,I=-t*Math.cos(E),D=t*Math.sin(E);u.x=p.x+(I*f.x+D*y.x),u.y=p.y+(I*f.y+D*y.y),u.z=p.z+(I*f.z+D*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(A/i)}}for(let x=1;x<=n;x++)for(let _=1;_<=i;_++){let A=(i+1)*(x-1)+(_-1),E=(i+1)*x+(_-1),I=(i+1)*x+_,D=(i+1)*(x-1)+_;o.push(A,E,D),o.push(E,I,D)}function v(x,_,A,E,I){let D=Math.cos(x),O=Math.sin(x),T=A/_*x,F=Math.cos(T);I.x=E*(2+F)*.5*D,I.y=E*(2+F)*O*.5,I.z=E*Math.sin(T)*.5}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Tl=class r extends mt{constructor(e=new qs(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new ne,h=new b,u=[],d=[],p=[],g=[];function y(m){h=e.getPointAt(m/t,h);let f=a.normals[m],v=a.binormals[m];for(let x=0;x<=i;x++){let _=x/i*Math.PI*2,A=Math.sin(_),E=-Math.cos(_);l.x=E*f.x+A*v.x,l.y=E*f.y+A*v.y,l.z=E*f.z+A*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)y(m);y(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let f=0;f<=i;f++)c.x=m/t,c.y=f/i,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let f=1;f<=i;f++){let v=(i+1)*(m-1)+(f-1),x=(i+1)*m+(f-1),_=(i+1)*m+f,A=(i+1)*(m-1)+f;g.push(v,x,A),g.push(x,_,A)}}()})(),this.setIndex(g),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ys[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wl=class extends mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,g=d+u.count;p<g;p+=3)for(let y=0;y<3;y++){let m=o.getX(p+y),f=o.getX(p+(y+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,f),oh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),oh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function oh(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Gf=Object.freeze({__proto__:null,BoxGeometry:An,CapsuleGeometry:Or,CircleGeometry:pl,ConeGeometry:Fr,CylinderGeometry:Jt,DodecahedronGeometry:ml,EdgesGeometry:fl,ExtrudeGeometry:xl,IcosahedronGeometry:yl,LatheGeometry:ir,OctahedronGeometry:_l,PlaneGeometry:_i,PolyhedronGeometry:Si,RingGeometry:Hr,ShapeGeometry:Ml,SphereGeometry:ii,TetrahedronGeometry:Sl,TorusGeometry:rr,TorusKnotGeometry:bl,TubeGeometry:Tl,WireframeGeometry:wl});var zn=class extends ti{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Es(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Qp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var sr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:s=e,o=2*t-n;break;case ac:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=e,l=2*n-t;break;case ac:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,_=p*m-p*y;for(let A=0;A!==o;++A)s[A]=f*a[h+A]+v*a[c+A]+x*a[l+A]+_*a[u+A];return s}},Al=class extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Rl=class extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Es(t,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Es(e.times,Array),values:Es(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new El(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Ho:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Qp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[u+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};xn.prototype.TimeBufferType=Float32Array,xn.prototype.ValueBufferType=Float32Array,xn.prototype.DefaultInterpolation=Ho;var gi=class extends xn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool",gi.prototype.ValueBufferType=Array,gi.prototype.DefaultInterpolation=Ls,gi.prototype.InterpolantFactoryMethodLinear=void 0,gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends xn{};Cl.prototype.ValueTypeName="color";var Pl=class extends xn{};Pl.prototype.ValueTypeName="number";var Il=class extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(s,0,a,c-o,a,c,l);return s}},$s=class extends xn{InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName="quaternion",$s.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends xn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="string",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=Ls,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends xn{};Ll.prototype.ValueTypeName="vector";var Dl=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},em=new Dl,Ul=class{constructor(e){this.manager=e!==void 0?e:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ks=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},oo=new Ie,lh=new b,ch=new b,Nl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wf=new Ie,Xf=new b,qf=new b;var Ol=class extends Nl{constructor(){super(new ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jf=new Ie,Yf=new Ie,Zf=new Ie;var $f=new b,Jf=new sn,Kf=new b,Qf=new b;var eg=new b,tg=new sn,ng=new b,ig=new b;var jl="\\[\\]\\.:\\/",tm=new RegExp("["+jl+"]","g"),lo="[^"+jl+"]",nm="[^"+jl.replace("\\.","")+"]",im=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",lo)+/(WCOD+)?/.source.replace("WCOD",nm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lo)+"$"),rm=["material","materials","bones","map"],ht=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){let t=im.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);rm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=class{constructor(r,e,t){let n=t||ht.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rg=new Float32Array(1);var hh=new Ie,Qs=class{constructor(e,t,n=0,i=1/0){this.ray=new yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(uh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Fl(e[i],this,n,t);return n.sort(uh),n}};function uh(r,e){return r.distance-e.distance}function Fl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Fl(s[a],e,t,!0)}}var sg=new ne;var ag=new b,og=new b;var lg=new b;var cg=new b,hg=new Ie,ug=new Ie;var dg=new b,pg=new De,mg=new De;var fg=new b,gg=new b,vg=new b;var xg=new b,yg=new Dr;var _g=new wn;var Mg=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);var sm="1.1.18";function Bh(r,e,t){return Math.max(r,Math.min(e,t))}function am(r,e,t){return(1-t)*r+t*e}function om(r,e,t,n){return am(r,e,1-Math.exp(-t*n))}function lm(r,e){return(r%e+e)%e}var cm=class{constructor(){Ae(this,"isRunning",!1);Ae(this,"value",0);Ae(this,"from",0);Ae(this,"to",0);Ae(this,"currentTime",0);Ae(this,"lerp");Ae(this,"duration");Ae(this,"easing");Ae(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;let t=Bh(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=om(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function hm(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var um=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ae(this,"width",0);Ae(this,"height",0);Ae(this,"scrollHeight",0);Ae(this,"scrollWidth",0);Ae(this,"debouncedResize");Ae(this,"wrapperResizeObserver");Ae(this,"contentResizeObserver");Ae(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ae(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ae(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=hm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},zh=class{constructor(){Ae(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Fh=100/6,si={passive:!1},dm=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ae(this,"touchStart",{x:0,y:0});Ae(this,"lastDelta",{x:0,y:0});Ae(this,"window",{width:0,height:0});Ae(this,"emitter",new zh);Ae(this,"onTouchStart",r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ae(this,"onTouchMove",r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ae(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ae(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r,i=n===1?Fh:n===2?this.window.width:1,s=n===1?Fh:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ae(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,si),this.element.addEventListener("touchstart",this.onTouchStart,si),this.element.addEventListener("touchmove",this.onTouchMove,si),this.element.addEventListener("touchend",this.onTouchEnd,si)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,si),this.element.removeEventListener("touchstart",this.onTouchStart,si),this.element.removeEventListener("touchmove",this.onTouchMove,si),this.element.removeEventListener("touchend",this.onTouchEnd,si)}},kh=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=A=>Math.min(1,1.001-Math.pow(2,-10*A)),lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d="vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:y=!0,prevent:m,virtualScroll:f,overscroll:v=!0,autoRaf:x=!1,__experimental__naiveDimensions:_=!1}={}){Ae(this,"_isScrolling",!1);Ae(this,"_isStopped",!1);Ae(this,"_isLocked",!1);Ae(this,"_preventNextNativeScrollEvent",!1);Ae(this,"_resetVelocityTimeout",null);Ae(this,"__rafID",null);Ae(this,"isTouching");Ae(this,"time",0);Ae(this,"userData",{});Ae(this,"lastVelocity",0);Ae(this,"velocity",0);Ae(this,"direction",0);Ae(this,"options");Ae(this,"targetScroll");Ae(this,"animatedScroll");Ae(this,"animate",new cm);Ae(this,"emitter",new zh);Ae(this,"dimensions");Ae(this,"virtualScroll");Ae(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ae(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let p=i&&this.options.syncTouch,y=i&&n.type==="touchend"&&Math.abs(d)>5;y&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...p?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ae(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ae(this,"raf",r=>{let e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=sm,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:p,wheelMultiplier:g,autoResize:y,prevent:m,virtualScroll:f,overscroll:v,autoRaf:x,__experimental__naiveDimensions:_},this.dimensions=new um(r,e,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new dm(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}let p=d.getBoundingClientRect();r=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=Bh(0,r,this.limit),r===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(d,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),p||this.emit(),p&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?lm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var sa=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,aa=`
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
`,Hh=`
uniform mat4 uCamWorld;
uniform mat4 uProjInv;
uniform vec3 uCamPos;
vec3 cameraRay(vec2 uv) {
  vec4 v = uProjInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  v.xyz /= v.w;
  return normalize((uCamWorld * vec4(normalize(v.xyz), 0.0)).xyz);
}
`,Vh=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uDiskTime;
uniform int uSteps;
uniform float uDiskBright;
uniform float uStarBright;
uniform float uFade;
${aa}
${Hh}

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
`,Gh=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec3 uWormPos;
uniform float uWormR;
uniform float uMix;
${aa}
${Hh}

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
`,Wh=`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform float uMix;
uniform float uProg;
uniform float uSpeed;
${aa}

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
`,Xh=`
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
${aa}

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
    float st;
    float d = lattice(p, st);
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
    glow += (beamC * .00038 / (.00025 + d * d) * w * cellV + amber * .00007 / (.00003 + st * st) * flick * (.6 + .8 * cellV) * (1.0 + wv * 6.0)) * fog * .02;
    t += max(min(d, st) * .75, .035);
    if (t > 46.0) break;
  }
  vec3 col = glow * (1.0 + uMorse * 3.5) * uFlicker;
  // \u0442\u0451\u043F\u043B\u0430\u044F \u0434\u044B\u043C\u043A\u0430 \u0438 \u0441\u0432\u0435\u0442 \u0438\u0437 \xAB\u0433\u043B\u0443\u0431\u0438\u043D\u044B\xBB
  col += vec3(.20, .09, .02) * (.6 + .4 * fbm3(rd * 3.0 + uTime * .03)) * .14;
  col += vec3(1.0, .7, .35) * pow(max(dot(rd, normalize(vec3(.0, .2, 1.0))), 0.0), 18.0) * .5;
  col += vec3(.9, .6, .3) * uMorse * .15;
  gl_FragColor = vec4(col, uMix);
}
`,qh=`
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
`,jh=`
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
`,Yh=`
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
`,Zh=`
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
`,$h=`
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
`,Jh=`
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

vec3 aces(vec3 x) {
  const float a = 2.51, b = .03, c = 2.43, d = .59, e = .14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

void main() {
  vec2 uv = clamp(vUv + uShake, .002, .998);
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
  col *= uExposure;
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
`;var oa=class{constructor(e){let t=this.renderer=new Hs({canvas:e,antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});t.autoClear=!1,t.setClearColor(197381,1),t.outputColorSpace=St,t.toneMapping=fh,this.fsScene=new on,this.fsCam=new ni(-1,1,1,-1,0,1),this.fsMesh=new He(new _i(2,2)),this.fsMesh.frustumCulled=!1,this.fsScene.add(this.fsMesh);let n=(i,s,a={})=>new ft({vertexShader:sa,fragmentShader:i,uniforms:s,depthTest:!1,depthWrite:!1,...a});this.bgMat=n(qh,{tBg:{value:null},uTexel:{value:new ne}}),this.brightMat=n(jh,{tIn:{value:null},uThresh:{value:1.25},uKnee:{value:1.8}}),this.downMat=n(Yh,{tIn:{value:null},uTexel:{value:new ne}}),this.upMat=n(Zh,{tIn:{value:null},tBase:{value:null},uTexel:{value:new ne},uRadius:{value:1}}),this.flareMat=n($h,{tIn:{value:null},uTexel:{value:new ne},uSpread:{value:2}}),this.finalMat=n(Jh,{tScene:{value:null},tBloom:{value:null},tFlare:{value:null},uRes:{value:new ne},uTime:{value:0},uBloom:{value:.9},uFlare:{value:.5},uCA:{value:.2},uExposure:{value:1},uFade:{value:0},uFlash:{value:0},uFlashColor:{value:new De(1,.95,.85)},uShake:{value:new ne},uSat:{value:1},uScan:{value:0}}),this.final=this.finalMat.uniforms,this.q={dpr:1,bg:.6,samples:0},this.w=1,this.h=1,this.targets=[]}makeRT(e,t,n={}){let i=new yn(Math.max(1,e|0),Math.max(1,t|0),{type:Ti,format:rn,minFilter:nn,magFilter:nn,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,...n});return this.targets.push(i),i}setQuality(e){this.q={...this.q,...e},this.resize(this.cssW||innerWidth,this.cssH||innerHeight,!0)}resize(e,t,n=!1){let i=this.q.dpr,s=Math.round(e*i),a=Math.round(t*i);if(!n&&s===this.w&&a===this.h)return;this.cssW=e,this.cssH=t,this.w=s,this.h=a,this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.targets.forEach(p=>p.dispose()),this.targets=[];let o=Math.round(e*Math.min(i,1.5)*this.q.bg),l=Math.round(t*Math.min(i,1.5)*this.q.bg);this.bgRT=this.makeRT(o,l),this.sceneRT=this.makeRT(s,a,{depthBuffer:!0,samples:this.q.samples}),this.down=[];let c=s>>1,h=a>>1;for(let p=0;p<5;p++)this.down.push(this.makeRT(c,h)),c=Math.max(1,c>>1),h=Math.max(1,h>>1);this.up=this.down.slice(0,4).map(p=>this.makeRT(p.width,p.height));let u=Math.max(1,s>>3),d=Math.max(1,a>>4);this.flareA=this.makeRT(u,d),this.flareB=this.makeRT(u,d),this.bgMat.uniforms.tBg.value=this.bgRT.texture,this.bgMat.uniforms.uTexel.value.set(1/o,1/l),this.final.uRes.value.set(s,a)}fs(e,t,n=!1){this.fsMesh.material=e,this.renderer.setRenderTarget(t),n&&this.renderer.clear(!0,!1,!1),this.renderer.render(this.fsScene,this.fsCam)}beginBg(){this.renderer.setRenderTarget(this.bgRT),this.renderer.clear(!0,!1,!1)}beginScene(){let e=this.renderer;e.setRenderTarget(this.sceneRT),e.clear(!0,!0,!1),this.fs(this.bgMat,this.sceneRT)}renderScene(e,t){this.renderer.setRenderTarget(this.sceneRT),this.renderer.render(e,t)}post(e){let t=this.down,n=this.up;this.brightMat.uniforms.tIn.value=this.sceneRT.texture,this.fs(this.brightMat,t[0]);for(let s=1;s<t.length;s++)this.downMat.uniforms.tIn.value=t[s-1].texture,this.downMat.uniforms.uTexel.value.set(1/t[s-1].width,1/t[s-1].height),this.fs(this.downMat,t[s]);let i=t[4];for(let s=3;s>=0;s--)this.upMat.uniforms.tIn.value=i.texture,this.upMat.uniforms.tBase.value=t[s].texture,this.upMat.uniforms.uTexel.value.set(1/i.width,1/i.height),this.fs(this.upMat,n[s]),i=n[s];this.flareMat.uniforms.tIn.value=t[2].texture,this.flareMat.uniforms.uTexel.value.set(1/this.flareA.width,1/this.flareA.height),this.flareMat.uniforms.uSpread.value=1.6,this.fs(this.flareMat,this.flareA),this.flareMat.uniforms.tIn.value=this.flareA.texture,this.flareMat.uniforms.uSpread.value=4.5,this.fs(this.flareMat,this.flareB),this.final.tScene.value=this.sceneRT.texture,this.final.tBloom.value=n[0].texture,this.final.tFlare.value=this.flareB.texture,this.final.uTime.value=e,this.fs(this.finalMat,null)}};var nt=(r,e,t)=>new b(r,e,t),Gr=(r,e,t=0)=>nt(r*Math.sin(e),t,r*Math.cos(e)),Ei=r=>r*Math.PI/180,Yl={pos:nt(7,1.6,36),scale:1},_n=[{key:"ocean",type:0,radius:3.3,angle:Ei(-24),dist:47,y:-.5,tilt:.35,spin:.035,atmo:[.3,.75,1]},{key:"ice",type:1,radius:2.6,angle:Ei(-54),dist:50,y:2.4,tilt:-.2,spin:.02,atmo:[.7,.88,1]},{key:"desert",type:2,radius:3.7,angle:Ei(-86),dist:48,y:-1.6,tilt:.45,spin:.028,atmo:[1,.62,.34],ring:!0},{key:"lava",type:3,radius:2.9,angle:Ei(-117),dist:50,y:1,tilt:.1,spin:.04,atmo:[1,.36,.12]}];_n.forEach(r=>{r.pos=Gr(r.dist,r.angle,r.y)});var la={pos:Gr(50,Ei(-152),3),radius:5},hr=_n.map((r,e)=>2.08+e*.23);function pm(){let r=[],e=(l,c,h,u=45,d=0)=>r.push({t:l,pos:c,tgt:h,fov:u,roll:d}),t=Yl.pos;e(-.2,nt(0,1.6,29),nt(0,-1.2,0),39),e(0,nt(0,2.05,26),nt(0,-1.25,0),41),e(.42,nt(-1.6,2.6,22),nt(0,-1,0),44,-.02),e(.78,nt(4,3.6,32),nt(2.2,-.4,10),46,.01);let n=(l,c,h)=>t.clone().add(nt(Math.sin(l)*c,h,Math.cos(l)*c)),i=l=>t.clone().lerp(nt(0,0,0),l);e(1,n(.95,24,4),i(.22),44),e(1.28,n(.6,20,2.6),i(.17),42,.02),e(1.55,n(.12,19,-1.2),i(.14),42,0),e(1.8,n(-.5,20.5,2),i(.18),44,-.03),e(1.97,n(-1.05,25,3.2),i(.3),46,-.02),_n.forEach((l,c)=>{let h=hr[c],u=l.angle,d=(f,v,x)=>Gr(v,u+f,l.y+x),p=f=>{let v=l.pos.clone().sub(f).normalize(),x=f.clone().negate().normalize();return f.clone().add(v.multiplyScalar(1.15).add(x).normalize().multiplyScalar(20))},g=d(.205,62,2.4),y=d(.15,60,1.2),m=d(.095,59,.3);e(h-.045,g,p(g),47,.02*(c%2?1:-1)),e(h+.06,y,p(y),46,0),e(h+.15,m,p(m),46,.02*(c%2?-1:1))});let s=la.pos,a=s.clone().sub(Gr(66,Ei(-128),4)).normalize(),o=l=>s.clone().sub(a.clone().multiplyScalar(l));return e(3.06,Gr(66,Ei(-128),5.5),s.clone().add(nt(0,0,0)),50,.03),e(3.22,o(26).add(nt(1.5,1.2,0)),s,50,.06),e(3.4,o(12),s,54,.14),e(3.52,o(5.6),s,62,.26),e(3.62,o(2),s.clone().add(a.clone().multiplyScalar(10)),72,.4),e(3.78,o(-4),s.clone().add(a.clone().multiplyScalar(20)),74,.7),e(3.92,nt(-6,6.5,26),nt(0,.6,0),52,.25),e(4,nt(-3,4.6,19.5),nt(0,.3,0),50,.08),e(4.3,nt(3.5,3.6,16.5),nt(0,.1,0),50,-.02),e(4.6,nt(7.5,2.4,11.5),nt(0,0,0),52,-.05),e(4.86,nt(4,1.25,6.4),nt(0,0,0),58,-.1),e(5,nt(1.8,.55,3.15),nt(-.6,-.1,-2),70,-.2),e(5.2,nt(1.2,.4,2.6),nt(-.8,-.1,-3),74,-.25),e(6.3,nt(1.2,.4,2.6),nt(-.8,-.1,-3),74,-.25),r.sort((l,c)=>l.t-c.t),r}var mm=pm();function Wr(r,e,t,n,i){let s=i*i,a=s*i;return .5*(2*e+(-r+t)*i+(2*r-5*e+4*t-n)*s+(-r+3*e-3*t+n)*a)}function Qh(r,e,t,n,i,s){return s.set(Wr(r.x,e.x,t.x,n.x,i),Wr(r.y,e.y,t.y,n.y,i),Wr(r.z,e.z,t.z,n.z,i))}function Zl(r,e){let t=mm,n=0;for(;n<t.length-2&&t[n+1].t<=r;)n++;let i=t[Math.max(n-1,0)],s=t[n],a=t[Math.min(n+1,t.length-1)],o=t[Math.min(n+2,t.length-1)],l=Xt.clamp((r-s.t)/Math.max(a.t-s.t,1e-5),0,1);return Qh(i.pos,s.pos,a.pos,o.pos,l,e.pos),Qh(i.tgt,s.tgt,a.tgt,o.tgt,l,e.tgt),e.fov=Wr(i.fov,s.fov,a.fov,o.fov,l),e.roll=Wr(i.roll,s.roll,a.roll,o.roll,l),e}var gt=(r,e,t)=>{let n=Xt.clamp((t-r)/(e-r),0,1);return n*n*(3-2*n)},kn=(r,e,t,n,i)=>gt(e,t,r)*(1-gt(n,i,r));var ca=class{constructor(e){this.pipe=e;let t=()=>({uCamPos:{value:new b},uCamWorld:{value:new Ie},uProjInv:{value:new Ie},uPix:{value:.001}}),n=(i,s,a=!1)=>new ft({vertexShader:sa,fragmentShader:i,uniforms:s,depthTest:!1,depthWrite:!1,transparent:a,blending:a?ph:dh});this.bh=n(Vh,{...t(),uTime:{value:0},uDiskTime:{value:0},uSteps:{value:160},uDiskBright:{value:1},uStarBright:{value:1},uFade:{value:0}}),this.worm=n(Gh,{...t(),uTime:{value:0},uWormPos:{value:la.pos.clone()},uWormR:{value:la.radius},uMix:{value:0}},!0),this.tunnel=n(Wh,{uRes:{value:new ne(1,1)},uTime:{value:0},uMix:{value:0},uProg:{value:0},uSpeed:{value:1.6},uPix:{value:.001}},!0),this.tess=n(Xh,{uRes:{value:new ne(1,1)},uTime:{value:0},uMix:{value:0},uProg:{value:0},uLook:{value:new ne},uWave:{value:-1},uMorse:{value:0},uFlicker:{value:1},uPix:{value:.001}},!0)}syncCamera(e){let t=Xt.degToRad(e.fov)/Math.max(this.pipe.bgRT.height,1);for(let n of[this.bh,this.worm]){let i=n.uniforms;i.uCamPos.value.copy(e.position),i.uCamWorld.value.copy(e.matrixWorld),i.uProjInv.value.copy(e.projectionMatrixInverse),i.uPix.value=t}this.tunnel.uniforms.uRes.value.set(this.pipe.bgRT.width,this.pipe.bgRT.height),this.tess.uniforms.uRes.value.set(this.pipe.bgRT.width,this.pipe.bgRT.height)}render(e){let t=this.pipe;t.beginBg(),e.tess<1&&(e.bh>0&&t.fs(this.bh,t.bgRT),e.worm>.001&&(this.worm.uniforms.uMix.value=e.worm,t.fs(this.worm,t.bgRT)),e.tunnel>.001&&(this.tunnel.uniforms.uMix.value=e.tunnel,t.fs(this.tunnel,t.bgRT))),e.tess>.001&&(this.tess.uniforms.uMix.value=e.tess,t.fs(this.tess,t.bgRT))}};function fm(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d");e.fillStyle="#7d8086",e.fillRect(0,0,512,512);let t=7,n=()=>(t=t*16807%2147483647)/2147483647;for(let s=0;s<160;s++){let a=(n()*16|0)*32,o=(n()*16|0)*32,l=(1+n()*4|0)*32,c=(1+n()*3|0)*32,h=105+n()*50|0;e.fillStyle=`rgb(${h},${h+2},${h+6})`,e.fillRect(a,o,l,c)}e.strokeStyle="rgba(20,22,26,.85)",e.lineWidth=2;for(let s=0;s<=512;s+=64)e.beginPath(),e.moveTo(s,0),e.lineTo(s,512),e.stroke(),e.beginPath(),e.moveTo(0,s),e.lineTo(512,s),e.stroke();e.fillStyle="rgba(30,30,34,.7)";for(let s=0;s<400;s++)e.fillRect(n()*512,n()*512,2,2);e.fillStyle="rgba(255,106,26,.75)";for(let s=0;s<10;s++)e.fillRect(n()*480,n()*480,28,5);let i=new Mi(r);return i.colorSpace=St,i.wrapS=i.wrapT=Ar,i.anisotropy=4,i}function gm(){let r=document.createElement("canvas");r.width=256,r.height=64;let e=r.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,64);let t=3,n=()=>(t=t*16807%2147483647)/2147483647;for(let s=6;s<250;s+=12){if(n()<.2)continue;let a=n()<.7;e.fillStyle=a?`rgba(255,${190+n()*50|0},${120+n()*60|0},1)`:"rgba(159,216,255,1)",e.fillRect(s,26,7,12)}let i=new Mi(r);return i.colorSpace=St,i}function vm(){let r=document.createElement("canvas");r.width=512,r.height=256;let e=r.getContext("2d");e.fillStyle="#0a1426",e.fillRect(0,0,512,256);for(let n=0;n<256;n+=32)for(let i=0;i<512;i+=32){let s=e.createLinearGradient(i,n,i+32,n+32);s.addColorStop(0,"#16305a"),s.addColorStop(1,"#0b1730"),e.fillStyle=s,e.fillRect(i+2,n+2,28,28)}e.fillStyle="#c9ccd2",e.fillRect(0,126,512,4);let t=new Mi(r);return t.colorSpace=St,t.anisotropy=4,t}function xm(){let r=document.createElement("canvas");r.width=512,r.height=256;let e=r.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,512,256),e.strokeStyle="rgba(255,190,110,.55)",e.lineWidth=1.5;for(let n=0;n<=512;n+=32)e.beginPath(),e.moveTo(n+.5,0),e.lineTo(n+.5,256),e.stroke();for(let n=0;n<=256;n+=32)e.beginPath(),e.moveTo(0,n+.5),e.lineTo(512,n+.5),e.stroke();e.fillStyle="rgba(255,220,170,.9)",e.fillRect(0,126,512,4);let t=new Mi(r);return t.colorSpace=St,t}var ym=()=>new ft({uniforms:{uColor:{value:new De(10475775).multiplyScalar(2.6)},uThick:{value:.045},uAlpha:{value:0}},vertexShader:"uniform float uThick; void main(){ vec3 p = position + normal * uThick; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uAlpha; void main(){ gl_FragColor = vec4(uColor * uAlpha, uAlpha); }",side:ar,transparent:!0,depthWrite:!1,blending:ea}),ha=class{constructor(e){this.group=new Zt,this.group.position.copy(Yl.pos),this.group.rotation.set(.42,.3,-.28),this.modules={},this.pickables=[],this.lights=[],this.hovered=null;let t=fm(),n=new zn({color:13159634,map:t,metalness:.72,roughness:.42,envMap:e,envMapIntensity:1.2,flatShading:!0}),i=new zn({color:2764083,metalness:.85,roughness:.35,envMap:e,envMapIntensity:1,flatShading:!0}),s=new zn({color:14263626,metalness:1,roughness:.28,envMap:e,envMapIntensity:1.6,flatShading:!0}),a=new zn({color:14212064,map:t,metalness:.55,roughness:.5,envMap:e,emissive:16777215,emissiveMap:gm(),emissiveIntensity:1.25,flatShading:!0}),o=new zn({color:13161727,map:vm(),metalness:.45,roughness:.26,envMap:e,envMapIntensity:2.6,emissive:16777215,emissiveMap:xm(),emissiveIntensity:.7,side:or});this.mats=[n,i,s,a,o];let l=(q,j,se=this.group)=>{se.add(j),this.modules[q]||(this.modules[q]={meshes:[],outlines:[]}),this.modules[q].meshes.push(j),j.userData.module=q,this.pickables.push(j);let Q=new He(j.geometry,ym());return Q.renderOrder=2,j.add(Q),this.modules[q].outlines.push(Q),j},c=l("core",new He(new Jt(.62,.62,3.4,10),n));l("core",new He(new Jt(.35,.62,.6,10),i)).position.y=2,l("core",new He(new Jt(.62,.35,.6,10),i)).position.y=-2;let h=l("core",new He(new Jt(.68,.68,.4,10),s));h.position.y=.6,this.spinner=new Zt,this.group.add(this.spinner);let u=new rr(3.6,.3,8,56);u.rotateX(Math.PI/2),l("hab",new He(u,n),this.spinner);let d=new An(1.2,.82,.9);for(let q=0;q<6;q++){let j=q/6*Math.PI*2+.26,se=l("hab",new He(d,a),this.spinner);se.position.set(Math.cos(j)*3.6,0,Math.sin(j)*3.6),se.rotation.y=-j+Math.PI/2}let p=new Jt(.07,.07,3,6);p.rotateZ(Math.PI/2),p.translate(2.1,0,0);for(let q=0;q<3;q++){let j=l("hab",new He(p,i),this.spinner);j.rotation.y=q/3*Math.PI*2+.78}let g=new pt;g.position.set(Math.cos(.26)*3.6,.45,Math.sin(.26)*3.6),this.spinner.add(g);let y=l("solar",new He(new Jt(.06,.06,3.2,6),i));y.position.y=3.6;let m=new An(3.6,.035,1.25);for(let q of[-1,1]){for(let se of[0,1]){let Q=l("solar",new He(m,o));Q.position.set(q*(2.05+se*3.75),4.2+se*0,0),Q.rotation.x=.35}let j=l("solar",new He(new Jt(.035,.035,7.6,5),i));j.rotation.z=Math.PI/2,j.position.set(q*3.9,4.2,0)}let f=new pt;f.position.set(-5.8,4.4,0),this.group.add(f);let v=[];for(let q=0;q<=10;q++){let j=q/10*1.15;v.push(new ne(j,j*j*.42))}let x=new ir(v,18),_=new Zt;_.position.set(.62,1.3,0),this.group.add(_);let A=l("dish",new He(new Jt(.05,.05,1.4,5),i),_);A.rotation.z=Math.PI/2,A.position.x=.7;let E=l("dish",new He(x,new zn({color:15330286,metalness:.4,roughness:.3,envMap:e,side:or,flatShading:!0})),_);E.position.set(1.5,0,0),E.rotation.set(0,0,-1.25),this.dish=E;let I=l("dish",new He(new Fr(.06,.55,5),s),E);I.position.y=.55;let D=new pt;D.position.set(0,.5,0),E.add(D);let O=l("dock",new He(new An(.28,2.6,.28),i));O.position.y=-3.5;let T=new rr(.55,.1,6,20);T.rotateX(Math.PI/2);let F=l("dock",new He(T,s));F.position.y=-4.9;for(let q of[-1,1])l("dock",new He(new Or(.24,.9,3,8),n)).position.set(q*.62,-3.4,0);let V=new pt;V.position.set(0,1.9,.5),this.group.add(V);let Y=new ii(.06,6,4),k=(q,j,se,Q=this.group)=>{let ve=new He(Y,new Qi({color:j}));ve.position.copy(q),Q.add(ve),this.lights.push({m:ve,color:new De(j),phase:se})};k(new b(-7.7,4.2,0),16724e3,0),k(new b(7.7,4.2,0),3211120,.5),k(new b(0,5.25,0),16777215,.25),k(new b(0,-5.1,0),16738842,.75);for(let q=0;q<6;q++){let j=q/6*Math.PI*2;k(new b(Math.cos(j)*3.6,.34,Math.sin(j)*3.6),10475775,q/6,this.spinner)}this.anchors={core:V,hab:g,dish:D,solar:f,dock:F},this.labels={core:["CORE","\u044F\u0434\u0440\u043E \xB7 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 4.2 \u0413\u0412\u0442"],hab:["HAB-RING","\u0436\u0438\u043B\u043E\u0439 \u043A\u043E\u043D\u0442\u0443\u0440 \xB7 0.38 g"],solar:["SOLAR ARRAY","\u043F\u0430\u043D\u0435\u043B\u0438 \xB7 42 \u043A\u0412\u0442"],dish:["COMMS","\u0434\u0430\u043B\u044C\u043D\u044F\u044F \u0441\u0432\u044F\u0437\u044C \xB7 8.4 \u0413\u0413\u0446"],dock:["DOCK","\u0448\u043B\u044E\u0437 \xB7 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D"]}}setHover(e){this.hovered=e}update(e,t){this.spinner.rotation.y+=t*.12,this.group.rotation.y+=t*.012,this.dish.rotation.x=Math.sin(e*.3)*.25;for(let n of this.lights){let i=(e*.8+n.phase)%1<.12?1:.08;n.m.material.color.copy(n.color).multiplyScalar(i*6)}for(let n in this.modules){let i=n===this.hovered?1:0;for(let s of this.modules[n].outlines){let a=s.material.uniforms.uAlpha;a.value+=(i-a.value)*Math.min(1,t*10),s.visible=a.value>.01}}}anchorWorld(e,t){return this.anchors[e].getWorldPosition(t)}};function eu(r){let e=new on,t=new ft({side:ar,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec3 vD;
      void main(){
        vec3 d = normalize(vD);
        vec3 toBH = normalize(vec3(-0.19, -0.04, -0.98));
        float a = max(dot(d, toBH), 0.0);
        float disk = exp(-pow(d.y + .04, 2.0) * 140.0) * pow(a, 3.0);
        vec3 c = vec3(.006, .007, .011);
        c += vec3(1.0, .62, .26) * disk * 9.0 + vec3(1.0, .8, .55) * pow(a, 40.0) * 6.0;
        c += vec3(.25, .4, .6) * max(d.y, 0.0) * .05;
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new He(new ii(10,48,24),t));let n=new nr(r),i=n.fromScene(e,0,.1,100);return n.dispose(),i.texture}var _m=`
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
`,tu=`
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main(){
  vObj = normalize(position);
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Mm=r=>`
#define TYPE ${r}
uniform float uTime; uniform vec3 uAtmo; uniform float uHover; uniform vec3 uFill;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
${_m}
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
  col += alb * (sun * diff + mix(vec3(.30, .42, .62), vec3(.55, .45, .4), float(TYPE == 2)) * fd * .55);
  col += sun * spec * smoothstep(0.0, .2, ndl);
  col += vec3(.5, .65, .9) * pow(max(dot(N, normalize(uFill + V)), 0.0), 40.0) * .12 * fd;
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.5);
  col += uAtmo * rim * smoothstep(-.35, .5, ndl) * 1.6;
  col += vec3(.012, .016, .025) * (1.0 - diff);
  col += emis;
  col += vec3(.62, .85, 1.0) * uHover * rim * 1.5;
  gl_FragColor = vec4(col, 1.0);
}`,Sm=`
uniform vec3 uAtmo; uniform float uScale;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main(){
  vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); vec3 L = normalize(-vW);
  float limb = sqrt(1.0 - 1.0 / (uScale * uScale));
  float f = clamp(-dot(N, V) / limb, 0.0, 1.0);
  float glow = pow(f, 3.0);
  float lit = smoothstep(-.4, .6, dot(N, L));
  gl_FragColor = vec4(uAtmo * glow * lit * 1.6, 1.0);
}`,bm=`
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
}`,ua=class{constructor(){this.group=new Zt,this.items=[];let e=new ii(1,96,64);_n.forEach((t,n)=>{let i=new Zt;i.position.copy(t.pos),i.rotation.z=t.tilt;let s=new De(...t.atmo),a=new ft({vertexShader:tu,fragmentShader:Mm(t.type),uniforms:{uTime:{value:0},uAtmo:{value:s},uHover:{value:0},uFill:{value:t.pos.clone().normalize().add(new b(0,.55,0)).normalize()}}}),o=new He(e,a);o.scale.setScalar(t.radius),i.add(o);let l=1.18,c=new He(e,new ft({vertexShader:tu,fragmentShader:Sm,side:ar,transparent:!0,depthWrite:!1,blending:ea,uniforms:{uAtmo:{value:s},uScale:{value:l}}}));if(c.scale.setScalar(t.radius*l),i.add(c),t.ring){let h=t.radius*1.45,u=t.radius*2.5,d=new Hr(h,u,160,1),p=new He(d,new ft({vertexShader:"varying vec3 vW; varying vec3 vLocal; void main(){ vLocal = position; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:bm,side:or,transparent:!0,depthWrite:!1,uniforms:{uIn:{value:h},uOut:{value:u},uPlanet:{value:t.pos.clone()},uR:{value:t.radius}}}));p.rotation.x=Math.PI/2-.12,i.add(p)}this.group.add(i),this.items.push({cfg:t,holder:i,mesh:o,mat:a,hover:0,sphere:new an(t.pos.clone(),t.radius*1.05)})})}update(e,t,n){for(let[i,s]of this.items.entries())s.mesh.rotation.y+=t*s.cfg.spin,s.mat.uniforms.uTime.value=e,s.hover+=((i===n?1:0)-s.hover)*Math.min(1,t*8),s.mat.uniforms.uHover.value=s.hover}pick(e){let t=-1,n=1/0,i=new b;return this.items.forEach((s,a)=>{if(e.intersectSphere(s.sphere,i)){let o=i.distanceToSquared(e.origin);o<n&&(n=o,t=a)}}),t}};var Tm=`
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
}`,wm=`
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
}`,da=class{constructor(e){this.max=e,this.scene=new on,this.camera=new ni(-1,1,1,-1,0,1),this.geo=new mt,this.geo.setAttribute("position",new Ut(new Float32Array(e*3),3)),this.geo.setAttribute("aTarget",new Ut(new Float32Array(e*2),2));let t=new Float32Array(e*4);for(let n=0;n<t.length;n++)t[n]=Math.random();this.geo.setAttribute("aSeed",new Ut(t,4)),this.geo.setDrawRange(0,0),this.mat=new ft({vertexShader:Tm,fragmentShader:wm,transparent:!0,depthTest:!1,depthWrite:!1,blending:mh,blendSrc:Bl,blendDst:Er,uniforms:{uRes:{value:new ne(1,1)},uHole:{value:new ne},uIntro:{value:0},uSuck:{value:0},uTime:{value:0},uSize:{value:2},uDpr:{value:1},uAlpha:{value:1}}}),this.points=new Vs(this.geo,this.mat),this.points.frustumCulled=!1,this.scene.add(this.points),this.u=this.mat.uniforms}build(e){let t=e.textContent.trim().split(/\s+/),n=e.innerHTML;e.innerHTML=t.map(x=>`<span style="display:inline-block">${x}</span>`).join(" ");let i=getComputedStyle(e),s=[...e.querySelectorAll("span")],a=innerWidth,o=innerHeight,l=Math.min(1,1600/a),c=document.createElement("canvas");c.width=Math.ceil(a*l),c.height=Math.ceil(o*l);let h=c.getContext("2d",{willReadFrequently:!0}),u=parseFloat(i.fontSize);h.font=`${i.fontWeight} ${u*l}px ${i.fontFamily}`,"letterSpacing"in h&&(h.letterSpacing=`${parseFloat(i.letterSpacing||0)*l||u*.02*l}px`),h.textBaseline="middle",h.fillStyle="#fff";let d=i.textTransform;for(let x of s){let _=x.getBoundingClientRect(),A=x.textContent;d==="uppercase"&&(A=A.toUpperCase()),h.fillText(A,_.left*l,(_.top+_.height*.5)*l)}e.innerHTML=n;let p=h.getImageData(0,0,c.width,c.height).data,g=[],y=Math.max(2,Math.round(u*l/34));for(let x=0;x<c.height;x+=y)for(let _=0;_<c.width;_+=y)p[(x*c.width+_)*4+3]>140&&g.push((_+(Math.random()-.5)*y*.6)/l,(x+(Math.random()-.5)*y*.6)/l);let m=Math.min(this.max,g.length/2),f=[...Array(g.length/2).keys()];for(let x=f.length-1;x>0;x--){let _=Math.random()*(x+1)|0;[f[x],f[_]]=[f[_],f[x]]}let v=this.geo.attributes.aTarget.array;for(let x=0;x<m;x++)v[x*2]=g[f[x]*2],v[x*2+1]=g[f[x]*2+1];this.geo.attributes.aTarget.needsUpdate=!0,this.geo.setDrawRange(0,m),this.u.uSize.value=Math.max(1.6,y/l*.95),this.u.uRes.value.set(a,o)}};var nu=new b,Em=new sn,iu=new b,pa=class extends pt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Rn=new Ie,Am=new Ie,ma=class{constructor(e={}){let t=this,n,i,s,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,f){let v=f.projectionMatrix.elements[5]*a;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(n/f.view.width)}px, ${-f.view.offsetY*(i/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let x,_;f.isOrthographicCamera&&(x=-(f.right+f.left)/2,_=(f.top+f.bottom)/2);let A=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,E=f.isOrthographicCamera?`scale( ${A} )scale(`+v+")translate("+u(x)+"px,"+u(_)+"px)"+d(f.matrixWorldInverse):`scale( ${A} )translateZ(`+v+"px)"+d(f.matrixWorldInverse),D=(f.isPerspectiveCamera?"perspective("+v+"px) ":"")+E+"translate("+s+"px,"+a+"px)";o.camera.style!==D&&(h.style.transform=D,o.camera.style=D),y(m,m,f,E)},this.setSize=function(m,f){n=m,i=f,s=n/2,a=i/2,l.style.width=m+"px",l.style.height=f+"px",c.style.width=m+"px",c.style.height=f+"px",h.style.width=m+"px",h.style.height=f+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){let f=m.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function p(m){let f=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let f=0,v=m.children.length;f<v;f++)g(m.children[f])}function y(m,f,v,x){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){let _=m.layers.test(v.layers)===!0,A=m.element;if(A.style.display=_===!0?"":"none",_===!0){m.onBeforeRender(t,f,v);let E;m.isCSS3DSprite?(Rn.copy(v.matrixWorldInverse),Rn.transpose(),m.rotation2D!==0&&Rn.multiply(Am.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(nu,Em,iu),Rn.setPosition(nu),Rn.scale(iu),Rn.elements[3]=0,Rn.elements[7]=0,Rn.elements[11]=0,Rn.elements[15]=1,E=p(Rn)):E=p(m.matrixWorld);let I=o.objects.get(m);if(I===void 0||I.style!==E){A.style.transform=E;let D={style:E};o.objects.set(m,D)}A.parentNode!==h&&h.appendChild(A),m.onAfterRender(t,f,v)}}for(let _=0,A=m.children.length;_<A;_++)y(m.children[_],f,v,x)}}};var Hn=[{art:"orbits",pal:["#0b0f1a","#FFB347","#FFF4E0"],year:2026,ru:{t:"Aurora Bank",d:"3D-\u043E\u043D\u0431\u043E\u0440\u0434\u0438\u043D\u0433 \u0434\u043B\u044F \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430: \u043A\u043B\u0438\u0435\u043D\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u0447\u0451\u0442, \u043F\u043E\u043A\u0430 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043E\u044E \u043E\u0440\u0431\u0438\u0442\u0443 \u0438\u0437 \u043A\u0430\u0440\u0442 \u0438 \u0432\u043A\u043B\u0430\u0434\u043E\u0432.",tags:"WebGL \xB7 UX \xB7 \u043C\u043E\u0443\u0448\u043D",role:"\u0434\u0438\u0437\u0430\u0439\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u0437\u0432\u0443\u043A"},en:{t:"Aurora Bank",d:"A 3D onboarding for a digital bank: customers open an account while assembling their own orbit of cards and deposits.",tags:"WebGL \xB7 UX \xB7 motion",role:"design, dev, sound"}},{art:"flow",pal:["#05070d","#9FD8FF","#FFB347"],year:2026,ru:{t:"Nebula Audio",d:"\u041F\u0440\u043E\u043C\u043E \u043D\u0430\u0443\u0448\u043D\u0438\u043A\u043E\u0432 \u0441 \u0448\u0443\u043C\u043E\u043F\u043E\u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C. \u0421\u043A\u0440\u043E\u043B\u043B \xAB\u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0435\u0442\xBB \u0448\u0443\u043C \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441\u0430, \u0438 \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u0437\u0432\u0443\u043A\u0430 \u0443\u0441\u043F\u043E\u043A\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F.",tags:"\u043F\u0440\u043E\u043C\u043E \xB7 \u0447\u0430\u0441\u0442\u0438\u0446\u044B \xB7 \u0430\u0443\u0434\u0438\u043E",role:"\u043A\u0440\u0435\u0430\u0442\u0438\u0432, WebGL"},en:{t:"Nebula Audio",d:"Launch site for noise-cancelling headphones. Scrolling mutes the city \u2014 and the sound particles settle.",tags:"promo \xB7 particles \xB7 audio",role:"creative, WebGL"}},{art:"contour",pal:["#0a0705","#FF6A1A","#FFF4E0"],year:2025,ru:{t:"Orbita Expo",d:"\u041F\u0440\u043E\u043C\u043E-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438: \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D\u043E\u0432 \u0432 \u0432\u0438\u0434\u0435 \u0442\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0438.",tags:"\u0441\u043E\u0431\u044B\u0442\u0438\u0435 \xB7 \u043A\u0430\u0440\u0442\u0430 \xB7 3D",role:"\u0430\u0440\u0442-\u0434\u0438\u0440\u0435\u043A\u0448\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"},en:{t:"Orbita Expo",d:"Event page for a space-industry expo: an interactive pavilion map rendered as topography.",tags:"event \xB7 map \xB7 3D",role:"art direction, dev"}},{art:"waves",pal:["#03060a","#9FD8FF","#ffffff"],year:2025,ru:{t:"Tidal Index",d:"\u0414\u0430\u0442\u0430-\u0430\u0440\u0442 \u043E \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u043E\u043A\u0435\u0430\u043D\u0430: 120 \u043B\u0435\u0442 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0439 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043D\u044B \u0432 \u0436\u0438\u0432\u043E\u0439 \u0440\u0435\u043B\u044C\u0435\u0444 \u0432\u043E\u043B\u043D.",tags:"\u0434\u0430\u0442\u0430-\u0430\u0440\u0442 \xB7 \u043A\u043B\u0438\u043C\u0430\u0442",role:"\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"},en:{t:"Tidal Index",d:"Data art about sea-level rise: 120 years of measurements turned into living wave relief.",tags:"data art \xB7 climate",role:"research, visualisation"}},{art:"monolith",pal:["#0c0b0a","#d8cfc2","#FFB347"],year:2025,ru:{t:"Monolith",d:"\u0421\u0430\u0439\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u0431\u044E\u0440\u043E: \u0441\u0432\u0435\u0442 \xAB\u043E\u0431\u0445\u043E\u0434\u0438\u0442\xBB \u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0441\u043E\u043B\u043D\u0446\u0430 \u0432 \u043B\u044E\u0431\u0443\u044E \u0434\u0430\u0442\u0443.",tags:"\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 \u0441\u0432\u0435\u0442",role:"\u0434\u0438\u0437\u0430\u0439\u043D, \u0448\u0435\u0439\u0434\u0435\u0440\u044B"},en:{t:"Monolith",d:"Architecture studio site: light sweeps across the buildings following the real sun path for any date.",tags:"architecture \xB7 light",role:"design, shaders"}},{art:"sphere",pal:["#070509","#FF6A1A","#FFB347"],year:2024,ru:{t:"Pulse Run",d:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0435\u0433\u0443\u043D\u043E\u0432: \u043F\u0443\u043B\u044C\u0441 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u0436\u0438\u0432\u0443\u044E \u0441\u0444\u0435\u0440\u0443, \u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u2014 \u0432 \u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A.",tags:"\u043F\u0440\u043E\u0434\u0443\u043A\u0442 \xB7 iOS \xB7 \u0437\u0432\u0443\u043A",role:"\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D"},en:{t:"Pulse Run",d:"A running app: your heart rate becomes a living sphere, your workout becomes a soundtrack.",tags:"product \xB7 iOS \xB7 sound",role:"product design"}},{art:"galaxy",pal:["#04040a","#b6a6ff","#9FD8FF"],year:2024,ru:{t:"Quiet Matter",d:"\u0424\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438. \u041B\u0430\u0439\u043D-\u0430\u043F \u0441\u043E\u0431\u0440\u0430\u043D \u0432 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0443, \u0433\u0434\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0430\u0440\u0442\u0438\u0441\u0442 \u2014 \u0437\u0432\u0435\u0437\u0434\u0430 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0437\u0432\u0443\u043A\u043E\u043C.",tags:"\u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C \xB7 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0430",role:"\u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0430, \u0441\u0430\u0439\u0442"},en:{t:"Quiet Matter",d:"An electronic music festival. The line-up becomes a galaxy where every artist is a star with its own sound.",tags:"festival \xB7 generative",role:"identity, website"}},{art:"bands",pal:["#0a0604","#FFB347","#9FD8FF"],year:2024,ru:{t:"Halcyon",d:"\u041E\u0442\u0435\u043B\u044C \u0432\u044B\u0441\u043E\u043A\u043E \u0432 \u0433\u043E\u0440\u0430\u0445. \u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0442\u043E\u0442 \u0436\u0435 \u0440\u0430\u0441\u0441\u0432\u0435\u0442, \u0447\u0442\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0437\u0430 \u043E\u043A\u043D\u0430\u043C\u0438 \u043D\u043E\u043C\u0435\u0440\u043E\u0432.",tags:"\u0433\u043E\u0441\u0442\u0435\u043F\u0440\u0438\u0438\u043C\u0441\u0442\u0432\u043E \xB7 real-time",role:"\u0434\u0438\u0437\u0430\u0439\u043D, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"},en:{t:"Halcyon",d:"A high-mountain hotel. The site always shows the very sunrise happening outside the rooms right now.",tags:"hospitality \xB7 real-time",role:"design, dev"}}],Xr=[{id:"THALASSA-b",arts:["waves","flow","orbits"],pal:["#03080f","#9FD8FF","#FFF4E0"],ru:{t:"\u0418\u043C\u043C\u0435\u0440\u0441\u0438\u0432\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B",d:"\u0414\u0435\u043B\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B-\u0444\u0438\u043B\u044C\u043C\u044B: \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439, \u0440\u0430\u0441\u043A\u0430\u0434\u0440\u043E\u0432\u043A\u0430, \u0448\u0435\u0439\u0434\u0435\u0440\u044B, 3D \u0438 \u0437\u0432\u0443\u043A. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0431\u0435\u0437 \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 60 FPS \u043D\u0430 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0435.",list:[["\u0421\u0440\u043E\u043A","6\u201312 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0421\u0442\u0435\u043A","Three.js \xB7 GLSL \xB7 WebGPU"],["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","\u0441\u0430\u0439\u0442 + fallback"],["\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F","1.4 g"]]},en:{t:"Immersive websites",d:"Websites as films: script, storyboard, shaders, 3D and sound. Runs in the browser with no plugins and holds 60 FPS on an everyday laptop.",list:[["Timeline","6\u201312 weeks"],["Stack","Three.js \xB7 GLSL \xB7 WebGPU"],["Output","site + fallback"],["Gravity","1.4 g"]]}},{id:"NIVALIS-c",arts:["contour","bands","sphere"],pal:["#060a10","#d9ecf5","#9FD8FF"],ru:{t:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D",d:"\u0418\u0441\u0441\u043B\u0435\u0434\u0443\u0435\u043C, \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0438\u0440\u0443\u0435\u043C \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0414\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u0442\u0451\u043F\u043B\u044B\u043C\u0438 \u043D\u0430 \u043E\u0449\u0443\u043F\u044C.",list:[["\u0421\u0440\u043E\u043A","\u043E\u0442 4 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0424\u043E\u0440\u043C\u0430\u0442","\u0441\u043F\u0440\u0438\u043D\u0442\u044B \xB7 \u0430\u0443\u0434\u0438\u0442 \xB7 DS"],["\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","Figma \xB7 Rive \xB7 \u043A\u043E\u0434"],["\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u2212173 \xB0C"]]},en:{t:"Product design",d:"Research, prototypes and design systems. We make even the coldest interfaces warm to the touch.",list:[["Timeline","from 4 weeks"],["Format","sprints \xB7 audit \xB7 DS"],["Tools","Figma \xB7 Rive \xB7 code"],["Temperature","\u2212173 \xB0C"]]}},{id:"ARIDA-d",arts:["monolith","contour","galaxy"],pal:["#0d0703","#FFB347","#FF6A1A"],ru:{t:"\u041C\u043E\u0443\u0448\u043D \u0438 3D-\u0433\u0440\u0430\u0444\u0438\u043A\u0430",d:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u044B, \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0438, \u0440\u043E\u043B\u0438\u043A\u0438 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u0432 \u0438 \u0440\u0435\u0430\u043B\u0442\u0430\u0439\u043C-\u0441\u0446\u0435\u043D\u044B \u0434\u043B\u044F \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439.",list:[["\u0421\u0440\u043E\u043A","2\u20138 \u043D\u0435\u0434\u0435\u043B\u044C"],["\u0424\u043E\u0440\u043C\u0430\u0442\u044B","4K \xB7 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C \xB7 real-time"],["\u041F\u0430\u0439\u043F\u043B\u0430\u0439\u043D","Blender \xB7 Houdini \xB7 AE"],["\u0412\u0435\u0442\u0435\u0440","310 \u043A\u043C/\u0447"]]},en:{t:"Motion & 3D",d:"Product renders, animated identities, launch films and real-time scenes for live shows.",list:[["Timeline","2\u20138 weeks"],["Formats","4K \xB7 vertical \xB7 real-time"],["Pipeline","Blender \xB7 Houdini \xB7 AE"],["Wind","310 km/h"]]}},{id:"IGNIS-e",arts:["sphere","waves","flow"],pal:["#0b0302","#FF6A1A","#FFF4E0"],ru:{t:"\u0417\u0432\u0443\u043A \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",d:"\u0421\u0430\u0443\u043D\u0434-\u0434\u0438\u0437\u0430\u0439\u043D \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043C\u0443\u0437\u044B\u043A\u0430, AR-\u044D\u0444\u0444\u0435\u043A\u0442\u044B \u0438 \u043C\u0435\u0434\u0438\u0430\u0438\u043D\u0441\u0442\u0430\u043B\u043B\u044F\u0446\u0438\u0438 \u0434\u043B\u044F \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A \u0438 \u0448\u043E\u0443\u0440\u0443\u043C\u043E\u0432.",list:[["\u0421\u0440\u043E\u043A","\u043F\u043E \u0437\u0430\u0434\u0430\u0447\u0435"],["\u0424\u043E\u0440\u043C\u0430\u0442","\u0437\u0432\u0443\u043A \xB7 AR \xB7 \u0438\u043D\u0441\u0442\u0430\u043B\u043B\u044F\u0446\u0438\u0438"],["\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","Web Audio \xB7 TouchDesigner"],["\u041F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C","1 200 \xB0C"]]},en:{t:"Sound & creative tech",d:"Interface sound design, generative music, AR effects and media installations for exhibitions and showrooms.",list:[["Timeline","per brief"],["Format","sound \xB7 AR \xB7 installations"],["Tools","Web Audio \xB7 TouchDesigner"],["Surface","1,200 \xB0C"]]}}];var $l=new Map;function ru(r){let e=r>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Rm(r){let e=ru(r),t=new Float32Array(512);for(let i=0;i<512;i++)t[i]=e();let n=(i,s)=>t[(i*73856093^s*19349663)&511];return(i,s)=>{let a=Math.floor(i),o=Math.floor(s),l=i-a,c=s-o,h=l*l*(3-2*l),u=c*c*(3-2*c),d=n(a,o),p=n(a+1,o),g=n(a,o+1),y=n(a+1,o+1);return d+(p-d)*h+(g-d)*u+(d-p-g+y)*h*u}}var fa=(r,e,t)=>r(e,t)*.5+r(e*2.03,t*2.03)*.25+r(e*4.1,t*4.1)*.125+r(e*8.3,t*8.3)*.0625;function qt(r,e){let t=parseInt(r.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}var Cm={orbits(r,e,t,[n,i,s],a){let o=e*.62,l=t*.55;for(let h=0;h<26;h++){let u=40+h*19,d=u*(.28+a()*.06);r.strokeStyle=qt(h%4?i:s,.08+(h%5===0?.4:.12)),r.lineWidth=h%5===0?1.6:.8,r.beginPath(),r.ellipse(o,l,u,d,-.25,0,Math.PI*2),r.stroke();let p=a()*Math.PI*2,g=o+Math.cos(p)*u*Math.cos(-.25)-Math.sin(p)*d*Math.sin(-.25),y=l+Math.cos(p)*u*Math.sin(-.25)+Math.sin(p)*d*Math.cos(-.25);r.fillStyle=s,r.shadowColor=i,r.shadowBlur=14,r.beginPath(),r.arc(g,y,1.5+a()*3,0,7),r.fill(),r.shadowBlur=0}let c=r.createRadialGradient(o,l,0,o,l,70);c.addColorStop(0,"#000"),c.addColorStop(.6,"#000"),c.addColorStop(.75,qt(s,.9)),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.beginPath(),r.arc(o,l,70,0,7),r.fill()},flow(r,e,t,[n,i,s],a,o){r.lineCap="round";for(let l=0;l<900;l++){let c=a()*e,h=a()*t;r.strokeStyle=qt(a()<.78?i:s,.05+a()*.35),r.lineWidth=.5+a()*1.2,r.beginPath(),r.moveTo(c,h);for(let u=0;u<40;u++){let d=fa(o,c*.004,h*.004)*Math.PI*4;c+=Math.cos(d)*4,h+=Math.sin(d)*4,r.lineTo(c,h)}r.stroke()}},contour(r,e,t,[n,i,s],a,o){let l=r.getImageData(0,0,e,t),c=l.data,h=parseInt(i.slice(1),16),u=parseInt(s.slice(1),16);for(let d=0;d<t;d++)for(let p=0;p<e;p++){let g=fa(o,p*.0055,d*.0055)*14,y=g-Math.floor(g),m=Math.max(0,1-Math.abs(y-.5)*18),f=Math.floor(g)%4===0?1:.45,v=Math.floor(g)%4===0?u:h,x=(d*e+p)*4,_=m*f;c[x]=c[x]*(1-_)+(v>>16&255)*_,c[x+1]=c[x+1]*(1-_)+(v>>8&255)*_,c[x+2]=c[x+2]*(1-_)+(v&255)*_}r.putImageData(l,0,0)},waves(r,e,t,[n,i,s],a,o){for(let l=0;l<46;l++){let c=40+l*(t-60)/46;r.beginPath();for(let h=0;h<=e;h+=3){let u=1-Math.abs(h-e/2)/(e/2),d=Math.pow(u,2)*70*fa(o,h*.012,l*.3),p=c-d;h===0?r.moveTo(h,p):r.lineTo(h,p)}r.lineTo(e,t),r.lineTo(0,t),r.closePath(),r.fillStyle=n,r.fill(),r.strokeStyle=qt(l%7===0?s:i,l%7===0?.9:.5),r.lineWidth=1.1,r.stroke()}},monolith(r,e,t,[n,i,s],a){let o=r.createLinearGradient(0,0,0,t);o.addColorStop(0,"#120c08"),o.addColorStop(.7,qt(s,.35)),o.addColorStop(1,"#0a0806"),r.fillStyle=o,r.fillRect(0,0,e,t);let l=r.createRadialGradient(e*.7,t*.62,0,e*.7,t*.62,160);l.addColorStop(0,qt(s,.9)),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,e,t);for(let c=0;c<9;c++){let h=40+a()*110,u=120+a()*300,d=a()*e,p=t-u*.9,g=r.createLinearGradient(d,0,d+h,0);g.addColorStop(0,qt(i,.95)),g.addColorStop(.5,qt(i,.55)),g.addColorStop(1,"#100d0a"),r.fillStyle=g,r.fillRect(d,p,h,u),r.fillStyle="rgba(0,0,0,.45)",r.beginPath(),r.moveTo(d+h,t),r.lineTo(d+h+u*.7,t),r.lineTo(d+h,p+u*.3),r.fill()}},sphere(r,e,t,[n,i,s],a){let o=e*.5,l=t*.52,c=t*.36;for(let h=-c;h<c;h+=7)for(let u=-c;u<c;u+=7){let d=Math.hypot(u,h)/c;if(d>1)continue;let p=Math.sqrt(1-d*d),g=Math.max(0,-u/c*.5-h/c*.6+p*.7),y=3.4*Math.pow(g,1.2);r.fillStyle=g>.55?s:i,r.globalAlpha=.25+.75*g,r.beginPath(),r.arc(o+u,l+h,y,0,7),r.fill()}r.globalAlpha=1,r.strokeStyle=qt(s,.5),r.lineWidth=1,r.beginPath(),r.ellipse(o,l,c*1.5,c*.28,-.3,0,Math.PI*2),r.stroke()},galaxy(r,e,t,[n,i,s],a){let o=e/2,l=t/2;r.globalCompositeOperation="lighter";for(let h=0;h<5200;h++){let u=h%3,d=Math.pow(a(),.7)*6,p=d*1.15+u*Math.PI*2/3+(a()-.5)*.6,g=d*38+(a()-.5)*18,y=o+Math.cos(p)*g,m=l+Math.sin(p)*g*.55;r.fillStyle=qt(a()<.6?i:s,.25+a()*.5);let f=a()<.02?2.4:.9;r.fillRect(y,m,f,f)}let c=r.createRadialGradient(o,l,0,o,l,90);c.addColorStop(0,"rgba(255,244,224,.95)"),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.fillRect(0,0,e,t),r.globalCompositeOperation="source-over"},bands(r,e,t,[n,i,s],a,o){for(let c=0;c<14;c++){let h=t*(c/14),u=r.createLinearGradient(0,h,e,h+t/14);u.addColorStop(0,qt(c%2?i:s,.04+c*.035)),u.addColorStop(1,qt(c%3?s:i,.02+(14-c)*.02)),r.fillStyle=u,r.fillRect(0,h,e,t/14+1)}let l=r.createRadialGradient(e*.3,t*.78,0,e*.3,t*.78,220);l.addColorStop(0,qt(i,.95)),l.addColorStop(.3,qt(i,.35)),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,e,t),r.fillStyle="#060403",r.beginPath(),r.moveTo(0,t);for(let c=0;c<=e;c+=6)r.lineTo(c,t*.7-fa(o,c*.006,1)*140);r.lineTo(e,t),r.fill()}};function ur(r,e,t=1,n=960,i=600){let s=`${r}|${e.join()}|${t}|${n}`;if($l.has(s))return $l.get(s);let a=document.createElement("canvas");a.width=n,a.height=i;let o=a.getContext("2d",{willReadFrequently:r==="contour"}),l=o.createLinearGradient(0,0,n,i);l.addColorStop(0,e[0]),l.addColorStop(1,"#000"),o.fillStyle=l,o.fillRect(0,0,n,i);let c=ru(t*9973+r.length*31);Cm[r](o,n,i,e,c,Rm(t*7+3));let h=o.getImageData(0,0,n,i),u=h.data;for(let y=0;y<u.length;y+=4){let m=(c()-.5)*16;u[y]+=m,u[y+1]+=m,u[y+2]+=m}o.putImageData(h,0,0),o.strokeStyle="rgba(255,255,255,.35)",o.lineWidth=1;let d=14,p=16;[[d,d,1,1],[n-d,d,-1,1],[d,i-d,1,-1],[n-d,i-d,-1,-1]].forEach(([y,m,f,v])=>{o.beginPath(),o.moveTo(y,m+p*v),o.lineTo(y,m),o.lineTo(y+p*f,m),o.stroke()}),o.font='500 11px "JetBrains Mono", monospace',o.fillStyle="rgba(255,255,255,.55)",o.fillText(`EH/${r.toUpperCase()}/${String(t).padStart(3,"0")}`,d+8,i-d-8);let g=a.toDataURL("image/jpeg",.86);return $l.set(s,g),g}var ga=class{constructor(e,t){this.renderer=new ma,this.renderer.setSize(innerWidth,innerHeight),e.appendChild(this.renderer.domElement),this.scene=new on,this.cards=[],this.rot=0,this.vel=0,this.visible=0,this.onOpen=t,this.drag=null,this.lang="ru",Hn.forEach((a,o)=>{let l=document.createElement("div");l.className="card3d",l.setAttribute("aria-hidden","true"),l.innerHTML=`<div class="c3-img"><img alt="" draggable="false" src="${ur(a.art,a.pal,o+1,640,400)}"></div>
        <div class="c3-row"><span class="c3-idx">${String(o+1).padStart(2,"0")} / ${String(Hn.length).padStart(2,"0")}</span><span class="c3-idx" style="color:var(--ash)">${a.year}</span></div>
        <div class="c3-title"></div><div class="c3-tags"></div>`;let c=new pa(l);c.scale.setScalar(.0088),this.scene.add(c),l.addEventListener("click",h=>{this.drag&&this.drag.moved||this.onOpen(o,l.querySelector("img"))}),this.cards.push({el:l,obj:c,i:o,op:-1})}),this.setLang("ru");let n=a=>{this.visible<.5||a.button>0||a.target.closest(".nav, .minimap, .sheet, #modal, form, footer, button:not(.card3d *)")||(this.drag={x:a.clientX,last:a.clientX,t:performance.now(),moved:!1})},i=a=>{if(!this.drag)return;let o=a.clientX-this.drag.last;Math.abs(a.clientX-this.drag.x)>6&&(this.drag.moved=!0),this.drag.last=a.clientX,this.rot+=o*.0042,this.vel=o*.0042/Math.max(1/120,(performance.now()-this.drag.t)/1e3),this.drag.t=performance.now()},s=()=>{this.drag&&setTimeout(()=>{this.drag=null},0)};addEventListener("pointerdown",n),addEventListener("pointermove",i),addEventListener("pointerup",s),addEventListener("pointercancel",s)}setLang(e){this.lang=e,this.cards.forEach(({el:t,i:n})=>{let i=Hn[n][e];t.querySelector(".c3-title").textContent=i.t,t.querySelector(".c3-tags").textContent=i.tags})}resize(e,t){this.renderer.setSize(e,t)}update(e,t,n,i){this.visible=n;let s=this.renderer.domElement;if(n<=.001){s.style.display!=="none"&&(s.style.display="none");return}s.style.display="",this.drag||(this.rot+=this.vel*e,this.vel*=Math.pow(.04,e));let a=this.rot+i*1.9+performance.now()*2e-5,o=this.cards.length,l=t.position.length(),c=new b,h=new b;for(let u of this.cards){let d=u.i/o,p=a+u.i*.82,g=7.4-u.i*.12,y=2.6-u.i*.72+Math.sin(p*2)*.12;u.obj.position.set(Math.cos(p)*g,y,Math.sin(p)*g),u.obj.lookAt(t.position),c.copy(u.obj.position).sub(t.position);let m=c.length();h.copy(t.position).negate().normalize();let f=Math.acos(Xt.clamp(c.normalize().dot(h),-1,1)),v=Math.asin(Math.min(1,2.8/l))*1.25,x=m>l?Xt.smoothstep(f,v*.7,v*1.25):1,_=1-Xt.smoothstep(m-l,-2,6),A=Xt.smoothstep(n*1.4-d*.4,0,.25),E=Math.max(0,Math.min(1,x*A*(.35+.65*_)));Math.abs(E-u.op)>.01&&(u.el.style.opacity=E.toFixed(3),u.el.style.pointerEvents=E>.4?"auto":"none",u.op=E)}this.renderer.render(this.scene,t)}};var su=r=>440*Math.pow(2,(r-69)/12),va=class{constructor(){this.ctx=null,this.on=!1,this.ready=!1,this.tickLevel=0,this.nextTick=0,this.layers={}}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e({latencyHint:"interactive"});this.master=t.createGain(),this.master.gain.value=0,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-16,this.comp.ratio.value=3.5,this.comp.attack.value=.01,this.comp.release.value=.4,this.horizon=t.createBiquadFilter(),this.horizon.type="lowpass",this.horizon.frequency.value=18e3,this.horizon.Q.value=.5,this.bus=t.createGain(),this.bus.gain.value=1,this.bus.connect(this.horizon),this.horizon.connect(this.master),this.master.connect(this.comp),this.comp.connect(t.destination),this.verb=t.createConvolver(),this.verb.buffer=this.impulse(5.2,2.4),this.verbIn=t.createGain(),this.verbIn.gain.value=1;let n=t.createGain();n.gain.value=.55,this.verbIn.connect(this.verb),this.verb.connect(n),n.connect(this.bus),this.noiseBuf=this.noise(4,"white"),this.brownBuf=this.noise(6,"brown"),this.buildDrone(),this.buildOrgan(),this.buildPads(),this.buildWind(),this.buildStation(),this.buildPlanets(),this.ui=t.createGain(),this.ui.gain.value=.5,this.ui.connect(this.bus),this.ui.connect(this.verbIn),this.ready=!0,this.scheduler=setInterval(()=>this.schedule(),60)}impulse(e,t){let n=this.ctx,i=n.sampleRate*e|0,s=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let l=0;l<i;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/i,t)*(l<400?l/400:1)}return s}noise(e,t){let n=this.ctx,i=n.sampleRate*e|0,s=n.createBuffer(1,i,n.sampleRate),a=s.getChannelData(0),o=0;for(let l=0;l<i;l++){let c=Math.random()*2-1;t==="brown"?(o=(o+.02*c)/1.02,a[l]=o*3.5):a[l]=c}return s}src(e,t=!0){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n}gain(e=0,t=this.bus){let n=this.ctx.createGain();return n.gain.value=e,t&&n.connect(t),n}lfo(e,t,n){let i=this.ctx.createOscillator(),s=this.ctx.createGain();return i.frequency.value=e,s.gain.value=t,i.connect(s),s.connect(n),i.start(),i}buildDrone(){let e=this.ctx,t=this.layers.drone=this.gain(0),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=170,n.Q.value=1.2,n.connect(t),[[55,"sawtooth",.22],[55.35,"sawtooth",.22],[27.5,"sine",.7],[82.4,"triangle",.08]].forEach(([o,l,c])=>{let h=e.createOscillator();h.type=l,h.frequency.value=o;let u=e.createGain();u.gain.value=c,h.connect(u),u.connect(n),h.start()}),this.lfo(.045,70,n.frequency);let i=this.src(this.brownBuf),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=110;let a=e.createGain();a.gain.value=.9,i.connect(s),s.connect(a),a.connect(t),i.start(),this.droneFilter=n}organWave(){let e=new Float32Array(17),t=new Float32Array(17),n={1:.9,2:1,3:.55,4:.62,5:.2,6:.32,8:.28,10:.08,12:.1,16:.06};for(let i in n)t[i]=n[i];return this.ctx.createPeriodicWave(e,t)}buildOrgan(){let e=this.ctx,t=this.layers.organ=this.gain(0,null),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=600,n.Q.value=.4,t.connect(n),n.connect(this.bus),n.connect(this.verbIn),this.organFilter=n;let i=this.organWave();[38,50,57,62,65,69,76].forEach((s,a)=>{for(let o of[-2.5,2.5]){let l=e.createOscillator();l.setPeriodicWave(i),l.frequency.value=su(s),l.detune.value=o;let c=e.createGain();c.gain.value=(a===0?.16:.09)/2,l.connect(c),c.connect(t),l.start()}})}buildPads(){let e=this.ctx,t=(n,i,s,a)=>{let o=this.gain(0,null),l=e.createBiquadFilter();return l.type="lowpass",l.frequency.value=a,o.connect(l),l.connect(this.bus),l.connect(this.verbIn),n.forEach((c,h)=>{let u=e.createOscillator();u.type=i,u.frequency.value=su(c),u.detune.value=h%2?4:-4;let d=e.createGain();d.gain.value=s;let p=this.lfo(.07+h*.031,s*.5,d.gain);u.connect(d),d.connect(o),u.start()}),o};this.layers.heroPad=t([45,52,59,64,71],"sine",.05,1400),this.layers.tessPad=t([48,55,64,67,72],"triangle",.035,1800)}buildWind(){let e=this.ctx,t=this.layers.wind=this.gain(0),n=this.src(this.noiseBuf),i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=500,i.Q.value=1.4;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=1400,s.Q.value=6,n.connect(i),n.connect(s),i.connect(t),s.connect(t),n.start(),this.windFilter=i,this.windFilter2=s,t.connect(this.verbIn)}buildStation(){let e=this.ctx,t=this.layers.station=this.gain(0);[60,120,180.5].forEach((a,o)=>{let l=e.createOscillator();l.type="sine",l.frequency.value=a;let c=e.createGain();c.gain.value=[.35,.12,.05][o],l.connect(c),c.connect(t),l.start()});let n=this.src(this.noiseBuf),i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=380,i.Q.value=2;let s=e.createGain();s.gain.value=.25,n.connect(i),i.connect(s),s.connect(t),n.start(),this.beepOut=this.gain(0,t),this.beepOut.gain.value=1}buildPlanets(){let e=this.ctx;this.planetVoices=[0,1,2,3].map(t=>{let n=e.createStereoPanner?e.createStereoPanner():null,i=e.createGain();if(i.gain.value=0,n?(i.connect(n),n.connect(this.bus)):i.connect(this.bus),i.connect(this.verbIn),t===0){let s=this.src(this.brownBuf),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=600;let o=e.createGain();o.gain.value=.6,this.lfo(.11,.55,o.gain),s.connect(a),a.connect(o),o.connect(i),s.start()}else if(t===1)[1318.5,1975.5,2637].forEach((s,a)=>{let o=e.createOscillator();o.frequency.value=s;let l=e.createGain();l.gain.value=.03,this.lfo(.3+a*.17,.03,l.gain),o.connect(l),l.connect(i),o.start()});else if(t===2){let s=this.src(this.noiseBuf),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=3,this.lfo(.08,500,a.frequency);let o=e.createGain();o.gain.value=.25,s.connect(a),a.connect(o),o.connect(i),s.start()}else{let s=this.src(this.brownBuf),a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=160;let o=e.createOscillator();o.type="sawtooth",o.frequency.value=41;let l=e.createGain();l.gain.value=.08;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=120,o.connect(l),l.connect(c),c.connect(i),o.start(),s.connect(a),a.connect(i),s.start()}return{g:i,pan:n}})}schedule(){if(!this.ready)return;let e=this.ctx;for(this.nextTick<e.currentTime&&(this.nextTick=e.currentTime+.05);this.nextTick<e.currentTime+.2;)this.tickLevel>.02&&this.tick(this.nextTick,this.tickLevel),this.nextTick+=1.25/(this.hyper?2:1)}tick(e,t=1){let n=this.ctx,i=this.src(this.noiseBuf,!1),s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=4200,s.Q.value=2.5;let a=n.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.55*t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.045),i.connect(s),s.connect(a),a.connect(this.bus),a.connect(this.verbIn),i.start(e,Math.random()*2,.06);let o=n.createOscillator();o.frequency.setValueAtTime(2300,e),o.frequency.exponentialRampToValueAtTime(900,e+.03);let l=n.createGain();l.gain.setValueAtTime(.18*t,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.05),o.connect(l),l.connect(this.bus),o.start(e),o.stop(e+.06)}blip(e=2200,t=1400,n=.12,i=.05){if(!this.ready||!this.on)return;let s=this.ctx,a=s.currentTime,o=s.createOscillator();o.type="sine",o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(t,a+i);let l=s.createGain();l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(1e-4,a+i*1.6),o.connect(l),l.connect(this.ui),o.start(a),o.stop(a+i*2)}click(){this.blip(2400,1300,.1,.04)}hover(){this.blip(3200,2800,.025,.025)}boom(){if(!this.ready)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(28,t+2.5);let i=e.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.9,t+.05),i.gain.exponentialRampToValueAtTime(1e-4,t+3),n.connect(i),i.connect(this.bus),i.connect(this.verbIn),n.start(t),n.stop(t+3.1);let s=this.src(this.noiseBuf,!1),a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(5e3,t),a.frequency.exponentialRampToValueAtTime(80,t+1.8);let o=e.createGain();o.gain.setValueAtTime(.4,t),o.gain.exponentialRampToValueAtTime(1e-4,t+2),s.connect(a),a.connect(o),o.connect(this.bus),o.connect(this.verbIn),s.start(t),s.stop(t+2.1)}transmit(){if(!this.ready||!this.on)return;let e=this.ctx,t=e.currentTime;for(let n=0;n<3;n++){let i=t+n*.32,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(320,i),s.frequency.exponentialRampToValueAtTime(2600,i+.45);let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.12,i+.05),a.gain.exponentialRampToValueAtTime(1e-4,i+.6),s.connect(a),a.connect(this.ui),s.start(i),s.stop(i+.65)}}morseTone(e){if(!this.ready||!this.on)return;let t=this.ctx,n=t.currentTime,i=t.createOscillator();i.frequency.value=660;let s=t.createGain();s.gain.setValueAtTime(0,n),s.gain.linearRampToValueAtTime(.12,n+.008),s.gain.setValueAtTime(.12,n+e-.01),s.gain.linearRampToValueAtTime(0,n+e),i.connect(s),s.connect(this.ui),i.start(n),i.stop(n+e+.02)}rewind(e){if(!this.ready||!this.on)return;let t=this.ctx,n=t.currentTime,i=this.src(this.noiseBuf),s=t.createBiquadFilter();s.type="bandpass",s.Q.value=4,s.frequency.setValueAtTime(300,n),s.frequency.exponentialRampToValueAtTime(3800,n+e*.8),s.frequency.exponentialRampToValueAtTime(400,n+e);let a=t.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.35,n+.3),a.gain.setValueAtTime(.35,n+e-.4),a.gain.exponentialRampToValueAtTime(1e-4,n+e),i.connect(s),s.connect(a),a.connect(this.bus),i.start(n),i.stop(n+e+.1);let o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(110,n),o.frequency.exponentialRampToValueAtTime(880,n+e);let l=t.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.05,n+.2),l.gain.exponentialRampToValueAtTime(1e-4,n+e);let c=t.createBiquadFilter();c.frequency.value=1200,o.connect(c),c.connect(l),l.connect(this.bus),o.start(n),o.stop(n+e+.1)}whoosh(){if(!this.ready||!this.on)return;let e=this.ctx,t=e.currentTime,n=this.src(this.noiseBuf,!1),i=e.createBiquadFilter();i.type="bandpass",i.Q.value=1.5,i.frequency.setValueAtTime(200,t),i.frequency.exponentialRampToValueAtTime(6e3,t+1.2);let s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.5,t+.5),s.gain.exponentialRampToValueAtTime(1e-4,t+1.4),n.connect(i),i.connect(s),s.connect(this.bus),s.connect(this.verbIn),n.start(t),n.stop(t+1.5)}unlockMobile(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.silent){let n=new ArrayBuffer(8044),i=new DataView(n),s=(a,o)=>[...o].forEach((l,c)=>i.setUint8(a+c,l.charCodeAt(0)));s(0,"RIFF"),i.setUint32(4,36+4e3*2,!0),s(8,"WAVEfmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,8e3,!0),i.setUint32(28,8e3*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),s(36,"data"),i.setUint32(40,4e3*2,!0),this.silent=new Audio(URL.createObjectURL(new Blob([n],{type:"audio/wav"}))),this.silent.loop=!0,this.silent.setAttribute("playsinline","")}if(this.silent.play().catch(()=>{}),this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});let e=this.ctx.createBufferSource();e.buffer=this.ctx.createBuffer(1,1,22050),e.connect(this.ctx.destination),e.start(0)}}setOn(e){if(e&&this.init(),!this.ctx)return;this.on=e,e?this.unlockMobile():this.silent?.pause();let t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?.85:0,t,e?.6:.15)}suspend(e){this.ctx&&(e?(this.ctx.suspend(),this.silent?.pause()):this.on&&(this.ctx.resume(),this.silent?.play().catch(()=>{})))}update(e){if(!this.ready||!this.on)return;let t=this.ctx.currentTime,n=.35,i=(s,a,o=n)=>s.gain.setTargetAtTime(a,t,o);i(this.layers.drone,(.32+e.tunnel*.25)*(1-e.tess*.7)*e.life),i(this.layers.heroPad,e.hero*.9*e.life),i(this.layers.station,e.station*.38),i(this.layers.wind,e.worm*.55+e.tunnel*.5),this.windFilter.frequency.setTargetAtTime(300+e.wormProg*2600,t,.2),this.windFilter2.frequency.setTargetAtTime(900+e.wormProg*3200,t,.2),i(this.layers.organ,e.organ*.55,.8),this.organFilter.frequency.setTargetAtTime(400+e.organ*4200,t,.8),i(this.layers.tessPad,e.tess*.85,1.2),this.horizon.frequency.setTargetAtTime(e.horizonCut,t,.4),this.droneFilter.Q.value=1.2+e.tunnel*6,e.planets.forEach((s,a)=>{let o=this.planetVoices[a];i(o.g,s.gain*.7,.3),o.pan&&o.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,s.pan)),t,.2)}),this.tickLevel=e.tick,this.hyper=e.hyper}};var Pm={skip:"Skip to content",launch:"Begin the flight",launchSub:"sound \xB7 headphones recommended",launchQuiet:"enter without sound",plTick:"1 tick = 1.25 s",navAbout:"Station",navServices:"Planets",navWorks:"Works",navContact:"Contact",mm0:"Horizon",mm1:"Station",mm2:"Planets",mm3:"Wormhole",mm4:"Event horizon",mm5:"Tesseract",heroEyebrow:"EVENT HORIZON \xB7 immersive worlds studio",heroTitle:"Beyond the possible",heroLede:"We build websites that feel like a flight. Scroll \u2014 the engines are already warm.",scroll:"scroll",aboutEyebrow:"orbital station L-7",aboutTitle:"Station",aboutSub:"A small crew in high orbit. Four principles behind every project we ship.",t1h:"Physics, not scenery",t1p:"We compute light, gravity and time in shaders instead of faking them with pictures. That is why our worlds feel alive.",t2h:"A story, not pages",t2p:"Every project has a setup, a climax and an ending. Scrolling works like film editing.",t3h:"Sound is half the picture",t3p:"We write our own sound design, from engine hum to a button click. Silence is an instrument too.",t4h:"Fast on any orbit",t4p:"60 FPS on a laptop, adaptive quality on phones and a clean fallback without WebGL.",servEyebrow:"a system of four worlds",servTitle:"Planets",s1h:"Immersive websites",s1p:"WebGL launches and promo pages where scrolling becomes cinema. Shaders, 3D, sound and a solid 60 FPS.",s1d:"1 hour here = 7 years on Earth",s2h:"Product design",s2p:"Interfaces you want to touch: research, prototypes, design systems and state animation.",s2d:"1 day here = 3 weeks on Earth",s3h:"Motion & 3D",s3p:"Films, product renders, animated identities and real-time 3D for keynotes and social.",s3d:"1 minute here = 4 hours on Earth",s4h:"Sound & creative tech",s4p:"Sound design, generative music, AR and media installations \u2014 everything that doesn\u2019t fit in a regular browser.",s4d:"1 second here = 1 day on Earth",more:"Learn more",wormEyebrow:"anomaly near IGNIS-e orbit",wormTitle:"Fold the space",wormLede:"Distance is an illusion. To reach the other side, fold the sheet in half and push a pencil through it.",worksEyebrow:"time has almost stopped",worksTitle:"Event horizon",worksSub:"Selected work on the last stable orbit. Drag the spiral and click a card to open it.",drag:"drag",contactEyebrow:"tesseract \xB7 the fifth dimension",contactTitle:"Get in touch",phName:"what should we call you",phContact:"email or @telegram",phMsg:"tell us about the project\u2026",termHint:"some words carry weight here",send:"send signal",earth:"Return to Earth",rights:"Every world built from scratch.",discuss:"Discuss a project",privacy:"This site counts anonymous statistics: country, device, path through the scenes. IP addresses and cookies are not stored."},Im={ru:{log:[["SYS CHECK","OK"],["NAV ARRAY","OK"],["GRAV LENS MODEL","CALIBRATED"],["ACCRETION DISK","ONLINE"],["TIME DILATION","\xD761 320"],["CREW","READY"]],hyperOn:"HYPERSPEED ENGAGED \xB7 \xD75",hyperOff:"HYPERSPEED OFF",rate:"\u0421\u041B\u0418\u0428\u041A\u041E\u041C \u0427\u0410\u0421\u0422\u041E \xB7 \u041F\u041E\u041F\u0420\u041E\u0411\u0423\u0419\u0422\u0415 \u0427\u0415\u0420\u0415\u0417 \u041C\u0418\u041D\u0423\u0422\u0423",sending:"TRANSMITTING\u2026",sent:"SIGNAL RECEIVED \xB7 \u041E\u0422\u0412\u0415\u0422\u0418\u041C \u0412 \u0422\u0415\u0427\u0415\u041D\u0418\u0415 24 \u0427",invalid:"\u0417\u0410\u041F\u041E\u041B\u041D\u0418\u0422\u0415 \u0412\u0421\u0415 \u041F\u041E\u041B\u042F",fail:"\u041D\u0415\u0422 \u0421\u0412\u042F\u0417\u0418 \xB7 \u041D\u0410\u041F\u0418\u0428\u0418\u0422\u0415 \u041D\u0410 \u041F\u041E\u0427\u0422\u0423",stay:"S \xB7 T \xB7 A \xB7 Y",soundOn:"SND ON",soundOff:"SND OFF",labels:{core:"\u044F\u0434\u0440\u043E \xB7 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 4.2 \u0413\u0412\u0442",hab:"\u0436\u0438\u043B\u043E\u0439 \u043A\u043E\u043D\u0442\u0443\u0440 \xB7 0.38 g",solar:"\u043F\u0430\u043D\u0435\u043B\u0438 \xB7 42 \u043A\u0412\u0442",dish:"\u0434\u0430\u043B\u044C\u043D\u044F\u044F \u0441\u0432\u044F\u0437\u044C \xB7 8.4 \u0413\u0413\u0446",dock:"\u0448\u043B\u044E\u0437 \xB7 \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D"},planetHint:"\u043A\u043B\u0438\u043A \u2014 \u043E\u0431\u043B\u0451\u0442",trackOff:"\u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",trackOn:"\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C",trackDisabled:"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430."},en:{log:[["SYS CHECK","OK"],["NAV ARRAY","OK"],["GRAV LENS MODEL","CALIBRATED"],["ACCRETION DISK","ONLINE"],["TIME DILATION","\xD761 320"],["CREW","READY"]],hyperOn:"HYPERSPEED ENGAGED \xB7 \xD75",hyperOff:"HYPERSPEED OFF",rate:"TOO MANY SIGNALS \xB7 TRY AGAIN IN A MINUTE",sending:"TRANSMITTING\u2026",sent:"SIGNAL RECEIVED \xB7 REPLY WITHIN 24 H",invalid:"FILL IN ALL FIELDS",fail:"NO UPLINK \xB7 PLEASE EMAIL US",stay:"S \xB7 T \xB7 A \xB7 Y",soundOn:"SND ON",soundOff:"SND OFF",labels:{core:"core \xB7 reactor 4.2 GW",hab:"habitat ring \xB7 0.38 g",solar:"arrays \xB7 42 kW",dish:"deep-space comms \xB7 8.4 GHz",dock:"dock \xB7 vacant"},planetHint:"click to orbit",trackOff:"opt out",trackOn:"opt in",trackDisabled:"Statistics are off for this browser."}},xa=class{constructor(){this.lang="ru",this.ru={},this.listeners=[],document.querySelectorAll("[data-i18n]").forEach(i=>{this.ru[i.dataset.i18n]=i.textContent}),document.querySelectorAll("[data-i18n-ph]").forEach(i=>{this.ru[i.dataset.i18nPh]=i.getAttribute("placeholder")});let e=new URLSearchParams(location.search).get("lang"),t=null;try{t=localStorage.getItem("eh-lang-user")}catch{}(e||t||"ru")==="en"&&this.set("en",!0)}get d(){return Im[this.lang]}onChange(e){this.listeners.push(e)}set(e,t=!1){this.lang=e,document.documentElement.lang=e;let n=e==="en"?Pm:this.ru;if(document.querySelectorAll("[data-i18n]").forEach(i=>{let s=n[i.dataset.i18n];s!=null&&(i.textContent=s)}),document.querySelectorAll("[data-i18n-ph]").forEach(i=>{let s=n[i.dataset.i18nPh];s!=null&&i.setAttribute("placeholder",s)}),document.querySelectorAll("#btn-lang span").forEach((i,s)=>i.classList.toggle("on",s===0==(e==="ru"))),!t)try{localStorage.setItem("eh-lang-user",e)}catch{}t||this.listeners.forEach(i=>i(e))}};var ya=(r,e,t)=>r+(e-r)*t,_a=class{constructor(e){this.el=document.getElementById("cursor"),this.ring=this.el.querySelector(".c-ring"),this.pt=this.el.querySelector(".c-pt"),this.x=innerWidth/2,this.y=innerHeight/2,this.rx=this.x,this.ry=this.y,this.mag=null,this.audio=e,this.target3d=!1,this.active=!1,addEventListener("pointermove",t=>{t.pointerType==="mouse"&&(this.active=!0,this.x=t.clientX,this.y=t.clientY,this.el.classList.remove("hidden"))},{passive:!0}),document.addEventListener("mouseleave",()=>this.el.classList.add("hidden")),addEventListener("pointerdown",()=>this.el.classList.add("down")),addEventListener("pointerup",()=>this.el.classList.remove("down")),document.addEventListener("pointerover",t=>{if(t.pointerType&&t.pointerType!=="mouse")return;let n=t.target.closest?.("[data-magnetic], .card3d");n&&n!==this.mag?(this.mag=n,this.audio?.hover()):n||(this.mag=null)})}update(e){if(!this.active)return;let t=1-Math.pow(5e-4,e),n=this.x,i=this.y,s=34,a=34,o="50%",l=this.mag;if(l&&l.isConnected&&!l.classList.contains("card3d")){let h=l.getBoundingClientRect(),u=h.left+h.width/2,d=h.top+h.height/2;n=ya(this.x,u,.55),i=ya(this.y,d,.55),s=Math.min(h.width+18,240),a=Math.min(h.height+14,120),o="6px",h.width<60&&h.height<60&&(s=a=Math.max(h.width,h.height)+22,o="50%");let p=(this.x-u)*.18,g=(this.y-d)*.25;l.style.transform=`translate(${p.toFixed(1)}px, ${g.toFixed(1)}px)`,this.lastMag=l}else this.lastMag&&(this.lastMag.style.transform="",this.lastMag=null);this.rx=ya(this.rx,n,t),this.ry=ya(this.ry,i,t),this.el.classList.toggle("magnet",!!(l&&!l.classList.contains("card3d"))),this.el.classList.toggle("target",this.target3d&&!l),this.pt.style.transform=`translate(${this.x}px, ${this.y}px)`;let c=this.ring;this.target3d&&!l?(c.style.width=c.style.height="",c.style.margin="",c.style.borderRadius=""):(c.style.width=s+"px",c.style.height=a+"px",c.style.margin=`${-a/2}px 0 0 ${-s/2}px`,c.style.borderRadius=o),c.style.transform=`translate(${this.rx}px, ${this.ry}px)`}},au="!<>-_\\/[]{}\u2014=+*^?#\u0394\u03A3\u03A901";function Ma(r,e=900){r._scr&&cancelAnimationFrame(r._scr);let t=[],n=o=>o.childNodes.forEach(l=>l.nodeType===3?(l._orig??(l._orig=l.textContent),t.push(l)):n(l));n(r);let i=performance.now(),s=t.reduce((o,l)=>o+l._orig.length,0)||1,a=o=>{let l=Math.min(1,(o-i)/e),c=0;for(let h of t){let u=h._orig,d="";for(let p=0;p<u.length;p++,c++){let g=c/s*.7+.3*Math.random();d+=l>=g||u[p]===" "?u[p]:au[Math.random()*au.length|0]}h.textContent=d}l<1?r._scr=requestAnimationFrame(a):(t.forEach(h=>{h.textContent=h._orig}),r._scr=0)};r._scr=requestAnimationFrame(a)}function lu(r=document){let e=t=>t.childNodes.forEach(n=>n.nodeType===3?n._orig=void 0:e(n));r.querySelectorAll("[data-scramble], .thesis, .service").forEach(e)}var ou=0;function Jl(r,e=2600){let t=document.getElementById("toast");t.textContent=r,t.classList.add("show"),clearTimeout(ou),ou=setTimeout(()=>t.classList.remove("show"),e)}function cu(r){let e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],t=0;addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;let i=n.key.length===1?n.key.toLowerCase():n.key;t=i===e[t]?t+1:i===e[0]?1:0,t===e.length&&(t=0,r())})}var qr="eh-notrack",jr={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,e){try{e==null?localStorage.removeItem(r):localStorage.setItem(r,e)}catch{}}};function Lm(){let r=document.querySelector('meta[name="eh-stats-endpoint"]')?.content;if(r)return r;let e=document.querySelector('meta[name="eh-form-endpoint"]')?.content;return e?e.replace(/\/+$/,"")+"/t":""}function Dm(){let r=new URLSearchParams(location.search);return r.has("notrack")&&jr.set(qr,"1"),r.has("track")&&jr.set(qr,null),!(jr.get(qr)==="1"||navigator.webdriver||navigator.doNotTrack==="1"||window.doNotTrack==="1"||navigator.globalPrivacyControl||location.protocol==="file:")}function hu(r){jr.set(qr,r?null:"1")}function Kl(){return jr.get(qr)!=="1"}function uu(r={}){let e=Lm(),t=!!e&&Dm(),n={event(){},scene(){},launch(){},set(){},stop(){t=!1},get enabled(){return!1}};if(!t)return n;let i=null;try{i=sessionStorage.getItem("eh-sid")}catch{}if(!i){i=crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2)+"-0000";try{sessionStorage.setItem("eh-sid",i)}catch{}}let s=document.referrer&&!document.referrer.startsWith(location.origin)?document.referrer:"",a=new URLSearchParams(location.search),o={lang:navigator.language||"",ref:s,utm:a.get("utm_source")||a.get("ref")||"",screen:`${screen.width}x${screen.height}@${Math.round((devicePixelRatio||1)*10)/10}`,...r},l={max_scene:-1,launched:0,sound:0,active_ms:0},c=new Set,h=[],u=!0,d=document.visibilityState==="visible"?performance.now():0,p=0,g=()=>p+(d?performance.now()-d:0);function y(v=!1){if(!t||!u&&!h.length)return;l.active_ms=Math.round(g());let x=JSON.stringify({sid:i,meta:o,state:l,events:h.splice(0,20)});if(u=h.length>0,v&&navigator.sendBeacon)try{if(navigator.sendBeacon(e,new Blob([x],{type:"text/plain"})))return}catch{}fetch(e,{method:"POST",body:x,headers:{"Content-Type":"text/plain"},keepalive:!0,mode:"cors",credentials:"omit"}).catch(()=>{})}let m=0,f=(v=2500)=>{u=!0,clearTimeout(m),m=setTimeout(()=>y(),v)};return document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?(d&&(p+=performance.now()-d,d=0),u=!0,y(!0)):d=performance.now()}),addEventListener("pagehide",()=>{u=!0,y(!0)}),setInterval(()=>{document.visibilityState==="visible"&&(u=!0,y())},3e4),setTimeout(()=>y(),800),{get enabled(){return t},event(v,x=""){if(!t)return;let _=v+"|"+x;c.has(_)||(c.add(_),h.push({n:v,v:String(x).slice(0,60)}),f(1200))},scene(v){t&&v>l.max_scene&&(l.max_scene=v,f())},launch(v){t&&(l.launched=1,l.sound=v?1:0,f(600))},set(v,x){t&&(o[v]=x,f())},stop(){y(!0),t=!1}}}var pe=r=>document.querySelector(r),Cn=r=>[...document.querySelectorAll(r)],kt=document.documentElement,wt=kt.classList.contains("reduced-motion"),Zr=kt.classList.contains("touch"),zt=Xt.clamp,Yr=()=>new Promise(r=>requestAnimationFrame(()=>r())),$r=r=>new Promise(e=>setTimeout(e,r)),$e=new xa,Fe=new va,Kt=uu({site_lang:$e.lang,webgl:kt.classList.contains("webgl")?1:0});$e.onChange(r=>{Kt.set("site_lang",r),Kt.event("lang",r)});Um();du();Bm();Om();Fm();Nm();["touchend","pointerup"].forEach(r=>document.addEventListener(r,()=>{Fe.on&&Fe.ctx&&Fe.ctx.state!=="running"&&Fe.unlockMobile()},{passive:!0}));document.addEventListener("click",r=>{r.target.closest("a[data-magnetic], .nav-links a, .ft-social a")&&Fe.click()});kt.classList.contains("webgl")?km().catch(r=>{console.error(r),kt.classList.remove("webgl","is-loading"),kt.classList.add("no-webgl")}):kt.classList.remove("is-loading");function du(){let r=pe("#works-list");r.innerHTML="",Hn.forEach((e,t)=>{let n=document.createElement("li"),i=e[$e.lang];n.innerHTML=`<button class="card3d" data-work="${t}" aria-label="${i.t}">
      <div class="c3-img"><img alt="${i.t}" src="${ur(e.art,e.pal,t+1,640,400)}"></div>
      <div class="c3-row"><span class="c3-idx">${String(t+1).padStart(2,"0")}</span><span class="c3-idx">${e.year}</span></div>
      <div class="c3-title">${i.t}</div><div class="c3-tags">${i.tags}</div></button>`,n.querySelector("button").addEventListener("click",s=>Ql(t,s.currentTarget.querySelector("img"))),r.appendChild(n)})}function Um(){let r=pe("#btn-track");if(!r)return;let e=()=>{let t=Kl();r.textContent=t?$e.d.trackOff:$e.d.trackOn,r.setAttribute("aria-pressed",String(!t)),pe("#track-state").textContent=t?"":$e.d.trackDisabled};r.addEventListener("click",()=>{let t=!Kl();hu(t),t||Kt.stop(),e()}),$e.onChange(e),e()}function Nm(){let r=pe(".cb-ticks"),e="";for(let t=0;t<60;t++){let n=t/60*Math.PI*2,i=t%5===0,s=i?36:40,a=44;e+=`<line class="${i?"major":""}" x1="${50+Math.sin(n)*s}" y1="${50-Math.cos(n)*s}" x2="${50+Math.sin(n)*a}" y2="${50-Math.cos(n)*a}"/>`}r.innerHTML=e}function Om(){pe("#btn-lang").addEventListener("click",()=>{$e.set($e.lang==="ru"?"en":"ru"),Fe.click()}),$e.onChange(()=>{du(),lu()})}function Fm(){let r=pe("#btn-sound"),e=()=>{r.classList.toggle("on",Fe.on),r.setAttribute("aria-pressed",String(Fe.on)),r.querySelector(".sound-txt").textContent=Fe.on?$e.d.soundOn:$e.d.soundOff};r.addEventListener("click",()=>{Fe.setOn(!Fe.on),e(),Fe.click(),Kt.event("sound",Fe.on?"on":"off")}),$e.onChange(e),Fe.onSync=e}var cn={waveStart:-1,morse:0,morseTarget:0,handAngle:0};function Bm(){let r=pe("#terminal"),e=Cn(".term-row"),t=pe("#term-status"),n=pe("#cb-hand"),i=l=>{cn.handAngle=l,n.style.transform=`rotate(${l}deg)`};setInterval(()=>{document.hidden||i(cn.handAngle+6)},1e3);let s=()=>e.forEach(l=>l.classList.toggle("empty",!l.querySelector("input,textarea").value));s();let a=0,o=0;r.addEventListener("focusin",()=>{o||(o=performance.now())}),r.addEventListener("input",l=>{o||(o=performance.now()),s(),l.target.closest(".term-row")?.classList.remove("invalid"),l.target.name==="message"&&/\bSTAY\b/i.test(l.target.value)&&performance.now()-a>6e3&&(a=performance.now(),pu("STAY"))}),r.addEventListener("submit",async l=>{l.preventDefault(),i(cn.handAngle+30);let c=!0;if(e.forEach(d=>{let p=d.querySelector("input,textarea"),g=!p.value.trim()||p.name==="contact"&&p.value.trim().length<3;d.classList.toggle("invalid",g),g&&(c=!1)}),!c){t.textContent=$e.d.invalid,t.className="err",Fe.blip(300,180,.14,.12),r.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:320});return}t.textContent=$e.d.sending,t.className="",cn.waveStart=performance.now()/1e3,Fe.transmit();let h={...Object.fromEntries(new FormData(r)),elapsed:Math.round(performance.now()-(o||performance.now())),lang:$e.lang,page:location.href.split("#")[0]},u=document.querySelector('meta[name="eh-form-endpoint"]')?.content;try{if(u){let d=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(h)});if(d.status===429){t.textContent=$e.d.rate,t.className="err";return}if(!d.ok)throw new Error(d.status)}else await $r(1400);t.textContent=$e.d.sent,t.className="ok",Kt.event("form"),r.reset(),s(),o=0}catch{t.textContent=$e.d.fail,t.className="err"}})}var zm={S:"...",T:"-",A:".-",Y:"-.--"};async function pu(r){Kt.event("stay");let e=pe("#morse");e.textContent="";let t=150;for(let n of r){for(let i of zm[n]){let s=i==="."?t:t*3;cn.morseTarget=1,Fe.morseTone(s/1e3),e.textContent+=i==="."?"\xB7":"\u2212",await $r(s),cn.morseTarget=0,await $r(t)}e.textContent+="  ",await $r(t*2)}e.textContent+=" \u2014 "+$e.d.stay}var Nt=null,dr=!1;function Ql(r,e){Kt.event("work",Hn[r].en.t);let t=Hn[r],n=t[$e.lang],i=pe("#modal"),s=pe("#md-img");s.src=ur(t.art,t.pal,r+1,1600,1e3),s.alt=n.t,pe("#md-idx").textContent=`${String(r+1).padStart(2,"0")} / ${String(Hn.length).padStart(2,"0")}`,pe("#md-title").textContent=n.t,pe("#md-text").textContent=n.d,pe("#md-meta").innerHTML=`<dt>YEAR</dt><dd>${t.year}</dd><dt>ROLE</dt><dd>${n.role}</dd><dt>TAGS</dt><dd>${n.tags}</dd>`,i.classList.add("open"),i.setAttribute("aria-hidden","false"),dr=!0,Nt?.stop(),Fe.click(),Fe.whoosh();let a=e?.getBoundingClientRect();s.style.transition="none",s.style.transform="";let o=s.getBoundingClientRect();a&&a.width>4&&!wt?s.style.transform=`translate(${a.left-o.left}px, ${a.top-o.top}px) scale(${a.width/o.width}, ${a.height/o.height})`:(s.style.transform="scale(.92)",s.style.opacity="0"),s.getBoundingClientRect(),s.style.transition="transform 1s cubic-bezier(.16,1,.3,1), opacity .6s ease",s.style.transform="",s.style.opacity="1",pe("#md-close").focus({preventScroll:!0})}function Sa(){if(!dr)return;let r=pe("#modal");r.classList.remove("open"),r.setAttribute("aria-hidden","true"),dr=!1,Nt?.start(),Fe.click()}pe("#md-close").addEventListener("click",Sa);pe(".md-backdrop").addEventListener("click",Sa);async function km(){let r=Vm();r.set(.08);let e=pe("#gl"),t=new oa(e),n=t.renderer,i=Hm(n);Kt.set("tier",i);let a={...{high:{dpr:Math.min(devicePixelRatio,2),bg:.72,steps:220,samples:4,particles:14e3},medium:{dpr:Math.min(devicePixelRatio,1.5),bg:.56,steps:150,samples:2,particles:9e3},low:{dpr:Math.min(devicePixelRatio,1.25),bg:.42,steps:90,samples:0,particles:5200}}[i]},o={...a};t.q={dpr:a.dpr,bg:a.bg,samples:a.samples},t.resize(innerWidth,innerHeight,!0),r.set(.18),await Yr();let l=new Bt(42,innerWidth/innerHeight,.05,600),c=new on,h=new ca(t);h.bh.uniforms.uSteps.value=a.steps;let u=eu(n),d=new ha(u);c.add(d.group);let p=new Vr(16765600,3.4);p.position.set(0,0,0),p.target=d.group,c.add(p),c.add(new Ks(10475775,656900,.22));let g=new Vr(9417983,1.15);g.position.copy(d.group.position).add(new b(22,16,26)),g.target=d.group,c.add(g);let y=new ua;c.add(y.group),r.set(.34),await Yr();let m=new da(a.particles);m.u.uDpr.value=t.q.dpr;let f=new ga(pe("#css3d"),(re,ae)=>Ql(re,ae));$e.onChange(re=>f.setLang(re)),$e.lang!=="ru"&&f.setLang($e.lang),r.set(.5),await Promise.race([Promise.all([document.fonts.load("900 100px Unbounded"),document.fonts.load('400 14px "JetBrains Mono"'),document.fonts.ready]),$r(3e3)]),r.set(.62),await Yr();let v={pos:new b,tgt:new b,fov:42,roll:0};Zl(0,v),l.position.copy(v.pos),l.lookAt(v.tgt),l.updateMatrixWorld(),l.updateProjectionMatrix(),h.syncCamera(l);let x=[h.bh,h.worm,h.tunnel,h.tess];for(let[re,ae]of x.entries())t.fs(ae,t.bgRT),await Yr(),r.set(.62+(re+1)*.07);n.compile(c,l),y.group.visible=!0,t.beginScene(),t.renderScene(c,l),t.post(0),await Yr(),r.set(1),Nt=new kh({lerp:wt?1:.075,smoothWheel:!wt,wheelMultiplier:.9,touchMultiplier:1.4}),Nt.stop(),window.scrollTo(0,0);let _=Cn(".scene"),A=[],E=()=>{A=_.map(re=>({top:re.offsetTop,h:re.offsetHeight}))};E();let I=re=>{let ae=innerHeight;for(let Le=A.length-1;Le>=0;Le--)if(re>=A[Le].top){let et=Le===A.length-1?Math.max(1,A[Le].h-ae):A[Le].h;return Le+zt((re-A[Le].top)/et,0,1)}return 0},D=re=>{let ae=zt(Math.floor(re),0,A.length-1),Le=re-ae,et=ae===A.length-1?A[ae].h-innerHeight:A[ae].h;return A[ae].top+Le*et},O=[0,1.1,2.07,3.12,4.18,5.6];Cn("[data-goto]").forEach(re=>re.addEventListener("click",ae=>{if(ae.preventDefault(),!kt.classList.contains("launched"))return;te();let Le=+re.dataset.goto;Fe.click(),Nt.scrollTo(D(O[Le]),{duration:wt?.01:zt(Math.abs(O[Le]-T.T)*1.1,1.2,4.5),easing:et=>1-Math.pow(1-et,3)})}));let T=window.__ehState={T:0,camT:-.2,time:0,sim:0,launched:!1,launchAt:0,introDone:!1,mx:0,my:0,pmx:0,pmy:0,hyper:!1,rewinding:!1,vel:0,lastT:0},F={idx:-1,mix:0,target:0,ang:0},V=new Qs,Y=new ne(-9,-9),k={kind:null,key:null};addEventListener("pointermove",re=>{T.mx=re.clientX/innerWidth*2-1,T.my=re.clientY/innerHeight*2-1,Y.set(T.mx,-T.my)},{passive:!0});let q=re=>{re.gamma!=null&&(T.mx=zt(re.gamma/30,-1,1),T.my=zt((re.beta-45)/30,-1,1))},j=null;addEventListener("pointerdown",re=>{j={x:re.clientX,y:re.clientY}}),addEventListener("pointerup",re=>{if(!j||Math.hypot(re.clientX-j.x,re.clientY-j.y)>8||!T.launched||dr||re.target.closest("a, button, input, textarea, .card3d, .sheet, #modal, .nav, .minimap, form"))return;Y.set(re.clientX/innerWidth*2-1,-(re.clientY/innerHeight*2-1));let ae=se();if(ae.kind==="planet")be(ae.key);else if(ae.kind==="module"){let Le={core:0,hab:1,dish:2,solar:3};Le[ae.key]!=null?(Fe.click(),Nt.scrollTo(D(1.12+Le[ae.key]*.205+.07),{duration:1.4})):Jl($e.lang==="ru"?"\u0428\u041B\u042E\u0417 \u0417\u0410\u041A\u0420\u042B\u0422 \xB7 \u0421\u0422\u042B\u041A\u041E\u0412\u041A\u0410 \u041D\u0415 \u0422\u0420\u0415\u0411\u0423\u0415\u0422\u0421\u042F":"DOCK SEALED \xB7 NO DOCKING REQUIRED")}});function se(){if(F.target||dr)return{kind:null};if(V.setFromCamera(Y,l),d.group.visible&&T.camT>.8&&T.camT<2.02){let re=V.intersectObjects(d.pickables,!1)[0];if(re)return{kind:"module",key:re.object.userData.module}}if(y.group.visible&&T.camT>1.97&&T.camT<3.05){let re=y.pick(V.ray);if(re>=0)return{kind:"planet",key:re}}return{kind:null}}let Q=pe("#planet-panel");function ve(re){let ae=Xr[re],Le=ae[$e.lang];pe("#pp-id").textContent=`${ae.id} \xB7 ${String(re+1).padStart(2,"0")}/04`,pe("#pp-title").textContent=Le.t,pe("#pp-text").textContent=Le.d,pe("#pp-gallery").innerHTML=ae.arts.map((et,Qe)=>`<img alt="" src="${ur(et,ae.pal,40+re*3+Qe,Qe?640:960,Qe?480:540)}">`).join(""),pe("#pp-list").innerHTML=Le.list.map(([et,Qe])=>`<li><span>${et}</span><b>${Qe}</b></li>`).join(""),[...Q.children].forEach((et,Qe)=>{et.classList.add("stagger"),et.style.transitionDelay=`${.15+Qe*.06}s`})}function be(re){Kt.event("planet",Xr[re].id),!(F.target&&F.idx===re)&&(F.idx=re,F.target=1,F.ang=0,ve(re),Q.classList.add("open"),Q.setAttribute("aria-hidden","false"),Nt.stop(),Fe.click(),Fe.whoosh(),setTimeout(()=>pe("#pp-close").focus({preventScroll:!0}),400))}function te(){F.target&&(F.target=0,Q.classList.remove("open"),Q.setAttribute("aria-hidden","true"),dr||Nt.start(),Fe.click())}pe("#pp-close").addEventListener("click",te),pe("#pp-cta").addEventListener("click",re=>{re.preventDefault(),te(),setTimeout(()=>Nt.scrollTo(D(5.6),{duration:4}),300)}),Cn("[data-open-planet]").forEach(re=>re.addEventListener("click",()=>be(+re.dataset.openPlanet))),$e.onChange(()=>{F.target&&ve(F.idx)}),addEventListener("keydown",re=>{re.key==="Escape"&&(Sa(),te())}),cu(()=>{Kt.event("konami"),T.hyper=!T.hyper,kt.classList.toggle("hyper",T.hyper),Nt.options.wheelMultiplier=T.hyper?3:.9,Jl(T.hyper?$e.d.hyperOn:$e.d.hyperOff),Fe.whoosh()}),pe("#btn-earth").addEventListener("click",()=>{if(T.rewinding)return;let re=wt?1.2:4.6;T.rewinding=!0,kt.classList.add("rewinding"),te(),Sa(),Fe.rewind(re),Kt.event("rewind"),Nt.scrollTo(0,{duration:re,lock:!0,force:!0,easing:ae=>ae<.5?4*ae*ae*ae:1-Math.pow(-2*ae+2,3)/2,onComplete:()=>{T.rewinding=!1,kt.classList.remove("rewinding")}})});let oe=Cn(".thesis"),ge=Cn(".service"),ye=pe("#leaders"),ce=(re,ae)=>{let Le=document.createElementNS("http://www.w3.org/2000/svg",re);return Le.setAttribute("class",ae),ye.appendChild(Le),Le},R=oe.map(()=>({path:ce("path","ld"),dot:ce("circle","ld-dot"),ring:ce("circle","ld-ring")})),w={path:ce("path","ld"),dot:ce("circle","ld-dot")},N=pe("#hover-label"),U=[{el:pe("#about .scene-head"),w:[.8,.9,1.02,1.09]},{el:pe("#services .scene-head"),w:[1.96,2.02,2.1,2.16]},{el:pe(".worm-copy"),w:[2.98,3.05,3.28,3.4]},{el:pe(".worm-hud"),w:[3,3.06,3.5,3.57]},{el:pe("#works .scene-head"),w:[3.98,4.05,4.2,4.28]},{el:pe(".drag-hint"),w:[4.08,4.14,4.55,4.62]},{el:pe(".contact-wrap"),w:[5,5.14,9,10]},...oe.map((re,ae)=>({el:re,w:[1.12+ae*.205,1.15+ae*.205,1.28+ae*.205,1.31+ae*.205],panel:!0})),...ge.map((re,ae)=>({el:re,w:[hr[ae]-.045,hr[ae]-.015,hr[ae]+.16,hr[ae]+.19],panel:!0}))];U.forEach(re=>{re.op=-1,re.shown=!1,re.x=null,re.y=null});let C=pe(".hero-copy"),L=pe("#hero-title"),M=new b,P=re=>(M.copy(re).project(l),{x:(M.x*.5+.5)*innerWidth,y:(-M.y*.5+.5)*innerHeight,front:M.z<1}),B=()=>innerWidth<=768;function ee(re){let ae=T.T,Le=1-gt(.06,.3,ae);C.style.opacity=Le.toFixed(3),C.style.transform=`translateY(${(-ae*60).toFixed(1)}px)`,C.style.visibility=Le<.01?"hidden":"";let et=T.introDone?1-gt(.04,.16,ae):0;L.style.opacity=et.toFixed(3);for(let We of U){let tt=kn(ae,...We.w)*(F.target?0:1);if(Math.abs(tt-We.op)>.002&&(We.el.style.opacity=tt.toFixed(3),We.el.style.visibility=tt<.01?"hidden":"visible",We.panel&&We.el.classList.toggle("vis",tt>.01),We.op=tt),tt>.05&&!We.shown?(We.shown=!0,wt||We.el.querySelectorAll("[data-scramble], h3, .sv-id, .th-num").forEach(Ee=>Ma(Ee,800))):tt<.01&&(We.shown=!1),!We.panel){let Ee=(1-tt)*18;We.el.style.translate=`0 ${Ee.toFixed(1)}px`}}let Qe=P(new b(0,0,0));Qe.r=Math.abs(P(new b(0,0,0).addScaledVector(new b().setFromMatrixColumn(l.matrixWorld,0),12)).x-Qe.x);let Vt=P(d.group.position);if(Vt.r=Math.abs(P(d.group.position.clone().addScaledVector(new b().setFromMatrixColumn(l.matrixWorld,0),5.5)).x-Vt.x),oe.forEach((We,tt)=>{let Ee=R[tt],Ye=U.find(W=>W.el===We);if(Ye.op<.01||!d.group.visible){Ee.path.style.opacity=0,Ee.dot.style.opacity=0,Ee.ring.style.opacity=0;return}d.anchorWorld(We.dataset.anchor,M);let Pe=P(M),yt=innerWidth,Gt=innerHeight,Ct=We.offsetWidth,Et=We.offsetHeight,Qt,It,hn,Wt;if(B()){let W=We.getBoundingClientRect();hn=W.left+W.width*.5,Wt=W.top,Qt=null}else{let W=[[Pe.x+120,Pe.y-Et*.5-60],[Pe.x-120-Ct,Pe.y-Et*.5-60],[Pe.x+70,Pe.y+90],[Pe.x-70-Ct,Pe.y+90],[Pe.x+70,Pe.y-Et-110],[Pe.x-70-Ct,Pe.y-Et-110]],K=(Se,de,we,xe,Ue,rt)=>Math.max(0,Math.min(Se+Ct,we+Ue)-Math.max(Se,we-Ue))*Math.max(0,Math.min(de+Et,xe+rt)-Math.max(de,xe-rt)),X=([Se,de])=>{let we=zt(Se,70,yt-Ct-90),xe=zt(de,100,Gt-Et-70);return K(we,xe,Qe.x,Qe.y,Qe.r,Qe.r*.55)*1.6+K(we,xe,Vt.x,Vt.y,Vt.r,Vt.r)+(Math.abs(we-Se)+Math.abs(xe-de))*40},ie=Ye.cand??0,ue=X(W[ie])*.8;W.forEach((Se,de)=>{let we=X(Se);we<ue&&(ie=de,ue=we)}),Ye.cand=ie;let Me=ie%2===0;Qt=zt(W[ie][0],70,yt-Ct-90),It=zt(W[ie][1],100,Gt-Et-70),Ye.x==null&&(Ye.x=Qt,Ye.y=It),Ye.x+=(Qt-Ye.x)*Math.min(1,re*5),Ye.y+=(It-Ye.y)*Math.min(1,re*5),We.style.transform=`translate(${Ye.x.toFixed(1)}px, ${(Ye.y+(1-Ye.op)*14).toFixed(1)}px)`,hn=Me?Ye.x:Ye.x+Ct,Wt=zt(Pe.y,Ye.y+16,Ye.y+Et-16)}let S=Pe.x+(hn-Pe.x)*.45;Ee.path.setAttribute("d",`M${Pe.x.toFixed(1)},${Pe.y.toFixed(1)} L${S.toFixed(1)},${Wt.toFixed(1)} L${hn.toFixed(1)},${Wt.toFixed(1)}`),Ee.path.style.opacity=Ye.op*(Pe.front?1:0),Ee.dot.setAttribute("cx",Pe.x),Ee.dot.setAttribute("cy",Pe.y),Ee.dot.setAttribute("r",2.2),Ee.dot.style.opacity=Ye.op;let G=6+T.time*1.2%1*14;Ee.ring.setAttribute("cx",Pe.x),Ee.ring.setAttribute("cy",Pe.y),Ee.ring.setAttribute("r",G.toFixed(1)),Ee.ring.style.opacity=Ye.op*(1-T.time*1.2%1)}),ge.forEach((We,tt)=>{let Ee=U.find(It=>It.el===We);if(Ee.op<.01||B())return;let Ye=P(_n[tt].pos),Pe=innerWidth,yt=innerHeight,Gt=We.offsetWidth,Ct=We.offsetHeight,Et=Ye.x<Pe*.5?Pe-Gt-Math.max(90,Pe*.08):Math.max(60,Pe*.07),Qt=zt(yt-Ct-Math.max(70,yt*.1),110,yt-Ct-60);Ee.x==null&&(Ee.x=Et,Ee.y=Qt),Ee.x+=(Et-Ee.x)*Math.min(1,re*3),Ee.y+=(Qt-Ee.y)*Math.min(1,re*3),We.style.transform=`translate(${Ee.x.toFixed(1)}px, ${(Ee.y+(1-Ee.op)*16).toFixed(1)}px)`}),k.kind&&!Zr){let We="",tt="",Ee=null;k.kind==="module"?(We=d.labels[k.key][0],tt=$e.d.labels[k.key],Ee=P(d.anchorWorld(k.key,new b))):(We=Xr[k.key].id,tt=`${Xr[k.key][$e.lang].t} \xB7 ${$e.d.planetHint}`,Ee=P(_n[k.key].pos)),N.querySelector("b").textContent=We,N.querySelector("span").textContent=tt;let Ye=(T.mx*.5+.5)*innerWidth+26,Pe=(T.my*.5+.5)*innerHeight-46;N.style.transform=`translate(${Ye}px, ${Pe}px)`,N.classList.add("show"),w.path.setAttribute("d",`M${Ee.x},${Ee.y} L${Ye},${Pe+18}`),w.path.style.opacity=.55,w.dot.setAttribute("cx",Ee.x),w.dot.setAttribute("cy",Ee.y),w.dot.setAttribute("r",2.5),w.dot.style.opacity=1}else N.classList.remove("show"),w.path.style.opacity=0,w.dot.style.opacity=0}let z=Cn(".minimap button"),J=Cn(".nav-links a"),Z=["SCN 00 \xB7 SUPERMASSIVE","SCN 01 \xB7 STATION L-7","SCN 02 \xB7 PLANETARY SYSTEM","SCN 03 \xB7 WORMHOLE","SCN 04 \xB7 EVENT HORIZON","SCN 05 \xB7 TESSERACT"],$={dist:pe("#tm-dist"),dil:pe("#tm-dil"),vel:pe("#tm-vel"),met:pe("#tm-met"),tag:pe("#scene-tag"),fill:pe("#mm-fill"),ship:pe("#mm-ship"),hd:pe("#hero-dist"),wdt:pe("#worm-dt"),ws:pe("#worm-stress")},me=0,he=-1,fe=(re,ae=2)=>String(Math.floor(re)).padStart(ae,"0"),Ce=pe(".footer");function qe(re){let ae=T.T;kt.classList.toggle("at-footer",Ce.getBoundingClientRect().top<innerHeight-30);let Le=zt(ae/5.85,0,1);$.fill.style.transform=`scaleY(${Le.toFixed(4)})`,$.ship.style.top=`${(Le*100).toFixed(2)}%`;let et=zt(Math.floor(ae+.03),0,5);if(et!==he&&(he=et,z.forEach((Ee,Ye)=>{Ee.classList.toggle("active",Ye===et),Ee.classList.toggle("passed",Ye<et)}),J.forEach(Ee=>Ee.classList.toggle("active",+Ee.dataset.goto===et||et===3&&+Ee.dataset.goto==2)),$.tag.textContent=Z[et],Kt.scene(et),wt||Ma($.tag,600)),T.time-me<.1)return;me=T.time;let Qe=l.position.length(),Vt=re.tess>.5,We=re.tunnel>.5;$.dist.textContent=Vt?"\u221E \xB7 5D":We?"\u2014 \u2014 \u2014":`${(Qe*.046).toFixed(3)} AU \xB7 ${Qe.toFixed(2)} Rs`,$.dil.textContent=Vt?"\u0394t = 0":We?"UNDEFINED":`\xD7${(1/Math.sqrt(Math.max(1e-4,1-1/Qe))).toFixed(5)}`,$.vel.textContent=`${Math.min(.99,T.vel*.35).toFixed(3)} c${T.hyper?" \xB7 HYPER":""}`;let tt=T.launched?performance.now()/1e3-T.launchAt:0;$.met.textContent=`${fe(tt/3600)}:${fe(tt/60%60)}:${fe(tt%60)}`,$.hd.textContent=`${(Qe*.046).toFixed(1)} AU`,$.wdt.textContent=re.tunnel>.1?"UNDEFINED":`${(1+re.wormProg*40).toFixed(2)} s`,$.ws.textContent=`${fe(12+re.wormProg*80+Math.random()*3,3)}%`,Cn(".dilation b").forEach(Ee=>{let Ye=+Ee.dataset.dil,Pe=tt,yt=Pe*Ye,Gt=Math.floor(yt/31557600),Ct=Math.floor(yt%31557600/86400);Ee.textContent=`LOCAL ${fe(Pe/3600)}:${fe(Pe/60%60)}:${fe(Pe%60)} \xB7 EARTH ${Gt}y ${fe(Ct,3)}d ${fe(yt/3600%24)}:${fe(yt/60%60)}:${fe(yt%60)}`})}let Re={acc:0,n:0,t:0,ups:0},Te=new URLSearchParams(location.search).has("nogov");function Je(re){if(Te||!T.launched||T.time-T.launchAt<4||(Re.acc+=re,Re.n++,Re.t+=re,Re.t<2))return;let ae=Re.acc/Re.n*1e3;Re.acc=0,Re.n=0,Re.t=0;let Le=t.q;ae>23?(Le.bg>.34?t.setQuality({bg:+(Le.bg-.08).toFixed(2)}):Le.dpr>1&&t.setQuality({dpr:Math.max(1,Le.dpr-.25)}),h.bh.uniforms.uSteps.value=Math.max(64,Math.round(h.bh.uniforms.uSteps.value*.85)),m.u.uDpr.value=t.q.dpr):ae<12.5&&Re.ups<3&&Le.bg<o.bg&&(Re.ups++,t.setQuality({bg:Math.min(o.bg,+(Le.bg+.06).toFixed(2))}),h.bh.uniforms.uSteps.value=Math.min(o.steps,Math.round(h.bh.uniforms.uSteps.value*1.12)))}let it=0,lt=innerWidth,_e=innerHeight,Ve=()=>{let re=Zr&&innerWidth===lt&&Math.abs(innerHeight-_e)<160;E(),!re&&(lt=innerWidth,_e=innerHeight,t.resize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),f.resize(innerWidth,innerHeight),E(),clearTimeout(it),it=setTimeout(()=>m.build(L),200))};addEventListener("resize",Ve),$e.onChange(()=>setTimeout(()=>m.build(L),50)),m.build(L);let Ze=0,Mn=performance.now();document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ze),Ze=0,Fe.suspend(!0)):(Mn=performance.now(),Fe.suspend(!1),Ze||(Ze=requestAnimationFrame(H)))});function Pn(re){if(T.launched)return;if(T.launched=!0,T.launchAt=performance.now()/1e3,T.launchTime=T.time,re&&(Fe.setOn(!0),Fe.boom(),Fe.onSync?.()),Kt.launch(re),window.DeviceOrientationEvent){let Le=DeviceOrientationEvent.requestPermission;typeof Le=="function"?Le().then(et=>et==="granted"&&addEventListener("deviceorientation",q)).catch(()=>{}):Zr&&addEventListener("deviceorientation",q)}let ae=pe("#preloader");ae.classList.add("off"),setTimeout(()=>{ae.classList.add("gone"),kt.classList.remove("is-loading")},2300),kt.classList.add("launched"),r.stop()}pe("#btn-launch").addEventListener("click",()=>Pn(!0)),pe("#btn-quiet").addEventListener("click",()=>Pn(!1)),pe("#preloader").addEventListener("pointerdown",re=>{re.target.closest("#btn-quiet")||Fe.ctx||(Fe.setOn(!0),Fe.onSync?.())}),window.__eh={launch:Pn,state:T,lenis:()=>Nt,jump(re){Nt.scrollTo(D(re),{immediate:!0,force:!0}),T.camT=re,T.T=re},openPlanet:be,closePlanet:te,openWork:Ql,playMorse:pu,quality:()=>({tier:i,...t.q,steps:h.bh.uniforms.uSteps.value})},new URLSearchParams(location.search).has("autostart")&&Pn(!1);let Ge={bh:1,worm:0,tunnel:0,tess:0,wormProg:0},Ht=new ne,Sn=!1;function H(re){Ze=requestAnimationFrame(H);let ae=Math.min(.05,Math.max(.001,(re-Mn)/1e3));Mn=re,T.time+=ae,Nt.raf(re);let Le=Nt.animatedScroll??scrollY;T.T=I(Le);let et=T.camT;T.camT+=(T.T-T.camT)*Math.min(1,ae*(wt?20:7)),T.vel+=(Math.abs(T.camT-et)/ae-T.vel)*Math.min(1,ae*4);let Qe=T.launched?T.time-T.launchTime:0,Vt=wt?1:gt(0,5.2,Qe),We=-.2*(1-(1-Math.pow(1-Vt,3)));T.launched&&!Sn&&Qe>(wt?1.2:4.6)&&(Sn=!0,T.introDone=!0,kt.classList.add("title-ready","intro-done"),Nt.start(),Cn(".hero-copy [data-scramble]").forEach(de=>!wt&&Ma(de,1100)));let tt=gt(4.06,4.7,T.camT)*(1-gt(4.96,5.02,T.camT)),Ee=(T.hyper?5:1)*(1-.93*tt)*(T.rewinding?-3:1);T.sim+=ae*Ee;let Ye=T.camT+We;if(Zl(Ye,v),F.mix+=(F.target-F.mix)*Math.min(1,ae*2),F.idx>=0){let de=_n[F.idx].pos,we=_n[F.idx].radius;F.ang+=ae*.1;let xe=M.copy(v.pos).sub(de).setY(0).normalize(),Ue=Math.cos(F.ang),rt=Math.sin(F.ang),st=new b(xe.x*Ue-xe.z*rt,.28,xe.x*rt+xe.z*Ue).normalize(),vt=de.clone().addScaledVector(st,we*(B()?4.4:3.5)),ot=de.clone().sub(vt).normalize(),Xe=new b().crossVectors(ot,new b(0,1,0)).normalize(),Pt=B()?de.clone().add(new b(0,-we*1.05,0)):de.clone().addScaledVector(Xe,we*1.05),xt=F.mix*F.mix*(3-2*F.mix);v.pos.lerp(vt,xt),v.tgt.lerp(Pt,xt),v.fov+=(40-v.fov)*xt,v.roll*=1-xt,F.target===0&&F.mix<.002&&(F.idx=-1)}l.position.copy(v.pos),l.up.set(0,1,0),l.lookAt(v.tgt),T.pmx+=(T.mx-T.pmx)*Math.min(1,ae*2.5),T.pmy+=(T.my-T.pmy)*Math.min(1,ae*2.5);let Pe=wt?.3:1;l.rotateY(-T.pmx*.052*Pe),l.rotateX(-T.pmy*.035*Pe),l.rotateZ(v.roll),wt||(l.rotateY(Math.sin(T.time*.11)*.007),l.rotateX(Math.sin(T.time*.083+1.3)*.005)),Ge.worm=kn(T.camT,2.86,3.02,3.6,3.66),Ge.wormProg=gt(2.95,3.62,T.camT),Ge.tunnel=kn(T.camT,3.53,3.6,3.89,3.97),Ge.tess=gt(4.99,5.09,T.camT),Ge.bh=Ge.tunnel>.995||Ge.tess>.995?0:1;let yt=gt(3.58,3.95,T.camT),Gt=wt?0:(Ge.tunnel*(.0035+yt*.004)+Ge.wormProg*Ge.worm*.0015)*(T.hyper?1.6:1);Gt>0?(Ht.set((Math.random()-.5)*Gt,(Math.random()-.5)*Gt),l.rotateZ((Math.random()-.5)*Gt*2)):Ht.set(0,0);let Ct=innerWidth/innerHeight,Et=Math.max(1,1.15/Ct*.82),Qt=Xt.degToRad(v.fov+(T.hyper?6:0));if(l.fov=Xt.radToDeg(2*Math.atan(Math.tan(Qt/2)*Et)),l.updateProjectionMatrix(),l.updateMatrixWorld(),d.group.visible=T.camT>.42&&T.camT<2.4,y.group.visible=T.camT>.95&&T.camT<3.35||F.idx>=0,d.group.visible&&d.update(T.sim,ae*Math.abs(Ee)),y.group.visible&&y.update(T.sim,ae*Math.abs(Ee),k.kind==="planet"?k.key:-1),!Zr&&T.launched){let de=se();(de.kind!==k.kind||de.key!==k.key)&&(k=de,d.setHover(de.kind==="module"?de.key:null),Vn.target3d=!!de.kind,de.kind&&Fe.hover())}let It=h.bh.uniforms;It.uTime.value=T.time,It.uDiskTime.value=T.sim*1.1,It.uDiskBright.value=(T.launched?gt(.2,2.8,Qe):0)*(1+Ge.tess*0),It.uStarBright.value=T.launched?.25+.75*gt(0,1.6,Qe):.25,It.uFade.value=gt(4.84,5,T.camT),h.worm.uniforms.uTime.value=T.sim;let hn=h.tunnel.uniforms;hn.uTime.value=T.sim,hn.uProg.value=yt,hn.uSpeed.value=wt?.12:1.4+yt*2.4;let Wt=h.tess.uniforms;Wt.uTime.value=T.sim,Wt.uProg.value=gt(5,6,T.camT),Wt.uLook.value.set(T.pmx,T.pmy);let S=cn.waveStart>0?performance.now()/1e3-cn.waveStart:-1;Wt.uWave.value=S>=0&&S<4?S*12:-1,cn.morse+=(cn.morseTarget-cn.morse)*Math.min(1,ae*40),Wt.uMorse.value=cn.morse,Wt.uFlicker.value=.96+.04*Math.sin(T.time*23)*Math.sin(T.time*7),h.syncCamera(l),h.render(Ge),t.beginScene(),(d.group.visible||y.group.visible)&&t.renderScene(c,l);let G=P(new b(0,0,0)),W=m.u;W.uRes.value.set(innerWidth,innerHeight),W.uHole.value.set(G.x,G.y),W.uIntro.value=wt?Qe>.3?1:0:zt((Qe-1)/3.6,0,1),W.uSuck.value=gt(.05,.5,T.T),W.uTime.value=T.time;let K=T.introDone?1-gt(.04,.16,T.T):0,X=T.introDone?gt(4.6,5.6,Qe):0;W.uAlpha.value=Math.max(1-X,1-K),T.launched&&T.T<.7&&t.renderScene(m.scene,m.camera);let ie=t.final;ie.uBloom.value=.85+Ge.tunnel*.25-Ge.tess*.2,ie.uFlare.value=.55+Ge.tunnel*.3,ie.uCA.value=(wt?.15:.3+Ge.worm*Ge.wormProg*.6+Ge.tunnel*(1.6+yt*1.8))+(T.hyper?.5:0)+(T.rewinding?2.2:0),ie.uExposure.value=(T.launched?.2+.8*gt(0,1.4,Qe):.2)*(1-Ge.tess*.12),ie.uShake.value.copy(Ht),ie.uSat.value=1-tt*.35+Ge.tess*.1,ie.uScan.value=T.rewinding?1:0;let ue=kn(T.camT,3.88,3.93,3.96,4.04),Me=kn(T.camT,4.97,5,5.03,5.1);ie.uFlash.value=wt?0:Math.max(ue*.9,Me*.75),ie.uFlashColor.value.setRGB(...Me>ue?[1,.72,.38]:[.88,.94,1]),ie.uFade.value=0,t.post(T.time),f.update(ae*Math.abs(Ee),l,kn(T.camT,3.96,4.06,4.6,4.72),gt(4,4.7,T.camT)),T.launched&&(ee(ae),qe(Ge)),Vn.update(ae),Je(ae);let Se=kn(T.camT,1.85,2,3,3.2);Fe.update({hero:1-gt(.4,1,T.camT),station:kn(T.camT,.7,1,1.85,2.1),worm:Ge.worm,wormProg:Ge.wormProg,tunnel:Ge.tunnel,organ:gt(3.3,3.75,T.camT)*(1-gt(4,4.5,T.camT)),tess:Ge.tess,life:1-tt*.7,horizonCut:18e3-tt*17300,tick:Ge.tess*.7,hyper:T.hyper,planets:_n.map(de=>{let we=l.position.distanceTo(de.pos),xe=P(de.pos);return{gain:Se*zt(1-(we-de.radius*2)/22,0,1),pan:xe.x/innerWidth*2-1}})})}let Vn=new _a(Fe);Ze=requestAnimationFrame(H)}function Hm(r){let e=r.getContext(),t="";try{let s=e.getExtension("WEBGL_debug_renderer_info");s&&(t=e.getParameter(s.UNMASKED_RENDERER_WEBGL)||"")}catch{}let n=new URLSearchParams(location.search).get("q");if(n)return n;let i=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||Zr&&Math.min(screen.width,screen.height)<820;return/SwiftShader|llvmpipe|softpipe|Software/i.test(t)?"low":i?/Apple/i.test(t)?"medium":"low":/Intel|Mali|Adreno|PowerVR|Iris|UHD/i.test(t)?"medium":"high"}function Vm(){let r=pe("#pl-num"),e=pe("#pl-bar"),t=pe("#pl-log"),n=pe("#pl-clock"),i=pe("#pl-actions"),s=0,a=0,o=0,l=!0,c=performance.now(),h=wt?600:2600,u=pe("#pd-ticks"),d="";for(let x=0;x<48;x++){let _=x/48*Math.PI*2,A=x%4?41:37;d+=`<line x1="${50+Math.sin(_)*A}" y1="${50-Math.cos(_)*A}" x2="${50+Math.sin(_)*45}" y2="${50-Math.cos(_)*45}"/>`}u.innerHTML=d;let p=[...u.children],g=0,y=pe("#pd-hand"),m=pe("#pd-pulse"),f=setInterval(()=>{if(!l){clearInterval(f);return}g++,y.style.transform=`rotate(${g*7.5}deg)`,p[g%48].classList.add("on"),m.classList.remove("go"),m.getBoundingClientRect(),m.classList.add("go"),Fe.ready&&Fe.on&&Fe.tick(Fe.ctx.currentTime+.01,.8)},1250),v=x=>{if(!l)return;let _=Math.min(1,(x-c)/h),A=Math.min(s,_);a+=(A-a)*.08+(A>a?.002:0),a=Math.min(a,A);let E=Math.round(a*100);r.textContent=String(E).padStart(3,"0"),e.style.transform=`scaleX(${a})`;let I=$e.d.log;for(;o<I.length&&a>=(o+1)/(I.length+.5);){let O=document.createElement("li");O.innerHTML=`<span>${I[o][0]} ${".".repeat(22-I[o][0].length)}</span><b class="${o===4?"warn":""}">${I[o][1]}</b>`,t.appendChild(O),o++}let D=Math.max(0,(1-a)*9.99);n.textContent=`T\u2212 00:00:${D.toFixed(2).padStart(5,"0")}`,E>=100&&(i.classList.add("ready"),pe("#btn-launch").disabled=!1,pe("#btn-quiet").disabled=!1,n.textContent="T\u2212 00:00:00.00 \xB7 GO",i.dataset.focused||(i.dataset.focused=1,pe("#btn-launch").focus({preventScroll:!0}))),requestAnimationFrame(v)};return requestAnimationFrame(v),{set(x){s=Math.max(s,x)},stop(){l=!1}}}})();
