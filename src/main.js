const React=require("react");
const remotedata=require("./remotedata");
const CorpusBindingMode=require("ksana2015-parallel").CorpusBindingMode;
const E=React.createElement;
const control=require("./controltab");
const maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  }
  ,render: function() {
    return E(CorpusBindingMode,
      {leftCorpus:"taisho",rightCorpus:"taixu",
      leftAddress:"1p1a1",rightAddress:"1p5a1",
      leftFlex:3,rightFlex:5,
      appname:"taisho-taixu",remotedata,control})
  }
});
module.exports=maincomponent;