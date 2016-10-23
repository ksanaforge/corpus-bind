const React=require("react");
const E=React.createElement;
const PT=React.PropTypes;
const ControlTab=React.createClass({
	contextTypes:{
		action:PT.func,
		listen:PT.func
	}
	,componentDidMount:function(){
		this.context.listen("selection",this.onSelection,this);
	}
	,onSelection:function(opts){
		console.log(opts.corpus,opts.article,opts.range);
	}
	,componentWillUnmount:function(){
		this.context.unlistenAll(this);
	}
	,onlink:function(e){
		this.context.action("makelink");
	}
	,render:function(){
		return E("div",{},"Corpus Bind",
			E("br"),
			E("button",{onClick:this.onlink},"  Link  ")
		);
	}
})
module.exports=ControlTab;