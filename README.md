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
* columns 3, 4, 5 represent sleep or steps data. For sleep it's 0/1 because it's whether the device detected that I'm sleeping or not. I over-simplified that on purpose to avoid complicated stuff like sleep phase comparison.

Did you try to correlate this data?
===================================
Of course, my Padawan leader :) I've used the following methodology:
* pick 2 devices and a metric (sleep or steps)
* compute Pearson correlation coefficient between the two time-series
* compute "stddev" correlation coefficient between the two time-series after a formula invented by yours truly (needed a second coefficient as Pearson does not take absolute values into consideration).

Formula for `stddev(x, y)` where x and y are the two timeseries:
__stddev = std(z) / average(zavg)__, where:
* __z[i]__ = x[i] - y[i]
* __zavg__ = average of a list of the mean values between x[i] and y[i] with outliers removed

Caveats:
* I've used two periods for each pair of sensors - all March, and excluding 1st and 2nd. This is because on those 2 days, I was flying across timezones and the devices were not configured correctly.
* On Monday, Wednesday and Friday I usually go to Qwan Ki Do training between 20.30 and 22.00. During that interval, I only wear the BodyMedia sensor (thus you will see big differences in there)
* For sleep, the most granular resolution is per minute, while for steps it's per hour. This is the best I could do to pull the data using everything at hand (even scraping results)
* For Jawbone, in about 50% of the nights I forgot to press the "sleep mode" button, thus I got no sleep analysis. Really annoying!

Correlation results
===================
| Measurement | Algorithm | Time period | Resolution | BM - JB | JB - FB | FB - BM |
| ------------- | ------------- | ----- | ----- | ----- | ----- | ----- |
| Steps | Pearson | 01.03 -> | hourly | 0.79768 | 0.96161 | 0.80869 |
| Steps | Pearson | 01.03 -> | daily | 0.91861 | 0.97338 | 0.95733 |
| Steps | Pearson | 03.03 -> | hourly | 0.92751 | 0.96509 | 0.94692 |
| Steps | Pearson | 03.03 -> | daily | 0.93781 | 0.97795 | 0.95244 |
| Steps | Stddev | 01.03 -> | hourly | 1.38285 | 0.56597 | 1.44420 |
| Steps | Stddev | 01.03 -> | daily | 0.13171 | 0.07289 | 0.08139 |
| Steps | Stddev | 03.03 -> | hourly | 0.78439 | 0.54318 | 0.72679 |
| Steps | Stddev | 03.03 -> | daily | 0.12644 | 0.06807 | 0.08291 |
| | | | | | | |
| Sleep | Pearson | 01.03 -> | minute | 0.66147 | 0.66858 | 0.72884 |
| Sleep | Pearson | 01.03 -> | hourly | 0.73556 | 0.69885 | 0.82961 |
| Sleep | Pearson | 01.03 -> | daily | 0.54553 |  0.41885 | 0.67266 |
| Sleep | Pearson | 03.03 -> | minute | 0.67447 | 0.68180 | 0.75971 |
| Sleep | Pearson | 03.03 -> | hourly | 0.74926 | 0.71177 | 0.86276 |
| Sleep | Pearson | 03.03 -> | daily | 0.58691 | 0.43679 | 0.77625 |
| Sleep | Stddev | 01.03 -> | minute | 4.53214 | 1.37693 | 1.14523 |
| Sleep | Stddev | 01.03 -> | hourly | 1.96155 | 1.24518 | 0.82427 |
| Sleep | Stddev | 01.03 -> | daily | 0.34736 | 0.36867 | 0.16855 |
| Sleep | Stddev | 03.03 -> | minute | 4.67203 | 1.36439 | 1.10743 |
| Sleep | Stddev | 03.03 -> | hourly | 1.95817 | 1.87552 | 0.76691 |
| Sleep | Stddev | 03.03 -> | daily | 0.34514 | 0.38790 | 0.17970 |