My open-source biometrics data
==============================

__tldr__ CSVs with my open-source sleep and steps data from JawBone, BodyMedia and FitBit for
March 2014.

__Who am I?__ I'm [Andrei Ismail](https://twitter.com/aismail85), a software engineer from
Bucharest/Romania who is extremely passionate about wearables and sensors.

__What is this?__ Since March 2014, I've been wearing 3 devices all the time (well, almost).
BodyMedia on my upper left arm, FitBit on my left wrist and Jawbone on my right wrist.

There are numerous comparisons floating around on the internet, but no data to play around
with. So after working quite a bit to pull my data from these devices and parse it to a
common ground, I decided to donate it to the outer world and see what comes out of that.

__Do you have more prose?__ Sure - I've started a blog at https://aismail85.tumblr.com
Feel free to follow that, because interesting updates will follow :)

File formats
============
The file formats are quite obvious.

* first column is always a human-readable date
* second column is a UNIX timestamp
* columns 3, 4, 5 represent sleep or steps data. For sleep it's 0/1 because it\'s whether the device detected that I\'m sleeping or not. I over-simplified that on purpose to avoid complicated stuff like sleep phase comparison.
