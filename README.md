# SR_2 UI

Web interface fot SR2

[GitHub repo](https://github.com/Anton000111/SR2_UI)

Support additional metadata to simplify usage

You can view scripts and run it via web interface

## Installation

```bash
  npm i -g sr2 sr2_ui
```
[Link to the npm page of sr2](https://www.npmjs.com/package/sr2)
    
## Usage/Examples

To run SR2 with UI you need just to add `-u` flag:

`sr2 -u`

It opens page with web interface you can use for manipulation.

Default ports:
+ Server - **5001**
+ Client - **5000**

If you want to specify your own ports use:

`sr2 -u PORT=5001 UI_PORT=5000`


### Example with docker instalation instruction:

`sr2.json` file:
```json
{
  "__name": "Docker instalation instruction",
  "instalation": {
    "CentOS": {
      "remove old": {
        "__type": "command",
        "value": "sudo yum remove docker \\ docker-client \\ docker-client-latest \\ docker-common \\ docker-latest \\ docker-latest-logrotate \\ docker-logrotate \\ docker-engine",
        "description": "### Remove old versions of docker.\n*Before instalation.* [Original docker doc](https://docs.docker.com/engine/install/)"
      },
      "install": [
        "sudo yum install -y yum-utils",
        "sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo",
        "sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
      ],
      "start and verify": ["sudo systemctl start docker", "sudo docker run hello-world"]
    },
    "Ubuntu": {
      "remove old": "sudo apt-get remove docker docker-engine docker.io containerd runc",
      "install": [
        "sudo apt-get update", 
        "sudo apt-get install ca-certificates curl gnupg",
        "sudo install -m 0755 -d /etc/apt/keyrings",
        "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg",
        "sudo chmod a+r /etc/apt/keyrings/docker.gpg",
        "echo \\ \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\ \"$(. /etc/os-release && echo \"$VERSION_CODENAME\")\" stable\" | \\ sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
        "sudo apt-get update",
        "sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
      ],
      "start and verify": "sudo docker run hello-world"
    }
  },
  "post-instalation": {
    "create group and add user": ["sudo groupadd docker", "sudo usermod -aG docker $USER"],
    "run hello-world": "docker run hello-world"
  }
}
```

There are new meta values. `__name` allows to set name of the manual.

Also command can be an object value what allows to add description inside, to do this `__type` need to be specified.

Description support **markdown**

Result view:

![image](https://github.com/Anton000111/SR2_UI/assets/40431545/ed15a70c-8b7e-4a71-8d75-391285395654)

![image](https://github.com/Anton000111/SR2_UI/assets/40431545/4390019b-3e57-4930-93a7-686e01cd8fce)

![image](https://github.com/Anton000111/SR2_UI/assets/40431545/16aed1a9-a8e1-4cff-8cdb-d54963f866b0)

Click on Run button will execute a command and open output stream from your native console to the page.

![image](https://github.com/Anton000111/SR2_UI/assets/40431545/4325b179-2054-481f-992b-0438c38e78d2)
