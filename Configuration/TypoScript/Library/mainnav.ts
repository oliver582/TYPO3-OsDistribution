## Main Navigation



lib.mainnav = COA
lib.mainnav {
    10 = HMENU
    10 {
        # excludeUidList = 44,45,46,47,48,49,36

        1 = TMENU
        1 {

            wrap = <ul class="nav navbar-nav navbar-main">|</ul>
            expAll = 1
            noBlur = 1
            NO = 1
            NO {

                ATagTitle.field = abstract // description // title
                ATagBeforeWrap = 1
                linkWrap = |
                wrapItemAndSub = <li>|</li>

            }

            ACT < .NO
            ACT {
                wrapItemAndSub = <li class="active">|</li>
            }

            CUR < .ACT
            IFSUB < .NO
            IFSUB {
                doNotLinkIt = 1
                allWrap = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|<b class="caret"></b></a>
                wrapItemAndSub = <li class="dropdown">|</li>
            }

            ACTIFSUB < .IFSUB
            ACTIFSUB {
                wrapItemAndSub = <li class="active dropdown">|</li>
            }

            CURIFSUB < .ACTIFSUB
        }

        2 < .1
        2 {

            wrap = <ul class="dropdown-menu">|</ul>

            SPC = 1
            SPC {
                wrapItemAndSub = <li class="divider"></li><li class="dropdown-header">|</li>
            }

            IFSUB >
            ACTIFSUB >
            CURIFSUB >
        }
        3 < .2
        3 {
            ACT = 1
            ACT.wrapItemAndSub = <li>|</li>
            ACT.ATagTitle.field = abstract // description // title

            wrap = <ul>|</ul>

        }
    }
}

lib.homeLink = TEXT
lib.homeLink {
    value = WebDevPro
    typolink.parameter = 1
    typolink.title = Zur Startseite
    typolink.ATagParams = class="navbar-brand"
}
