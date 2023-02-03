#Run against https://github.com/matthewreagan/WebstersEnglishDictionary/blob/master/dictionary.json
#Output is loadable into mongodb
import json

# Opening JSON file
with open('dictionary.json') as json_file:
	data = json.load(json_file)

newDict = []
tmpDict = {}
for x in data:
	tmpDict = dict({"word":x,"definition":data[x]})
	newDict.append(tmpDict)

with open("dictations.json", "w") as outfile:
	json.dump(newDict, outfile)
