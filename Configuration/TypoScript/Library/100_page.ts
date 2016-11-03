  #########################
 ## Default PAGE object ##
#########################
page = PAGE
page {

    10 = FLUIDTEMPLATE
    10 {

        ## Path to Partials and Layouts
        partialRootPath = {$resDir}/Private/Partials
        layoutRootPath = {$resDir}/Private/Layouts

        ## Backend Layouts
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = pagelayout

            # Default Template
            default = TEXT
            default.value = {$resDir}/Private/Templates/Default.html

            # Two Columns - Sidebar Template
            pagets__2 = TEXT
            pagets__2.value = {$resDir}/Private/Templates/asideRight.html

        }

    }

    ## CSS include
    includeCSSLibs {
        bootstrapmin = {$resDir}/Public/Bootstrap3/Css/bootstrap.min.css
    }

    includeCSS {
        main = {$resDir}/Public/Css/main.css
        fontawesome = {$resDir}/Public/Css/font-awesome.min.css
    }

    ## JavaScript include
    includeJSLibs {
        jquerymin = {$resDir}/Public/JavaScript/jquery-1.12.4.js
        bootstrapmin = {$resDir}/Public/Bootstrap3/JavaScript/bootstrap.min.js
    }

    includeJSFooter {
        jquerymin = {$resDir}/Public/JavaScript/jquery-1.12.4.js
        bootstrapmin = {$resDir}/Public/Bootstrap3/JavaScript/bootstrap.min.js
        bootstrapmin = {$resDir}/Public/JavaScript/main.js
    }

}

  #####################
 ## Dynamic Content ##
#####################
lib.dynamicContent = COA
lib.dynamicContent {
    5 = LOAD_REGISTER
    5 {
        colPos.cObject = TEXT
        colPos.cObject {
            field = colPos
            ifEmpty.cObject = TEXT
            ifEmpty.cObject {
                value.current = 1
                ifEmpty = 0
            }
        }
        pageUid.cObject = TEXT
        pageUid.cObject {
            field = pageUid
            ifEmpty.data = TSFE:id
        }
        contentFromPid.cObject = TEXT
        contentFromPid.cObject {
            data = DB:pages:{register:pageUid}:content_from_pid
            data.insertData = 1
        }
        wrap.cObject = TEXT
        wrap.cObject {
            field = wrap
        }
    }
    20 < styles.content.get
  	20.select.where = colPos={register:colPos}
  	20.select.where.insertData = 1
  	20.select.pidInList.data = register:pageUid
    90 = RESTORE_REGISTER
}
lib.dynamicContentSlide =< lib.dynamicContent
lib.dynamicContentSlide.20.slide = -1


# Der RTE darf die Klasse "newclass" einer Tabelle zuordnen
RTE.default.buttons.blockstyle.tags.table.allowedClasses := addToList(table)
# Die Klasse "newclass" darf beim Speichern beibehalten werden
RTE.default.proc.allowedClasses := addToList(table)
# Nur wenn Sie auch die Option innerhalb der Auswahlliste stylen wollen:
RTE.classes.table {
    name = Bootstrap Class
}
