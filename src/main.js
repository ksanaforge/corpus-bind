const React=require("react");
const datapath=require("./datapath");
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
      appname:"taisho-taixu",datapath,control})
  }
});
module.exports=maincomponent;