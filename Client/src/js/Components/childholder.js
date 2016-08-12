
var React = require('react');
var ComposeChildComponent = require('./ComposeChild');
var InboxChildComponent = require('./inbox');
//var DraftChildComponent = require('./draft');
var ChildHolderComponent = React.createClass({
render: function(){
  return(<div className="container-fluid">
  <ComposeChildComponent/>
  <InboxChildComponent/>
    </div>
  )
}
})
module.exports = ChildHolderComponent;
