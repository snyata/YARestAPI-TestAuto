https://admhelp.microfocus.com/alm/api_refs/REST_core/Content/REST_API_Core/General/Exceptions.html

qccore.bulk-operation-failed	A bulk operation failed, wholly or in part. See Bulk operations.
qccore.check-in-failure	Check-in operation failed.
qccore.check-out-failure	Check-out operation failed.
qccore.entity-not-found	Attempt to access resource that does not exist. For example, querying an entity ID that does not exist in the project.
qccore.general-error	The default error thrown on any failure where a specific error cause cannot be identified
qccore.invalid-filter-expression	Error in filter. Common problems are syntax error, invalid logical names, cross-filter where relation does not exist, filter data not in list linked to field. Other errors are possible.
qccore.invalid-list-field-value	

Use of a value where the field values are limited to a project list, and the supplied value is not in the list. For example, attempt to set a defect status to "Dismissed" in a project where "Dismissed" is not a member of the status list.
qccore.invalid-value-type-for-field	Wrong value type for a field. For example, use of a string in an integer field.
qccore.lock-failure	Entity may already be locked. Other failure reasons are possible.
qccore.operation-forbidden	The logged-on user does not have privileges to perform the action.
qccore.required-field-missing	A POST operation failed because data was not passed for a required field.
qccore.session-has-expired	Session expired. See Session Management
qccore.undo-check-out-failure	Failure cancelling check-out.
qccore.unknown-field-name	At least one of the logical field names passed is not defined for the entity.

Handling:











Example JSON:
```json
{
	"Id" : "qccore.bulk-operation-failed",
	"Title" : "bulk operation failed. see exception properties for more info.",
	"ExceptionProperties" : [{
			"Name" : "qccore.bulk-operation-failed",
			"BulkValue" : {
				"BulkEntries" : [{
						"Entity" : {
							"Fields" : [{
									"Name" : "target-release",
									"values" : [{}

									]
								}, {
									"Name" : "has-attachments",
									"values" : [{}

									]
								}, {
									"Name" : "virtual-field",
									"values" : [{
											"value" : "0"
										}
									]
								}, {
									"Name" : "vc-checkout-comments",
									"values" : [{}

									]
								}, {
									"Name" : "opt-releases",
									"values" : []
								}, {
									"Name" : "vc-checkin-time",
									"values" : [{}

									]
								}, {
									"Name" : "vc-checkout-user-name",
									"values" : [{}

									]
								}, {
									"Name" : "status-multi",
									"values" : []
								}, {
									"Name" : "date",
									"values" : []
								}, {
									"Name" : "vc-checkout-date",
									"values" : []
								}, {
									"Name" : "subtype-invalid-field",
									"values" : [{}

									]
								}, {
									"Name" : "id",
									"values" : [{
											"value" : "1676"
										}
									]
								}, {
									"Name" : "sec-virtual-field",
									"values" : [{
											"value" : "0"
										}
									]
								}, {
									"Name" : "parent-name",
									"values" : [{
											"value" : "unknown"
										}
									]
								}, {
									"Name" : "yes-no-value",
									"values" : [{}

									]
								}, {
									"Name" : "priority",
									"values" : [{}

									]
								}, {
									"Name" : "description",
									"values" : [{}

									]
								}, {
									"Name" : "name",
									"values" : [{
											"value" : "name - 2011-11-06 10-41-31-944"
										}
									]
								}, {
									"Name" : "vc-status",
									"values" : [{}

									]
								}, {
									"Name" : "non-version-field",
									"values" : [{}

									]
								}, {
									"Name" : "vc-checkin-user-name",
									"values" : [{}

									]
								}, {
									"Name" : "vc-version-number",
									"values" : []
								}, {
									"Name" : "project-uid",
									"values" : [{}

									]
								}, {
									"Name" : "ref-addit-sample-entity",
									"values" : [{}

									]
								}, {
									"Name" : "hierarchical-path",
									"values" : [{
											"value" : "AIY"
										}
									]
								}, {
									"Name" : "vc-checkout-time",
									"values" : [{}

									]
								}, {
									"Name" : "created-by",
									"values" : [{
											"value" : "admin1"
										}
									]
								}, {
									"Name" : "creation-date",
									"values" : [{
											"value" : "2011-11-06"
										}
									]
								}, {
									"Name" : "vts",
									"values" : [{
											"value" : "2011-11-06 10:41:33"
										}
									]
								}, {
									"Name" : "opt-sample-entities",
									"values" : []
								}, {
									"Name" : "float-field",
									"values" : [{}

									]
								}, {
									"Name" : "vc-checkin-date",
									"values" : []
								}, {
									"Name" : "subtype-id",
									"values" : [{
											"value" : "hp.sample.fse.another-type"
										}
									]
								}, {
									"Name" : "parent-id",
									"values" : [{
											"value" : "0"
										}
									]
								}, {
									"Name" : "encrypted",
									"values" : [{}

									]
								}, {
									"Name" : "vc-checkin-comments",
									"values" : [{}

									]
								}, {
									"Name" : "ref-sample-entity",
									"values" : [{
											"value" : "1280"
										}
									]
								}, {
									"Name" : "ver-stamp",
									"values" : [{
											"value" : "1"
										}
									]
								}, {
									"Name" : "owner",
									"values" : [{
											"value" : "admin1"
										}
									]
								}, {
									"Name" : "third-virtual-field",
									"values" : [{
											"value" : "0"
										}
									]
								}, {
									"Name" : "text-sync",
									"values" : [{}

									]
								}, {
									"Name" : "filtered-project-uid",
									"values" : [{}

									]
								}
							],
							"Type" : "feature-sample-entity"
						},
						"Succeeded" : true,
						"EntityType" : "feature-sample-entity",
						"EntityId" : 1676
					}, {
						"Exception" : {
							"Id" : "qccore.general-error",
							"Title" : "",
							"ExceptionProperties" : [],
							"StackTrace" : "org.hp.qc.api.QcApiException: ...
						},
						"Succeeded" : false,
						"EntityType" : "feature-sample-entity",
						"EntityId" : null
					}
				]
			}
		}
	],
	"StackTrace" : "org.hp.qc.web.restapi.exceptions.BulkOperationException: bulk operation failed. ...