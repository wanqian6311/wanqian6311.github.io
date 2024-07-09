import pandas as pd
import json

# 读取Excel文件
df = pd.read_excel('questions.xlsx')
df.columns = df.columns.astype(str)  # 将列名转换为字符串类型

# 将DataFrame转换为字典列表
data = []
for index, row in df.iterrows():
    id = str(row['id'])
    title = str(row['题目'])
    options = [row['选项A'], row['选项B'], row['选项C'], row['选项D']]
    answer = row['答案']
    options = [option for option in options if str(option) != 'nan']
    options = [str(option) for option in options]
    data.append({
        "id": id,
        "title": title,
        "options": options,
        "answer": answer
    })

# 将字典列表转换为JSON格式并保存到文件
with open('questions.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
