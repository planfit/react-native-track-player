## [4.1.1-rc.4](https://github.com/doublesymmetry/react-native-track-player/compare/v4.1.1-rc.3...v4.1.1-rc.4) (2025-09-30)



## 4.1.1-rc.3 (2025-09-30)


### Bug Fixes

* added startForeground to onCreate ([69eab63](https://github.com/doublesymmetry/react-native-track-player/commit/69eab631e0ce550b0770f2f2393afd8ece9325be))
* **android, events:** fix an issue preventing Event.RemoteSeek from being emitted on Android ([#1556](https://github.com/doublesymmetry/react-native-track-player/issues/1556)) ([67e929c](https://github.com/doublesymmetry/react-native-track-player/commit/67e929c31f97d02d98f576ca39b51e7000018f30))
* **android, events:** properly intercept and fire remote playback events ([#1668](https://github.com/doublesymmetry/react-native-track-player/issues/1668)) ([9ed308c](https://github.com/doublesymmetry/react-native-track-player/commit/9ed308c2a8f5bbd4ab69df01a7cfb86047960538))
* **android:** add deep link back ([#1872](https://github.com/doublesymmetry/react-native-track-player/issues/1872)) ([9c227fa](https://github.com/doublesymmetry/react-native-track-player/commit/9c227fa7e0748d3d43dba435ee284e01e18de9bc))
* **android:** Allow partial seconds in progressUpdateEventInterval ([#2165](https://github.com/doublesymmetry/react-native-track-player/issues/2165)) ([e8f3013](https://github.com/doublesymmetry/react-native-track-player/commit/e8f3013784620893d4b4b4c710e79c0b8d8e8261))
* **android:** Allow precise seeking on Android ([#2023](https://github.com/doublesymmetry/react-native-track-player/issues/2023)) ([e98457c](https://github.com/doublesymmetry/react-native-track-player/commit/e98457cfc380ce931293722d743448b509d814b9))
* **android:** Allow setting grace period before stopForeground ([#2164](https://github.com/doublesymmetry/react-native-track-player/issues/2164)) ([b13a922](https://github.com/doublesymmetry/react-native-track-player/commit/b13a92208eaf9607a12cfa7596dfa6ae4f4a4c8e))
* **android:** Allow updating duration in notification ([#2157](https://github.com/doublesymmetry/react-native-track-player/issues/2157)) ([e28536c](https://github.com/doublesymmetry/react-native-track-player/commit/e28536c4b3312d6ccb76c43cc7f7fdd86d1fac41))
* **android:** avoid service crashes ([#1974](https://github.com/doublesymmetry/react-native-track-player/issues/1974)) ([b70fbd7](https://github.com/doublesymmetry/react-native-track-player/commit/b70fbd7663921855f799a60083ca4522e913e6f8)), closes [/github.com/doublesymmetry/react-native-track-player/issues/1666#issuecomment-1481534212](https://github.com//github.com/doublesymmetry/react-native-track-player/issues/1666/issues/issuecomment-1481534212) [/github.com/doublesymmetry/react-native-track-player/pull/1974#discussion_r1147233991](https://github.com//github.com/doublesymmetry/react-native-track-player/pull/1974/issues/discussion_r1147233991)
* **android:** example production build ([#2037](https://github.com/doublesymmetry/react-native-track-player/issues/2037)) ([09c570b](https://github.com/doublesymmetry/react-native-track-player/commit/09c570b8067d3324170e525a1b05cb1bae31fbca))
* **android:** fix an issue causing a crash on android during a getRepeatMode call ([#1580](https://github.com/doublesymmetry/react-native-track-player/issues/1580)) ([44b5614](https://github.com/doublesymmetry/react-native-track-player/commit/44b56147c53e833de7b8fe9b6b26b8413d9ae7d9))
* **android:** fix handling of seek capability ([#1938](https://github.com/doublesymmetry/react-native-track-player/issues/1938)) ([166aa0d](https://github.com/doublesymmetry/react-native-track-player/commit/166aa0d2d4ee7d213d4a41e496592f20e4bbbede))
* **android:** fix issues with asynchronicity by lifting scope.launches into the MusicModule ([#1523](https://github.com/doublesymmetry/react-native-track-player/issues/1523)) ([9c13372](https://github.com/doublesymmetry/react-native-track-player/commit/9c1337283d940d0ef1a0103a7c2672ce058e0838))
* **android:** Fix key in progress updated event ([#2135](https://github.com/doublesymmetry/react-native-track-player/issues/2135)) ([f7c6762](https://github.com/doublesymmetry/react-native-track-player/commit/f7c676218595de751134f34906dccb0ebdcc1bff))
* **android:** fix state constants ([#1751](https://github.com/doublesymmetry/react-native-track-player/issues/1751)) ([7215e64](https://github.com/doublesymmetry/react-native-track-player/commit/7215e641615a1526e536d5f0e7bb6b0bb2b6d0f7))
* **android:** Fix updating metadata and reset ([#2087](https://github.com/doublesymmetry/react-native-track-player/issues/2087)) ([d6903fd](https://github.com/doublesymmetry/react-native-track-player/commit/d6903fd14f08155ccff92d5bf9f095dbb74de559))
* **android:** foreground issues & notification icon ([#2048](https://github.com/doublesymmetry/react-native-track-player/issues/2048)) ([dc4fb1d](https://github.com/doublesymmetry/react-native-track-player/commit/dc4fb1d90d243d6f0fce2f83af173faf5a8eef49)), closes [#2045](https://github.com/doublesymmetry/react-native-track-player/issues/2045) [#2049](https://github.com/doublesymmetry/react-native-track-player/issues/2049)
* **android:** improved foreground service handling ([#2034](https://github.com/doublesymmetry/react-native-track-player/issues/2034)) ([18a17c7](https://github.com/doublesymmetry/react-native-track-player/commit/18a17c744d789363b777f0967e7319239fd3cac2))
* **android:** issue where loading a new track after end required seek to start ([#2174](https://github.com/doublesymmetry/react-native-track-player/issues/2174)) ([d845eec](https://github.com/doublesymmetry/react-native-track-player/commit/d845eec5757abeb0067320f265b27678209c54b1))
* **android:** move the kotlin-gradle-plugin dependency into the library dependencies ([#1446](https://github.com/doublesymmetry/react-native-track-player/issues/1446)) ([9289cce](https://github.com/doublesymmetry/react-native-track-player/commit/9289ccea2e46c2611505f5075ddbd97044b58543))
* **android:** resolve asset ([#2194](https://github.com/doublesymmetry/react-native-track-player/issues/2194)) ([de75ea7](https://github.com/doublesymmetry/react-native-track-player/commit/de75ea7e29f53853bdca8d41fb06b64aa065d55a))
* **android:** resolve problem with StopPlaybackAndRemoveNotification not working on subsequent exists ([#1762](https://github.com/doublesymmetry/react-native-track-player/issues/1762)) ([e742959](https://github.com/doublesymmetry/react-native-track-player/commit/e742959cc1d697d69daeade39830155bce2ccde7))
* **android:** updateOptions spread ([#2108](https://github.com/doublesymmetry/react-native-track-player/issues/2108)) ([baeaf4c](https://github.com/doublesymmetry/react-native-track-player/commit/baeaf4cf8cacb7d31138df133472d851647487e0))
* **android:** use “none” instead of “idle” for none state ([#1924](https://github.com/doublesymmetry/react-native-track-player/issues/1924)) ([e125045](https://github.com/doublesymmetry/react-native-track-player/commit/e125045106ad3db125a09dc60dab2acc3334f01c))
* **bump minimum windows version:** bump windows WindowsTargetPlatformVersion ([#2010](https://github.com/doublesymmetry/react-native-track-player/issues/2010)) ([32baacd](https://github.com/doublesymmetry/react-native-track-player/commit/32baacdfdcbf5edb81a8a3199fdf30896dcce0cc))
* clears queue on iOS when you call reset() ([#1900](https://github.com/doublesymmetry/react-native-track-player/issues/1900)) ([e3c670a](https://github.com/doublesymmetry/react-native-track-player/commit/e3c670a822488565b923300be76e70a8c492fec4))
* **component:** fixed example slider to include tap events and error styling ([#2376](https://github.com/doublesymmetry/react-native-track-player/issues/2376)) ([a486121](https://github.com/doublesymmetry/react-native-track-player/commit/a486121912eda10981c0c80a307fa7fb40998d0c))
* **docs:** typo ([#2322](https://github.com/doublesymmetry/react-native-track-player/issues/2322)) ([e049abb](https://github.com/doublesymmetry/react-native-track-player/commit/e049abbd935493bc40cd0a4d9edc25a804dd94ab))
* don't emit `PlaybackTrackChanged` along with `PlaybackQueueEnded` on Android ([#2161](https://github.com/doublesymmetry/react-native-track-player/issues/2161)) ([fa62085](https://github.com/doublesymmetry/react-native-track-player/commit/fa6208586e03153c5d1a1d8378552e6a579d2421))
* **example, ios:** remove Capability.Stop ([#1671](https://github.com/doublesymmetry/react-native-track-player/issues/1671)) ([49800ab](https://github.com/doublesymmetry/react-native-track-player/commit/49800ab81f9dbc34a136632a3c7623666e1ae95d))
* handle ForegroundServiceStartNotAllowedException on Android 12+ ([1bff073](https://github.com/doublesymmetry/react-native-track-player/commit/1bff0732a5688c6c69f28c1a6601912c7206d5d4))
* **hooks:**  fix issues with excessive number of pending callbacks  ([#1686](https://github.com/doublesymmetry/react-native-track-player/issues/1686)) ([1b5bb02](https://github.com/doublesymmetry/react-native-track-player/commit/1b5bb02bbe1457902949ebd9c29829ba4998eb07))
* **hooks:** fix useTrackPlayerEvents dependencies ([#1672](https://github.com/doublesymmetry/react-native-track-player/issues/1672)) ([f6229d6](https://github.com/doublesymmetry/react-native-track-player/commit/f6229d68c2cdb650b90c38fa47f7e40d0028dfee))
* **hooks:** updates setting initial playback state in usePlaybackState hook ([417f3c4](https://github.com/doublesymmetry/react-native-track-player/commit/417f3c4cdf26c2db8551eeae6f84eed69f532e77)), closes [#1931](https://github.com/doublesymmetry/react-native-track-player/issues/1931)
* **hooks:** useProgress & usePlayback hooks ([#1723](https://github.com/doublesymmetry/react-native-track-player/issues/1723)) ([31fa40a](https://github.com/doublesymmetry/react-native-track-player/commit/31fa40acafed2d4bb09a718e4c51879fb1c7e747))
* **ios, android:** implement parity between android and ios for playback-track-changed event ([#1501](https://github.com/doublesymmetry/react-native-track-player/issues/1501)) ([ebed5d4](https://github.com/doublesymmetry/react-native-track-player/commit/ebed5d4f1d98c773e5c2a33fc753f92adbd33bac))
* **ios, events:** fix an issue with PlaybackQueueEnded resulting from a race condition ([#1750](https://github.com/doublesymmetry/react-native-track-player/issues/1750)) ([e938c68](https://github.com/doublesymmetry/react-native-track-player/commit/e938c68a1968c8a0fa4aa1019d0343c04a427d60))
* **ios, stop, event.playbackprogressupdated:** make the iOS API the same as the Android API for stop ([#1529](https://github.com/doublesymmetry/react-native-track-player/issues/1529)) ([249a07f](https://github.com/doublesymmetry/react-native-track-player/commit/249a07f5e85ab2315bc7eba32d147ea5392eee0b))
* **ios, track:** fix issues with the setting & unsetting of track artwork ([#1528](https://github.com/doublesymmetry/react-native-track-player/issues/1528)) ([8d159e1](https://github.com/doublesymmetry/react-native-track-player/commit/8d159e1ec90a83b13654d5ba2486df7209176f31))
* **ios:** avoid prematurely activating audio session ([#2146](https://github.com/doublesymmetry/react-native-track-player/issues/2146)) ([1752a7c](https://github.com/doublesymmetry/react-native-track-player/commit/1752a7c0adf18d6ba392b9acc3b5cdde3ac5e12c))
* **ios:** emit state passed to handleAudioPlayerStateChange ([#1928](https://github.com/doublesymmetry/react-native-track-player/issues/1928)) ([a65fdcd](https://github.com/doublesymmetry/react-native-track-player/commit/a65fdcd5f913e20ffcdf45bb1d814d51ffe255ae))
* **ios:** fix an issue on iOS which required both artist & title to be provided on tracks ([#1481](https://github.com/doublesymmetry/react-native-track-player/issues/1481)) ([d46946c](https://github.com/doublesymmetry/react-native-track-player/commit/d46946cd9d5af5c0d29cc08cbe5e80cbc26f94e8))
* **ios:** fix an issue with `reset()` causing a crash on iOS due to out of range exception ([#1589](https://github.com/doublesymmetry/react-native-track-player/issues/1589)) ([035ca43](https://github.com/doublesymmetry/react-native-track-player/commit/035ca434e8ca3180c0cd8a7790519f74f4444023))
* **ios:** fix crash adding output when load is called too fast ([#2176](https://github.com/doublesymmetry/react-native-track-player/issues/2176)) ([4114403](https://github.com/doublesymmetry/react-native-track-player/commit/41144036554d3299ccd3c1f5cdba6cc825b6cacd))
* **ios:** fix various issues in iOS by upgrading SwiftAudioEx ([#1738](https://github.com/doublesymmetry/react-native-track-player/issues/1738)) ([224c491](https://github.com/doublesymmetry/react-native-track-player/commit/224c4910e4c3fe2164ac1cbf0bb3f61810062d48))
* **ios:** prevents overwriting of forward/backward secs ([#1855](https://github.com/doublesymmetry/react-native-track-player/issues/1855)) ([fb594c7](https://github.com/doublesymmetry/react-native-track-player/commit/fb594c77b2f80ecf90995893c0158cc8cd11baa0)), closes [#1853](https://github.com/doublesymmetry/react-native-track-player/issues/1853)
* **ios:** rate in command center progress ([#2173](https://github.com/doublesymmetry/react-native-track-player/issues/2173)) ([4f77294](https://github.com/doublesymmetry/react-native-track-player/commit/4f77294309b0e371852fc9657ddd017043782832))
* **rate:** Fix rate for iOS ([#2128](https://github.com/doublesymmetry/react-native-track-player/issues/2128)) ([1bf0db1](https://github.com/doublesymmetry/react-native-track-player/commit/1bf0db14f9320e6a9174e72d228881c678c42928))
* remove prepare ([17d0d05](https://github.com/doublesymmetry/react-native-track-player/commit/17d0d05e3cd9939fe41a4a958c3f0700a60fb5fb))
* remove prepare ([ae23b12](https://github.com/doublesymmetry/react-native-track-player/commit/ae23b120b0c1a175810e03c4db2c9589e43d7e6f))
* removeNotificationWhenNotOngoing ([#2181](https://github.com/doublesymmetry/react-native-track-player/issues/2181)) ([429279a](https://github.com/doublesymmetry/react-native-track-player/commit/429279a8dd21105c1deff3e639150da349fd9143))
* resolving imported local assets ([#2033](https://github.com/doublesymmetry/react-native-track-player/issues/2033)) ([efecf3e](https://github.com/doublesymmetry/react-native-track-player/commit/efecf3e0a1c5bf56dbae85aa1553c1c6f94109af))
* revert prepare ([6f29ed4](https://github.com/doublesymmetry/react-native-track-player/commit/6f29ed4dc147af31ad4846af582a5f35b8ea3d40))
* **ts:** add `null` to getCurrentTrack return type ([#1681](https://github.com/doublesymmetry/react-native-track-player/issues/1681)) ([096ec68](https://github.com/doublesymmetry/react-native-track-player/commit/096ec68bc0c3150f02c068ed20dd07f0ddf53e35))
* **ts:** Fix type inference in useTrackPlayerEvents ([#2131](https://github.com/doublesymmetry/react-native-track-player/issues/2131)) ([fff7940](https://github.com/doublesymmetry/react-native-track-player/commit/fff7940d1bd08f5b62a26249a8d2e71ccf77d310))
* **types:** MetadataTimedReceived payload type ([#2148](https://github.com/doublesymmetry/react-native-track-player/issues/2148)) ([2b53b88](https://github.com/doublesymmetry/react-native-track-player/commit/2b53b88d98d3e53e1b13e1eab3271b85dec7eff6))
* typo ([#1649](https://github.com/doublesymmetry/react-native-track-player/issues/1649)) ([ec6d6f6](https://github.com/doublesymmetry/react-native-track-player/commit/ec6d6f68a886b9cd0bdbd2d8c8e60be85a502ef7))
* useIsPlaying hook does not cover 'none' state ([#2125](https://github.com/doublesymmetry/react-native-track-player/issues/2125)) ([1a6bc5b](https://github.com/doublesymmetry/react-native-track-player/commit/1a6bc5b54503e57537f44fa5e5c025e177abb154))
* **web:** Fix error message when calling setupPlayer twice ([#2364](https://github.com/doublesymmetry/react-native-track-player/issues/2364)) ([bc55ca1](https://github.com/doublesymmetry/react-native-track-player/commit/bc55ca13b9136225b148449fa60e341b0c090be8))
* **web:** fix issues with certain bundlers only containing `default` … ([#2299](https://github.com/doublesymmetry/react-native-track-player/issues/2299)) ([a89d785](https://github.com/doublesymmetry/react-native-track-player/commit/a89d7856c25e2cf5a440e996dd4976292b67feda))
* **web:** fix issues with repeat mode and track add logic ([#2291](https://github.com/doublesymmetry/react-native-track-player/issues/2291)) ([6c4a3bd](https://github.com/doublesymmetry/react-native-track-player/commit/6c4a3bd7d47c6ba8c85db4c1d031dc904bb0cd1a))


* Improve hook for getting progress ([5daf491](https://github.com/doublesymmetry/react-native-track-player/commit/5daf4912e5ca535b119eec3b893d77a800c24aa5))


### Features

* **android:** add back option to remove notification ([#1730](https://github.com/doublesymmetry/react-native-track-player/issues/1730)) ([82a5df9](https://github.com/doublesymmetry/react-native-track-player/commit/82a5df9ec62476b05bbef6f5d18ca9b0b801d298))
* **android:** add string values to State enum ([#1734](https://github.com/doublesymmetry/react-native-track-player/issues/1734)) ([bd48c2d](https://github.com/doublesymmetry/react-native-track-player/commit/bd48c2d6de2a56e0a96be8dd47bc316ea0dcd8cf)), closes [#1688](https://github.com/doublesymmetry/react-native-track-player/issues/1688)
* **android:** default the behavior to handle audio becoming noisy ([#1732](https://github.com/doublesymmetry/react-native-track-player/issues/1732)) ([dabf715](https://github.com/doublesymmetry/react-native-track-player/commit/dabf71566cba1cc9fba48899ad6be58e59a90212))
* **android:** media control notification naming customize ([#2182](https://github.com/doublesymmetry/react-native-track-player/issues/2182)) ([12144e7](https://github.com/doublesymmetry/react-native-track-player/commit/12144e73488850440c969c9ac1fff853e383d7b0))
* **ios:** deprecate waitForBuffer ([#1695](https://github.com/doublesymmetry/react-native-track-player/issues/1695)) ([d277182](https://github.com/doublesymmetry/react-native-track-player/commit/d27718295cecc88886db2cbe96666c9c50d34b34))
* **ios:** improve disabling of playback-progress-updated ([#1706](https://github.com/doublesymmetry/react-native-track-player/issues/1706)) ([57de8b5](https://github.com/doublesymmetry/react-native-track-player/commit/57de8b5e12c05bed093a754474b2e4e0e8597578))
* React hook 🎣 for TrackPlayer events ([#573](https://github.com/doublesymmetry/react-native-track-player/issues/573)) ([6a61d81](https://github.com/doublesymmetry/react-native-track-player/commit/6a61d8105ebb2936307a9aa0e4b28c313f8eb1c0))
* **release:** bump to v4.1.0 ([#2276](https://github.com/doublesymmetry/react-native-track-player/issues/2276)) ([4ce34b7](https://github.com/doublesymmetry/react-native-track-player/commit/4ce34b749b79e15e996b0e6cb603b90cc5f54d11))
* **release:** bump to v4.1.1 ([#2279](https://github.com/doublesymmetry/react-native-track-player/issues/2279)) ([db86df1](https://github.com/doublesymmetry/react-native-track-player/commit/db86df1a6c6a2c1e5af0da3d94b35c4c4120b162))
* remove audio session management ([257b9b3](https://github.com/doublesymmetry/react-native-track-player/commit/257b9b3deff48297bdb58ead536768e4077400fa))
* type support for event listener ([#1640](https://github.com/doublesymmetry/react-native-track-player/issues/1640)) ([958a330](https://github.com/doublesymmetry/react-native-track-player/commit/958a33018d319ce8c30e90590f532c505e8707a2))
* use planfit created player ([1da2d2e](https://github.com/doublesymmetry/react-native-track-player/commit/1da2d2e0bb4d711cb149aa4f60d620cf8001ceb3))
* useIsPlaying hook and isPlaying() method ([#2040](https://github.com/doublesymmetry/react-native-track-player/issues/2040)) ([8331979](https://github.com/doublesymmetry/react-native-track-player/commit/83319792225a9197a3187a33543a341aebdf70b3))
* **web:** add a web implementation ([#1886](https://github.com/doublesymmetry/react-native-track-player/issues/1886)) ([9aded62](https://github.com/doublesymmetry/react-native-track-player/commit/9aded62a405e75b0940d3556e1517447363f5153))
* **web:** add setQueue method ([#2394](https://github.com/doublesymmetry/react-native-track-player/issues/2394)) ([2765d09](https://github.com/doublesymmetry/react-native-track-player/commit/2765d09cb93541d89be94a4809320e4df33c0d47))


### Reverts

* Revert "Remove old module files" ([f09e49b](https://github.com/doublesymmetry/react-native-track-player/commit/f09e49bb89b808da37801c6902f4267df7fcb9f9))
* Revert "Try to upgrade Gradle" ([48685de](https://github.com/doublesymmetry/react-native-track-player/commit/48685dee73372e30f57bf9ac3aa9bc0695b56893))
* Revert "fix issue with url + fix bug (#522)" (#630) ([c558565](https://github.com/doublesymmetry/react-native-track-player/commit/c55856539567f639d6d8a2981057a071bc5e57f7)), closes [#522](https://github.com/doublesymmetry/react-native-track-player/issues/522) [#630](https://github.com/doublesymmetry/react-native-track-player/issues/630)
* Revert "Add the ability to update trackMetadata (#331)" (#537) ([bd657aa](https://github.com/doublesymmetry/react-native-track-player/commit/bd657aafa47de15733dd1347272494969fb6478c)), closes [#331](https://github.com/doublesymmetry/react-native-track-player/issues/331) [#537](https://github.com/doublesymmetry/react-native-track-player/issues/537)
* Revert "[ios] Fix constantsToExport build issue (#70)" ([aa83027](https://github.com/doublesymmetry/react-native-track-player/commit/aa8302756baa732a21878cf100a3541a530535b7)), closes [#70](https://github.com/doublesymmetry/react-native-track-player/issues/70)


### BREAKING CHANGES

* name update and properties



# [4.1.1](https://github.com/doublesymmetry/react-native-track-player/compare/v4.1.0...v4.1.1) (2024-03-26)

- **RN:** Fixes an issue when using local assets in release builds

# [4.1.0](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.1...v4.1.0) (2024-03-25)

- **web:** First beta version of RNTP for web
- **RN:** Massively reduce npm package size
- **android:** Fix: add namespace to support gradle 8
- **android:** Improvement: add http headers to notification artwork request
- **android:** Improvement: use http data source for local urls
- **android:** Improvement: use SVGs for notification icons
- **android:** Improvement: specify key when returning key error
- **ios:** Improvement: improve internal use of playWhenReady to avoid issue where we'd load two tracks at once
- **ios:** Fix: return correct already intialized error code
- **ios:** Fix: avoid emitting empty common metadata
- **ios:** Fix: occasional crash due to attaching metadata output
- **ios:** Fix: sometimes progress bar would be broken after repeat

# [4.0.1](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0...v4.0.1) (2023-10-31)

- **android:** Fix: notification dissapearing in background
- **android:** Allow overriding notification channel name and description

# [4.0.0](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc09...v4.0.0) (2023-10-20)

- **RN:** New metadata events have a new `metadata` property that contains the metadata that was received
- **android:** Fix: allow updating duration in notification metadata
- **ios:** Avoid prematurely activating audio session
- **android:** Fix: don't emit both PlaybackTrackChanged when queue ends (parity with iOS)
- **android:** Fix: allow progressUpdateEventInterval to be set to a decimal value (partial seconds)
- **android:** Support for setting grace period before stopForeground (defaults to 5 seconds)
- **ios:** Fix: updating rate will immediately reflect in control center
- **android** Fix: issue where loading a new track after end required seek to start
- **ios:** Fix: crash adding output when load is called too fast

# [4.0.0-rc09](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc08...v4.0.0-rc09) (2023-09-22)

- **RN:** useIsPlaying hook now takes into account `none` state
- **ios:** Fixes issue where rate was being reset to 1 on play
- **ios:** Deactivates session before activating on play to avoid issues when losing focus in some scenarios
- **RN:** Deprecated `Event.PlaybackMetadataReceived` and introduces three new events: [`Event.AudioChapterMetadataReceived`, `Event.AudioTimedMetadataReceived`, `Event.AudioCommonMetadataReceived`]
- **ios:** Change default pitch algorithm to `timeDomain` instead of `lowQualityZeroLatency`
- **android:** Fixes progress in notification for HLS audio

# [4.0.0-rc08](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc07...v4.0.0-rc08) (2023-09-07)

- **RN:** Undeprecate updateNowPlayingMetadata
- **android:** Restore notification image caching
- **RN:** Fix issue with updateOptions and local images
- **ios:** Activate session on play to avoid issues with background audio
- **ios:** Second fix for repeat mode
- **ios:** Correctly update control center progress when pausing/playing

# [4.0.0-rc07](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc06...v4.0.0-rc07) (2023-08-11)

- **ios:** Fix firing of `EventType.PlaybackQueueEnded` (fixes #2038)
- **android:** Avoid emitting track changed when replaying the same track
- **android:** Fixed a regression where `reset()` wasn't clearing notification properly
- **android:** Resolved a where the update metadata method was not working

# [4.0.0-rc06](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc05...v4.0.0-rc06) (2023-07-25)

- **ios:** Fix iOS not repeating track in RepeatMode.Track
- **RN:** Improve types on asset types
- **android:** Fix foreground issues and notification item
- **ios** Fix race conditions in player property setting
- **android:** Improve notification updates when spamming notification buttons
- **android** Fix AudioPlayerState.IDLE when queue emptied
- **android** Improve metadata handling

# [4.0.0-rc05](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc04...v4.0.0-rc05) (2023-06-26)

- **ios:** Fix crash on getting current item
- **android:** Improve preciseness of seeking
- **android:** Improve handling of service foregrounding

# [4.0.0-rc03](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc02...v4.0.0-rc03) (2023-03-28)

- **android:** Fixes compilation issue due to uses of Lifecycle (updates kotlin gradle plugin)

# [4.0.0-rc02](https://github.com/doublesymmetry/react-native-track-player/compare/v4.0.0-rc01...v4.0.0-rc02) (2023-03-27)

### Bug Fixes

- **android:** Fix ANR crashes ([#1974](https://github.com/doublesymmetry/react-native-track-player/issues/1974)) ([b70fbd7](https://github.com/doublesymmetry/react-native-track-player/commit/b70fbd7663921855f799a60083ca4522e913e6f8)
- **android:** Fix removeUpcomingItems ([#67](https://github.com/doublesymmetry/KotlinAudior/issues/67))
- **android:** Notification fixes

- **ios:** Fix removing items from queue other than the current track ([#41](https://github.com/doublesymmetry/SwiftAudioEx/issues/41))
- **ios:** Fix player state not becoming paused after loading ([#46](https://github.com/doublesymmetry/SwiftAudioEx/issues/46))
- **ios:** Fix current item not being updated when removing items from queue ([#45](https://github.com/doublesymmetry/SwiftAudioEx/issues/45))
- **ios:** Avoid calling onSkippedToSameCurrentItem when track before is removed ([#45](https://github.com/doublesymmetry/SwiftAudioEx/issues/45))

# [4.0.0-rc01](https://github.com/doublesymmetry/react-native-track-player/compare/v3.2.0...v4.0.0-rc01) (2023-03-14)

### Bug Fixes

- **android:** add deep link back ([#1872](https://github.com/doublesymmetry/react-native-track-player/issues/1872)) ([9c227fa](https://github.com/doublesymmetry/react-native-track-player/commit/9c227fa7e0748d3d43dba435ee284e01e18de9bc))
- **android:** fix handling of seek capability ([#1938](https://github.com/doublesymmetry/react-native-track-player/issues/1938)) ([166aa0d](https://github.com/doublesymmetry/react-native-track-player/commit/166aa0d2d4ee7d213d4a41e496592f20e4bbbede))
- **android:** resolve problem with StopPlaybackAndRemoveNotification not working on subsequent exists ([#1762](https://github.com/doublesymmetry/react-native-track-player/issues/1762)) ([e742959](https://github.com/doublesymmetry/react-native-track-player/commit/e742959cc1d697d69daeade39830155bce2ccde7))
- **android:** use “none” instead of “idle” for none state ([#1924](https://github.com/doublesymmetry/react-native-track-player/issues/1924)) ([e125045](https://github.com/doublesymmetry/react-native-track-player/commit/e125045106ad3db125a09dc60dab2acc3334f01c))
- clears queue on iOS when you call reset() ([#1900](https://github.com/doublesymmetry/react-native-track-player/issues/1900)) ([e3c670a](https://github.com/doublesymmetry/react-native-track-player/commit/e3c670a822488565b923300be76e70a8c492fec4))
- **hooks:** updates setting initial playback state in usePlaybackState hook ([417f3c4](https://github.com/doublesymmetry/react-native-track-player/commit/417f3c4cdf26c2db8551eeae6f84eed69f532e77)), closes [#1931](https://github.com/doublesymmetry/react-native-track-player/issues/1931)
- **ios:** emit state passed to handleAudioPlayerStateChange ([#1928](https://github.com/doublesymmetry/react-native-track-player/issues/1928)) ([a65fdcd](https://github.com/doublesymmetry/react-native-track-player/commit/a65fdcd5f913e20ffcdf45bb1d814d51ffe255ae))
- **ios:** prevents overwriting of forward/backward secs ([#1855](https://github.com/doublesymmetry/react-native-track-player/issues/1855)) ([fb594c7](https://github.com/doublesymmetry/react-native-track-player/commit/fb594c77b2f80ecf90995893c0158cc8cd11baa0)), closes [#1853](https://github.com/doublesymmetry/react-native-track-player/issues/1853)

# [3.2.0](https://github.com/doublesymmetry/react-native-track-player/compare/v3.1.0...v3.2.0) (2022-09-23)

### Bug Fixes

- **android, events:** properly intercept and fire remote playback events ([#1668](https://github.com/doublesymmetry/react-native-track-player/issues/1668)) ([9ed308c](https://github.com/doublesymmetry/react-native-track-player/commit/9ed308c2a8f5bbd4ab69df01a7cfb86047960538))
- **android:** fix state constants ([#1751](https://github.com/doublesymmetry/react-native-track-player/issues/1751)) ([7215e64](https://github.com/doublesymmetry/react-native-track-player/commit/7215e641615a1526e536d5f0e7bb6b0bb2b6d0f7))
- **example, ios:** remove Capability.Stop ([#1671](https://github.com/doublesymmetry/react-native-track-player/issues/1671)) ([49800ab](https://github.com/doublesymmetry/react-native-track-player/commit/49800ab81f9dbc34a136632a3c7623666e1ae95d))
- **hooks:** fix issues with excessive number of pending callbacks ([#1686](https://github.com/doublesymmetry/react-native-track-player/issues/1686)) ([1b5bb02](https://github.com/doublesymmetry/react-native-track-player/commit/1b5bb02bbe1457902949ebd9c29829ba4998eb07))
- **hooks:** fix useTrackPlayerEvents dependencies ([#1672](https://github.com/doublesymmetry/react-native-track-player/issues/1672)) ([f6229d6](https://github.com/doublesymmetry/react-native-track-player/commit/f6229d68c2cdb650b90c38fa47f7e40d0028dfee))
- **hooks:** useProgress & usePlayback hooks ([#1723](https://github.com/doublesymmetry/react-native-track-player/issues/1723)) ([31fa40a](https://github.com/doublesymmetry/react-native-track-player/commit/31fa40acafed2d4bb09a718e4c51879fb1c7e747))
- **ios, events:** fix an issue with PlaybackQueueEnded resulting from a race condition ([#1750](https://github.com/doublesymmetry/react-native-track-player/issues/1750)) ([e938c68](https://github.com/doublesymmetry/react-native-track-player/commit/e938c68a1968c8a0fa4aa1019d0343c04a427d60))
- **ios:** fix various issues in iOS by upgrading SwiftAudioEx ([#1738](https://github.com/doublesymmetry/react-native-track-player/issues/1738)) ([224c491](https://github.com/doublesymmetry/react-native-track-player/commit/224c4910e4c3fe2164ac1cbf0bb3f61810062d48))
- **ts:** add `null` to getCurrentTrack return type ([#1681](https://github.com/doublesymmetry/react-native-track-player/issues/1681)) ([096ec68](https://github.com/doublesymmetry/react-native-track-player/commit/096ec68bc0c3150f02c068ed20dd07f0ddf53e35))

### Features

- **android:** add back option to remove notification ([#1730](https://github.com/doublesymmetry/react-native-track-player/issues/1730)) ([82a5df9](https://github.com/doublesymmetry/react-native-track-player/commit/82a5df9ec62476b05bbef6f5d18ca9b0b801d298))
- **android:** add string values to State enum ([#1734](https://github.com/doublesymmetry/react-native-track-player/issues/1734)) ([bd48c2d](https://github.com/doublesymmetry/react-native-track-player/commit/bd48c2d6de2a56e0a96be8dd47bc316ea0dcd8cf)), closes [#1688](https://github.com/doublesymmetry/react-native-track-player/issues/1688)
- **android:** default the behavior to handle audio becoming noisy ([#1732](https://github.com/doublesymmetry/react-native-track-player/issues/1732)) ([dabf715](https://github.com/doublesymmetry/react-native-track-player/commit/dabf71566cba1cc9fba48899ad6be58e59a90212))
- **ios:** deprecate waitForBuffer ([#1695](https://github.com/doublesymmetry/react-native-track-player/issues/1695)) ([d277182](https://github.com/doublesymmetry/react-native-track-player/commit/d27718295cecc88886db2cbe96666c9c50d34b34))
- **ios:** improve disabling of playback-progress-updated ([#1706](https://github.com/doublesymmetry/react-native-track-player/issues/1706)) ([57de8b5](https://github.com/doublesymmetry/react-native-track-player/commit/57de8b5e12c05bed093a754474b2e4e0e8597578))

## 3.1.0 (18.08.22)

##### Enhancements

- Uses latest KotlinAudio which does not use ExoPlayer fork.
- Adds back support for bluetooth playback control.

##### Bug Fixes

- Fixes crash with `reset()` on Android.
- Removes `destroy()` on iOS - this was missed.
- Removes the `stop()` method -- use `pause()` instead.

## 3.0.0 (11.08.22)

We are changing how the audio service handles its lifecycle. Previously we had the stopWithApp bool that would try and stop the service when you remove the app from recents, but due to how Android handles foreground services the OS never stops the app process, as it's waiting for the foreground service to come back. We are embracing this and going with what other audio apps (Spotify, Soundcloud, Google Podcast etc.) are doing.

##### Enhancements

- Rewrite Android module in Kotlin and using KotlinAudio.
  [mpivchev](

##### Breaking

- stopWithApp turns into stoppingAppPausesPlayback
- `destroy()` is no longer available
-

##### Bug Fixes

- Fix crash with `reset()` on Android.
  [dcvz](https://github.com/dcvz)

## 2.1.3 (30.03.22)

##### Enhancements

- Add property `isLiveStream` to `Track` for correct display in iOS control center.
  [dcvz](https://github.com/dcvz)

- [iOS] Improve method documentation
  [alpha0010](https://github.com/alpha0010)

- [Android] Add isServiceRunning method
  [biomancer](https://github.com/biomancer)

##### Bug Fixes

- [iOS] Fix track loop crash in certain cases
  [mmmoussa](https://github.com/mmmoussa)

- [iOS] Fix seek after play
  [jspizziri](https://github.com/jspizziri)

- [Android] Support Android 12 devices
  [abhaydee](https://github.com/abhaydee)

- [iOS] Add method resolves promise with index
  [formula1](https://github.com/formula1)

- Fix getTrack return type
  [puckey](https://github.com/puckey)

- [iOS] Fix ambient session not working
  [grubicv](https://github.com/grubicv)

- [Android] Android 12 and higher bug fix
  [martin-richter-uk](https://github.com/martin-richter-uk)

- [iOS] Update SwiftAudioEx to 0.14.6 to avoid LICENSE warning
  [dcvz](https://github.com/dcvz)

- Make react-native-windows and optional peer dependency (#1324).
  [jspizziri](https://github.com/jspizziri)

## 2.1.2 (25.10.21)

##### Enhancements

- None.

##### Bug Fixes

- Update SwiftAudioEx - Fixes issues with flickering notifications + pause between loads

- Fix cyclic require warning regression
  [#1057](https://github.com/DoubleSymmetry/react-native-track-player/issues/1057)

- [ios] Fix `PlaybackQueueEnded` event to be called only when the track ends
  [#1243](https://github.com/DoubleSymmetry/react-native-track-player/issues/1243)

## 2.1.1 (25.09.21)

##### Enhancements

- [ios] Fix getCurrentTrack returns undefined instead of null
- [ios] Fix getTrack returning undefined instead of nil
- Fix an issue with next/previous in the control center stopping playing on iOS15

##### Bug Fixes

- None.

## 2.1.0 (16.09.21)

##### Enhancements

- None.

##### Bug Fixes

- Remove Support for iOS 10 & Support Xcode 13
  [dcvz](https://github.com/dcvz)
  [#1186](https://github.com/DoubleSymmetry/react-native-track-player/issues/1186)

  - **NOTE: Requires minimum deployment target to be updated to iOS 11.**

- Reset initialization on destroy
  [sreten-bild](https://github.com/sreten-bild)

- Fix `onTaskRemoved` NullPointerException
  [Markario](https://github.com/Markario)

## 2.0.3 (19.08.21)

##### Enhancements

- None.

##### Bug Fixes

- Fix `Event.PlaybackQueueEnded` firing on initialization on Android
  [dcvz](https://github.com/dcvz)
  [#1229](https://github.com/DoubleSymmetry/react-native-track-player/issues/1229)

- Make `useProgress` unmount aware.
  [lyswhut](https://github.com/lyswhut)

- Make `usePlaybackState` unmount aware.
  [dcvz](https://github.com/dcvz)

## 2.0.2 (15.08.21)

##### Enhancements

- Import SwiftAudioEx through podspec
  [dcvz](https://github.com/dcvz)

##### Bug Fixes

- `useProgress` hook should update while paused
  [dcvz](https://github.com/dcvz)

## 2.0.1 (11.08.21)

##### Enhancements

- None.

##### Bug Fixes

- Add `startForeground` to `onCreate`.
  [Bang9](https://github.com/Bang9)
  [#620](https://github.com/DoubleSymmetry/react-native-track-player/issues/620)
  [#524](https://github.com/DoubleSymmetry/react-native-track-player/issues/524)
  [#473](https://github.com/DoubleSymmetry/react-native-track-player/issues/473)
  [#391](https://github.com/DoubleSymmetry/react-native-track-player/issues/391)

- Fix compilation of Windows module.
  [dcvz](https://github.com/dcvz)

- Fix regression in updating artwork on `updateMetadata` and `updateNowPlayingMetadata`
  [dcvz](https://github.com/dcvz)
  [#662](https://github.com/DoubleSymmetry/react-native-track-player/issues/662#issuecomment-896370375)
