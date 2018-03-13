<script type="text/javascript">
(function worker() {
  $.ajax({
	type: 'POST',
    url: '{virtual_tpl_path}{session.template}/ajax.php', 
    data: { userid: '{session.member_id}' },
	cache: false,
	success: function(data) {
      $('#result').html(data);
    },
    complete: function() {
      // Schedule the next request when the current one's complete
      setTimeout(worker, 5000);
    }
  });
})();
</script>