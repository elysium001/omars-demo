<?php

// Get block attributes.
$title = $attributes['title'] ?? 'Missing title';
$bgColor = $attributes['bgColor'] ?? '#fff';

// Render the block.
echo "<omars-demo title=\"$title\" bg-color=\"$bgColor\"></omars-demo>";
