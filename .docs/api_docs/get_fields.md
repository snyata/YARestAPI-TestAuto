## GET all test fields

**ENDPOINT** GET  /qcbin/rest/domains/DOMAIN_NAME/projects/PROJECT_NAME/customization/entities/test/fields
Accept: application/json


```json
{
    "Fields": {
        "Field": [
            {
                "size": 1,
                "history": false,
                "required": false,
                "system": true,
                "type": "String",
                "time": false,
                "verify": false,
                "virtual": true,
                "active": false,
                "editable": false,
                "filterable": false,
                "groupable": false,
                "supportsMultivalue": false,
                "visible": true,
                "searchable": false,
                "versionControlled": false,
                "label": "Asset relation dependencies status",
                "name": "has-dependencies",
                "physicalName": "TS_HAS_DEPENDENCIES",
                "fieldRelationReferences": {
                    "referenceTypeField": null,
                    "references": []
                },
                "visibleInWebUI": true,
                "description": "",
                "canChangeRequired": true
            }
            …
       ]
    }
}