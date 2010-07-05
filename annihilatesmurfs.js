// $Id$

/**
 * @file
 * Live preview for Annihilate smurfs module
 */

// initiate the live preview
$(document).ready(function () {
  createPreviewText ();
  bindPreviewEvents ();
});

// create preview text
function createPreviewText() {
  // get current values
  var term1 = $("#edit-annihilatesmurfs-term1").val();
  var term2 = $("#edit-annihilatesmurfs-term2").val();
  
  // build and output string
  var live_preview_string = '<h3>Live preview</h3><div style="border:1px solid #ccc; padding:5px; margin:5px 0;"><strong>Your search yielded no results</strong><ul><li>Check if your spelling is correct.</li><li>Remove quotes around phrases to match each word individually: <em>&ldquo;<span class="term1">' + term1 + '</span> <span class="term2">' + term2 + '</span>&rdquo;</em> will match less than <em><span class="term1">' + term1 + '</span> <span class="term2">' + term2 + '</span></em>.</li><li>Consider loosening your query with <em>OR</em>: <em><span class="term1">' + term1 + '</span> <span class="term2">' + term2 + '</span></em> will match less than <em><span class="term1">' + term1 + '</span> OR <span class="term2">' + term2 + '</span></em>.</li></ul></div>';
  $('#annihilatesmurfs-live-preview').html(live_preview_string);
}

// bind preview events
function bindPreviewEvents() {
  $("#edit-annihilatesmurfs-term1").bind("blur change keyup", updateTerms);
  $("#edit-annihilatesmurfs-term2").bind("blur change keyup", updateTerms);
}

// update preview text
function updateTerms()
{
  $(".term1").text($("#edit-annihilatesmurfs-term1").val());
  $(".term2").text($("#edit-annihilatesmurfs-term2").val());
}

