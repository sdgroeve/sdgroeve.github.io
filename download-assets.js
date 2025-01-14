const https = require('https');
const fs = require('fs');
const path = require('path');

// Create necessary directories
const dirs = [
    'vendor/animate',
    'vendor/bootstrap/css',
    'vendor/bootstrap/js',
    'vendor/font-awesome/css',
    'vendor/font-awesome/webfonts',
    'vendor/jquery',
    'vendor/jquery.easing',
    'vendor/jquery.appear',
    'vendor/wow',
    'vendor/typed',
    'vendor/parallaxie',
    'vendor/owl.carousel/assets',
    'vendor/isotope',
    'vendor/magnific-popup',
    'images',
    'images/projects'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Function to download file
const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', err => {
            fs.unlink(dest);
            reject(err);
        });
    });
};

// Files to download
const files = [
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        dest: 'vendor/animate/animate.min.css'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        dest: 'vendor/bootstrap/css/bootstrap.min.css'
    },
    {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
        dest: 'vendor/bootstrap/js/bootstrap.bundle.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        dest: 'vendor/font-awesome/css/all.min.css'
    },
    {
        url: 'https://code.jquery.com/jquery-3.6.0.min.js',
        dest: 'vendor/jquery/jquery.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
        dest: 'vendor/jquery.easing/jquery.easing.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
        dest: 'vendor/wow/wow.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js',
        dest: 'vendor/typed/typed.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
        dest: 'vendor/owl.carousel/owl.carousel.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
        dest: 'vendor/owl.carousel/assets/owl.carousel.min.css'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js',
        dest: 'vendor/isotope/isotope.pkgd.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
        dest: 'vendor/magnific-popup/jquery.magnific-popup.min.js'
    },
    {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css',
        dest: 'vendor/magnific-popup/magnific-popup.min.css'
    }
];

// Download all files
Promise.all(files.map(file => download(file.url, file.dest)))
    .then(() => console.log('All files downloaded successfully'))
    .catch(err => console.error('Error downloading files:', err));
