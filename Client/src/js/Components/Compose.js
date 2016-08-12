var  React=require("react");
var Compose=React.createClass(
{
sendMessage : function(){
  alert("hello44");
  alert(this.refs.toMailId.value);


  var accessToken = localStorage.getItem('gToken');
       var email = '';
       var Headers = {'To' : this.refs.toMailId.value,
                       'Subject' : this.refs.subjectOfMail.value};
       for (var header in Headers){
           email += header += ": "+Headers[header]+"\r\n";
       }
       email += "\r\n" + this.refs.bodyOfMail.value;
       console.log(email);
       var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
       console.log(encodedMessage);
       $.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/kavitha2dted.ece%40gmail.com/messages/send?key={AIzaSyBSJtW1vF7_5KyXgUPUod8Rr745cKsZx7w}',
     dataType: 'json',
      contentType : 'application/json',
      data : JSON.stringify({'raw':encodedMessage}),
     type: 'POST',
      async: false,
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
      success: function(data1)
       {
           console.log("hello compose1");
    alert("sent to "+ this.refs.toMailId.value);

     }.bind(this),
     error: function(xhr, status, err) {
          console.log("hello bob");
       console.error(err.toString());
     }.bind(this)
  });
},
render:function()
{
  return (

    <div className="container">
    <div className="inbox-body">
    <a href="#myModal" data-toggle="modal"  title="Compose" className="btn btn-compose">
      <h5>Compose</h5>
    </a>
    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal" className="modal fade">
    <div className="modal-dialog">
    <div className="modal-content">

    <div className="modal-header">
    <button aria-hidden="true" data-dismiss="modal" className="close" type="button">X</button>
    <h4 className="modal-title">New Message</h4>
    </div>

    <form>
   <div className="container-fluid">
    <div className="form-group">
    <label className="col-lg-2 control-label">To</label>
    <div className="col-lg-10">
    <input type="text" placeholder="" id="inputEmail1" className="form-control" ref="toMailId"/>
    </div>
    </div>

    <div className="form-group">
  <label className="col-lg-2 control-label">Cc/Bcc</label>
  <div className="col-lg-10">
   <input type="text" placeholder="" id="cc" className="form-control" />
  </div>
  </div>

  <div className="form-group">
  <label className="col-lg-2 control-label">Subject</label>
  <div className="col-lg-10">
  <input type="text" placeholder="" id="inputPassword1" className="form-control" ref="subjectOfMail"/>
  </div>
  </div>

  <div className="form-group">
  <label className="col-lg-2 control-label">Message</label>
  <div className="col-lg-10">
  <textarea rows="10" cols="30" className="form-control" id="" name="" ref="bodyOfMail"></textarea>
  </div>
  </div>

  <div className="form-group">
  <div className="col-lg-offset-2 col-lg-10">
  <span className="btn green fileinput-button">
  <i className="fa fa-plus fa fa-white"></i>
  <span>Attachment</span>
  <input type="file" name="files[]" multiple="" />
  </span>
  <button className="btn btn-send" type="submit" onClick={this.sendMessage}>SendMessge</button>
  </div>
  </div>
    </div>
    </form>

    </div>
    </div>
    </div>
    </div>
    </div>
);
}

})
module.exports=Compose;
