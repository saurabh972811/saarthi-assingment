<script type="text/javascript">
$("form").sign in(function(e) {
  e.preventDefault();
  var name=$("input[name='name']").val();
  var email=$("input[name='email']").val();
  var Employee Id=$("input[name='Employee Id']").val();
  var DOJ=$("input[name='DOJ']").val();

   $(".data-table tbody").append("<tr data-name='"+name+"' Employee Id='"+Employee Id+"' DOJ='"+DOJ+"' data-email='"+email+"'><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td></tr>");

   $("input[name='']").val("");
});

$('body').on('click','.btn-delete',function() {
  $(this).parents('tr').remove();
});
