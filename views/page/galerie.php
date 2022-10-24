<main>
    <div class='containers' style="display: block !important;">
        <div class="gallery" >

            <!-- <div class="image" style="display: grid !important;"> -->
                <?php
                // Image extensions
                $image_extensions = array("png", "jpg", "jpeg", "gif", "JPG");
                // Target directory
                $dir = './assets/img/images/';
                if (is_dir($dir)) {
                    
                    if ($dh = opendir($dir)) {
                      
                        $count = 1;
                        // Read files
                        while (($file = readdir($dh)) !== false) {
                         
                            if ($file != '' && $file != '.' && $file != '..') {

                                // Thumbnail image path
                                $thumbnail_path = "./assets/img/itin3/" . $file;

                                // Image path
                                $image_path = "./assets/img/itin3/" . $file;

                                $thumbnail_ext = pathinfo($thumbnail_path, PATHINFO_EXTENSION);
                                $image_ext = pathinfo($image_path, PATHINFO_EXTENSION);
                                // var_dump($thumbnail_path);
                                // Check its not folder and it is image file
                                if (
                                    !is_dir($image_path) &&
                                    in_array($thumbnail_ext, $image_extensions) &&
                                    in_array($image_ext, $image_extensions)
                                ) {
                ?>

                                    <!-- Image -->

                                    <a href="<?php echo $image_path; ?>">
                                        <img src="<?php echo $thumbnail_path; ?>" alt="" title="" />
                                    </a>

                                    <!-- --- -->
                                    <?php

                                    // Break
                                    if ($count % 5 == 0) {
                                    ?>
                                        <!-- <div class="clear"></div> -->
                <?php
                                    }
                                    $count++;
                                }
                            }
                        }

                        closedir($dh);
                    }
                }
                ?>
            <!-- </div> -->
        </div>
    </div>


    <!-- Script -->
    <script type='text/javascript'>
        $(document).ready(function() {

            // Intialize gallery
            var gallery = $('.gallery').simpleLightbox();
        });
    </script>

</main>
