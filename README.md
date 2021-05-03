# profile-additions

A plugin for Salesforce DX CLI that provides ability to add Apex Classes, Visualforce Pages, Objects, and Fields to profiles. The motivation for the development of this plugin came from project work requiring these four (4) pieces of metadata needing to be added to, removed from, and edited in multiple profiles within a project space. Manually editing the profile metadata to accomplish this was error prone and time consuming to say the least. Naturally, this plugin could be expanded to accommodate other types of metadata.

## Setup

### **Install as plugin (Recommended approach for Installing)**

Install plugin using command : `sfdx plugins:install profile-additions`

### **Commands**

- [`sfdx profile:class:add`](#sfdx-profileclassadd)
- [`sfdx profile:class:delete`](#sfdx-profileclassdelete)
- [`sfdx profile:class:edit`](#sfdx-profileclassedit)
- [`sfdx profile:field:add`](#sfdx-profilefieldadd)
- [`sfdx profile:field:delete`](#sfdx-profilefielddelete)
- [`sfdx profile:field:edit`](#sfdx-profilefieldedit)
- [`sfdx profile:object:add`](#sfdx-profileobjectadd)
- [`sfdx profile:object:delete`](#sfdx-profiledobjectdelete)
- [`sfdx profile:object:edit`](#sfdx-profileobjectedit)
- [`sfdx profile:page:add`](#sfdx-profilepageadd)
- [`sfdx profile:page:delete`](#sfdx-profilepagedelete)
- [`sfdx profile:page:edit`](#sfdx-profilepageedit)

## `sfdx profile:class:add`

Adds Apex class to profiles.

```
USAGE
  $ sfdx profile:class:add

OPTIONS
  -n, --name=classname                  (required) the name of the Apex Class you want to add.

  -p, --profile=profilename             the name of the profile you want to add the class to. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the class will be added to all profiles in either the default location or the location provided by in the --filepath option.

  -e, --enabled                         [default: false] Enable Apex Class

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The Apex Class must already exist in the Salesforce org prior to deploying the profile or the command will fail.


EXAMPLES
    $ sfdx profile:class:add --name MyClass --profile "Admin" --enabled
    $ sfdx profile:class:add --name MyClass --enabled // Adds MyClass to all profiles
    $ sfdx profile:class:add --name MyClass --profile "Admin" --enabled --username <test@test.com> // Adds MyClass to Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/class/add.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/class/add.ts)_

## `sfdx profile:class:delete`

Removes Apex class from profiles.

```
USAGE
  $ sfdx profile:class:delete

OPTIONS
  -n, --name=classname                  (required) the name of the Apex Class you want to remove.

  -p, --profile=profilename             the name of the profile you want to remove the class from. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the class will be removed from all profiles in either the default location or the location provided by in the --filepath option.

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the class from the Salesforce org.


EXAMPLES
    $ sfdx profile:class:delete --name MyClass --profile "Admin" --enabled
    $ sfdx profile:class:delete --name MyClass // Removes MyClass from all profiles
    $ sfdx profile:class:delete --name MyClass --profile "Admin" --enabled --username <test@test.com> // Removes MyClass from Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/class/delete.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/class/delete.ts)_

## `sfdx profile:class:edit`

Edits an Apex class in profiles.

```
USAGE
  $ sfdx profile:class:edit

OPTIONS
  -n, --name=classname                  (required) the name of the Apex Class you want to edit. Only one Apex Class name is allowed.

  -r --rename=renameclassname           the name of the Apex Class you want to rename the class specified in --name to

  -p, --profile=profilename             the name of the profile you want to edit the class in. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the class will be edited in all profiles in either the default location or the location provided by in the --filepath option.

  -e, --enabled                         [default: false] Enable Apex Class

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the class from the Salesforce org.


EXAMPLES
    $ sfdx profile:class:edit --name MyClass --rename YourClass --profile "Admin" --enabled',
    $ sfdx profile:class:edit --name MyClass --rename YourClass --enabled // Edits MyClass in all profiles
    $ sfdx profile:class:edit --name MyClass --rename YourClass --profile "Admin" --enabled --username <test@test.com> // Edits MyClass in Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/class/edit.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/class/edit.ts)_

## `sfdx profile:field:add`

Adds field to profiles.

```
USAGE
  $ sfdx profile:field:add

OPTIONS
  -n, --name=fieldname                  (required) the name of the field you want to add. This should be a field name prefixed with the object name and separated by a dot.

  -p, --profile=profilename             the name of the profile you want to add the field to. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the field will be added to all profiles in either the default location or the location provided by in the --filepath option.

  -m, --permissions                     the permissions to assign the field: 'e' for editable and 'r' for readable

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The field must already exist in the Salesforce org prior to deploying the profile or the command will fail.


EXAMPLES
    $ sfdx profile:field:add --name MyField --profile "Admin" --permissions re'
    $ sfdx profile:field:add --name MyField --permissions re // Adds MyField to all profiles with both editable and readable set to true
    $ sfdx profile:field:add --name MyClass --profile "Admin" --permissions re --username <test@test.com> // Adds MyField to Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/field/add.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/field/add.ts)_

## `sfdx profile:field:delete`

Removes Apex class from profiles.

```
USAGE
  $ sfdx profile:field:delete

OPTIONS
  -n, --name=fieldname                  (required) the name of the field you want to remove.

  -p, --profile=profilename             the name of the profile you want to remove the field from. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the field will be removed from all profiles in either the default location or the location provided by in the --filepath option.

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the field from the Salesforce org.


EXAMPLES
    $ sfdx profile:field:delete --name MyObject.MyField --profile "Admin" --enabled
    $ sfdx profile:field:delete --name MyObject.MyField // Removes MyObject.MyField from all profiles
    $ sfdx profile:field:delete --name MyObject.MyField --profile "Admin" --enabled --username <test@test.com> // Removes MyObject.MyField from Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/field/delete.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/field/delete.ts)_

## `sfdx profile:field:edit`

Edits a field in profiles.

```
USAGE
  $ sfdx profile:field:edit

OPTIONS
  -n, --name=classname                  (required) the name of the field you want to edit. Only one field name is allowed.

  -r --rename=renamefieldname           the name of the field you want to rename the field specified in --name to

  -p, --profile=profilename             the name of the profile you want to edit the field in. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the field will be edited in all profiles in either the default location or the location provided by in the --filepath option.

  -m, --permissions                     the permissions to assign the field: 'e' for editable and 'r' for readable

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the field from the Salesforce org.


EXAMPLES
    $ sfdx profile:field:edit --name MyObject.MyField --rename MyObject.YourField --profile "Admin" --permissions re',
    $ sfdx profile:field:edit --name MyObject.MyField --rename MyObject.YourField --permissions re // Edits MyObject.MyField in all profiles
    $ sfdx profile:field:edit --name MyObject.MyField --rename MyObject.YourField --profile "Admin" --permissions re --username <test@test.com> // Edits MyObject.MyField in Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/field/edit.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/field/edit.ts)_

## `sfdx profile:object:add`

Adds object to profiles.

```
USAGE
  $ sfdx profile:object:add

OPTIONS
  -n, --name=objectname                 (required) the name of the object you want to add.

  -p, --profile=profilename             the name of the profile you want to add the object to. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the object will be added to all profiles in either the default location or the location provided by in the --filepath option.

  -m, --permissions                     the permissions to assign the object: 'c' for creatable, 'r' for readable, 'e' for editable, 'd' for deletable, 'm' for allow modify all, and 'v' for allow view all.

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The object must already exist in the Salesforce org prior to deploying the profile or the command will fail.


EXAMPLES
    $ sfdx profile:object:add --name MyObject --profile "Admin" --permissions credmv
    $ sfdx profile:object:add --name MyObject --permissions credmv
    $ sfdx profile:object:add --name MyObject --profile "Admin" --permissions credmv --username <test@test.com> // Adds MyObject to Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/object/add.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/object/add.ts)_

## `sfdx profile:object:delete`

Removes object from profiles.

```
USAGE
  $ sfdx profile:object:delete

OPTIONS
  -n, --name=objectname                 (required) the name of the object you want to remove.

  -p, --profile=profilename             the name of the profile you want to remove the object from. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the object will be removed from all profiles in either the default location or the location provided by in the --filepath option.

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the object from the Salesforce org.


EXAMPLES
    $ sfdx profile:object:delete --name MyObject --profile "Admin" --enabled
    $ sfdx profile:object:delete --name MyObject // Removes MyObject from all profiles
    $ sfdx profile:object:delete --name MyObject --profile "Admin" --enabled --username <test@test.com> // Removes MyObject from Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/object/delete.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/object/delete.ts)_

## `sfdx profile:object:edit`

Edits a object in profiles.

```
USAGE
  $ sfdx profile:object:edit

OPTIONS
  -n, --name=objectname                 (required) the name of the object you want to edit. Only one object name is allowed.

  -r --rename=renameobjectname          the name of the object you want to rename the object specified in --name to

  -p, --profile=profilename             the name of the profile you want to edit the object in. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the object will be edited in all profiles in either the default location or the location provided by in the --filepath option.

  -m, --permissions                     the permissions to assign the object: 'c' for creatable, 'r' for readable, 'e' for editable, 'd' for deletable, 'm' for allow modify all, and 'v' for allow view all.

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the object from the Salesforce org.


EXAMPLES
    $ sfdx profile:object:edit --name MyObject --rename MyObject --profile "Admin" --permissions credmv',
    $ sfdx profile:object:edit --name MyObject --rename MyObject --permissions credmv // Edits MyObject in all profiles
    $ sfdx profile:object:edit --name MyObject --rename MyObject --profile "Admin" --permissions credmv --username <test@test.com> // Edits MyObject in Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/object/edit.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/object/edit.ts)_

## `sfdx profile:page:add`

Adds Visualforce Page to profiles.

```
USAGE
  $ sfdx profile:page:add

OPTIONS
  -n, --name=pagename                   (required) the name of the Visualforce Page you want to add.

  -p, --profile=profilename             the name of the profile you want to add the page to. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the page will be added to all profiles in either the default location or the location provided by in the --filepath option.

  -e, --enabled                         [default: false] Enable Visualforce Page

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The Visualforce Page must already exist in the Salesforce org prior to deploying the profile or the command will fail.


EXAMPLES
    $ sfdx profile:page:add --name MyPage --profile "Admin" --enabled
    $ sfdx profile:page:add --name MyPage --enabled // Adds MyPage to all profiles
    $ sfdx profile:page:add --name MyPage --profile "Admin" --enabled --username <test@test.com> // Adds MyPage to Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/page/add.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/page/add.ts)_

## `sfdx profile:page:delete`

Removes Visualforce Page from profiles.

```
USAGE
  $ sfdx profile:page:delete

OPTIONS
  -n, --name=pagename                   (required) the name of the Visualforce Page you want to remove.

  -p, --profile=profilename             the name of the profile you want to remove the page from. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the page will be removed from all profiles in either the default location or the location provided by in the --filepath option.

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the page from the Salesforce org.


EXAMPLES
    $ sfdx profile:page:delete --name MyPage --profile "Admin" --enabled
    $ sfdx profile:page:delete --name MyPage // Removes MyPage from all profiles
    $ sfdx profile:page:delete --name MyPage --profile "Admin" --enabled --username <test@test.com> // Removes MyPage from Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/page/delete.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/page/delete.ts)_

## `sfdx profile:page:edit`

Edits a Visualforce Page in profiles.

```
USAGE
  $ sfdx profile:page:edit

OPTIONS
  -n, --name=pagename                   (required) the name of the Visualforce Page you want to edit. Only one Visualforce Page name is allowed.

  -r --rename=renamepagename            the name of the Visualforce Page you want to rename the page specified in --name to

  -p, --profile=profilename             the name of the profile you want to edit the page in. This can be a comma separated list of profile names. Note: if a profile name has a space in the name, the name should be enclosed in quotes. If this flag is not specified, the assumption is that the page will be edited in all profiles in either the default location or the location provided by in the --filepath option.

  -e, --enabled                         [default: false] Enable Visualforce Page

  -f, --filepath=filepath               [default: force-app/main/default/profiles] filepath to the location of the profiles

  -u, --username=username               the username or alias of the Salesforce org you want to deploy the profiles to. Note: The command does actually remove the page from the Salesforce org.


EXAMPLES
    $ sfdx profile:page:edit --name MyPage --rename YourPage --profile "Admin" --enabled',
    $ sfdx profile:page:edit --name MyPage --rename YourPage --enabled // Edits MyPage in all profiles
    $ sfdx profile:page:edit --name MyPage --rename YourPage --profile "Admin" --enabled --username <test@test.com> // Edits MyPage in Admin profile and deploys profile to org with username test@test.com
```

_See code: [src/commands/profile/page/edit.ts](https://github.com/seanrussell/profile-plugin/blob/main/src/commands/profile/page/edit.ts)_
