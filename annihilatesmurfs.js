// $Id$

/**
 * @file
 * Live preview for Annihilate smurfs module
 */
Drupal.behaviors.annihilateSmurfs = function (context) {
  // globals
  // strings
  var live_preview_title = Drupal.t('Your search yielded no results');
  var live_preview_search_text = Drupal.t('<ul>\n\
<li>Check if your spelling is correct.</li>\n\
<li>Remove quotes around phrases to match each word individually: <em>"blue smurf"</em> will match less than <em>blue smurf</em>.</li>\n\
<li>Consider loosening your query with <em>OR</em>: <em>blue smurf</em> will match less than <em>blue OR smurf</em>.</li>\n\
</ul>');
  // input
  var term1 = $("#edit-annihilatesmurfs-term1").val();
  var term2 = $("#edit-annihilatesmurfs-term2").val();
  
  // bind preview events
  annihilateSmurfsBindPreviewEvents = function () {
    $("#edit-annihilatesmurfs-term1").bind("blur change keyup", annihilateSmurfsUpdateTerms);
    $("#edit-annihilatesmurfs-term2").bind("blur change keyup", annihilateSmurfsUpdateTerms);
  }
  
  // update preview text
  annihilateSmurfsUpdateTerms = function () {
	  // get current values
	  var term1 = $("#edit-annihilatesmurfs-term1").val();
	  var term2 = $("#edit-annihilatesmurfs-term2").val();
	  
	  // build and output string
	  var live_preview_title = Drupal.t('Your search yielded no results');
	  var live_preview_search_text = Drupal.t('<ul>\n\
<li>Check if your spelling is correct.</li>\n\
<li>Remove quotes around phrases to match each word individually: <em>"blue smurf"</em> will match less than <em>blue smurf</em>.</li>\n\
<li>Consider loosening your query with <em>OR</em>: <em>blue smurf</em> will match less than <em>blue OR smurf</em>.</li>\n\
</ul>');

	  // to preserve translatability, need to just replace the search terms
	  live_preview_search_text = live_preview_search_text.replace(/blue/gi, term1);
	  live_preview_search_text = live_preview_search_text.replace(/smurf/gi, term2);
	  
	  var live_preview_string = '<h3>Live preview</h3><div style="border:1px solid #ccc; padding:5px; margin:5px 0;"><strong>' + live_preview_title + '</strong>' + live_preview_search_text + '</div>';
	  
	  // print updated string
	  $('#annihilatesmurfs-live-preview').html(live_preview_string);
  }
  
  // initiate the live preview
  annihilateSmurfsUpdateTerms ();
  annihilateSmurfsBindPreviewEvents ();
};