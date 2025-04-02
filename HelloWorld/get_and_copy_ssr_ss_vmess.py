"""
Author: wanqian6311
Version: 1.0.1
Date: 2024-09-13
Description: 该程序用于提取和显示 SSR 和 SS 链接。
"""

import os  # 提供与操作系统交互的功能，如文件和目录操作
import sys  # 提供对 Python 解释器的访问，允许与解释器进行交互
import subprocess  # 允许生成子进程并与其交互
import importlib  # 提供动态导入模块的功能

def check_and_install(package):
    """检查并安装缺失的包"""
    try:
        importlib.import_module(package)
    except ImportError:
        print(f"未找到 {package}，正在安装...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# 检查并安装所需的包
required_packages = [
    "requests",
    "beautifulsoup4",
    "pyperclip",
    "colorama",
    "prettytable"
]

for package in required_packages:
    check_and_install(package)

# 现在安全地导入这些包
import requests  # 用于发送 HTTP 请求，获取网页内容
import re  # 提供正则表达式支持，用于字符串匹配和处理
import pyperclip  # 用于复制文本到剪贴板
from colorama import init, Fore  # 用于在终端中输出带颜色的文本，init() 初始化，Fore 提供前景色
from prettytable import PrettyTable  # 用于创建和打印美观的表格
from bs4 import BeautifulSoup  # 用于解析 HTML 和 XML 文档，方便提取数据

# 初始化 Colorama
init(autoreset=True)

def set_pip_source():
    # 确定用户目录
    if os.name == 'nt':  # Windows
        pip_config_path = os.path.join(os.path.expanduser('~'), 'pip', 'pip.ini')
        os.makedirs(os.path.dirname(pip_config_path), exist_ok=True)
        with open(pip_config_path, 'w') as f:
            f.write("[global]\n")
            f.write("index-url = https://pypi.tuna.tsinghua.edu.cn/simple\n")
    else:  # Linux 和 macOS
        pip_config_path = os.path.join(os.path.expanduser('~'), '.pip', 'pip.conf')
        os.makedirs(os.path.dirname(pip_config_path), exist_ok=True)
        with open(pip_config_path, 'w') as f:
            f.write("[global]\n")
            f.write("index-url = https://pypi.tuna.tsinghua.edu.cn/simple\n")

def print_info():
    # 打印美化后的信息
    print("╔═════════════════════════════════════════════════════════════╗")
    print("║  ✨ Author: wanqian6311                                     ║")
    print("╠═════════════════════════════════════════════════════════════╣")
    print("║  📖 Blog: https://www.cnblogs.com/wanqian6311               ║")
    print("╠═════════════════════════════════════════════════════════════╣")
    print("║  🐙 GitHub: https://www.github/wanqian6311                  ║")
    print("╠═════════════════════════════════════════════════════════════╣")
    print("║  🌟 email: wanqian6311@163.com                              ║")
    print("╚═════════════════════════════════════════════════════════════╝")

def test_url_accessibility(url):
    """测试 URL 的可访问性"""
    try:
        response = requests.head(url, allow_redirects=True)  # 使用 HEAD 请求以减少带宽
        return response.status_code == 200
    except requests.RequestException as e:
        print(Fore.RED + f"请求错误: {e}")
        return False

def find_ss_links(url):
    """从指定 URL 提取 SSR 和 SS 链接及更新时间"""
    # 发送请求
    if not test_url_accessibility(url):
        print(Fore.RED + f"无法访问网站: {url}")
        return [], None  # 返回 None 作为更新时间

    response = requests.get(url)
    if response.status_code != 200:
        print(Fore.RED + f"无法访问网站: {url}")
        return [], None  # 返回 None 作为更新时间

    # 解析网页内容
    soup = BeautifulSoup(response.text, 'html.parser')

    # 使用正则表达式查找所有 ssr:// 和 ss:// 链接
    ssr_pattern = r'ssr://[a-zA-Z0-9_]+'
    ss_pattern = r'ss://[a-zA-Z0-9@%.#:]+'
    ss_last_modified_time =  r'北京时间[0-9年月日点时分]+'


    ssr_matches = re.findall(ssr_pattern, response.text)
    ss_matches = re.findall(ss_pattern, response.text)
    ss_last_modified_time_matches = re.findall(ss_last_modified_time, response.text)
   

    # 限制提取的链接长度
    # ssr_links = [(link[:174]) for link in ssr_matches]
    # ss_links = [(link[:110]) for link in ss_matches]
    #last_modified_time_links = [(link[4:19]) for link in last_modified_time_matches]

    return ssr_matches, ss_matches, ss_last_modified_time_matches, url


def find_vmess_links(url):
    """从指定 URL 提取 SSR 和 SS 链接及更新时间"""
    # 发送请求
    if not test_url_accessibility(url):
        print(Fore.RED + f"无法访问网站: {url}")
        return [], None  # 返回 None 作为更新时间

    response = requests.get(url)
    if response.status_code != 200:
        print(Fore.RED + f"无法访问网站: {url}")
        return [], None  # 返回 None 作为更新时间

    # 解析网页内容
    soup = BeautifulSoup(response.text, 'html.parser')

    # 使用正则表达式查找所有vmess://链接
    vmess_pattern = r'vmess://[a-zA-Z0-9_=]+'
    vmess_last_modified_time = r'北京时间[0-9年月日点时分]+'

    vmess_matches = re.findall(vmess_pattern, response.text)

    vmess_last_modified_time_matches = re.findall(vmess_last_modified_time, response.text)


    return vmess_matches, vmess_last_modified_time_matches



def display_links(ssr_links, ss_links, ss_last_modified_time, vmess_links, vmess_last_modified_time):
    """显示 SSR 和 SS 链接及其更新时间的表格"""
    # 创建表格
    table = PrettyTable()
    table.field_names = ["序号", "类型", "链接", "更新时间"]

    # 设置列宽，启用自动换行
    table.max_width["序号"] = 2  # 设置最大宽度为2字符
    table.max_width["链接"] = 60  # 设置最大宽度为60字符
  

    # 设置时间格式
    #time1 =  ss_last_modified_time
    #time2 =  vmess_last_modified_time
    time1 = [(link[4:]) for link in ss_last_modified_time]
    time2 = [(link[4:]) for link in vmess_last_modified_time]

    # 添加 SSR 链接
    for i, link in enumerate(ssr_links, start=1):
        table.add_row([i, "SSR", link, time1])
        # 添加分割线
        table.add_row(["----", "--------", "------------------------------------------------------------", "------------------------"])

    

    # 添加 SS 链接
    start_index1 = len(ssr_links) + 1  # SS 链接的起始序号
    for i, link in enumerate(ss_links, start=start_index1):
        table.add_row([i, "SS", link, time1])
        # 添加分割线
        table.add_row(["----", "--------", "------------------------------------------------------------", "------------------------"])

     # 添加 vmess 链接
    start_index2 = len(ssr_links) + len(ss_links) + 1  #  链接的起始序号
    for i, link in enumerate(vmess_links, start=start_index2):
        table.add_row([i, "Vmess", link, time2])


    # 调用函数以打印信息
    print_info()
    print(table)

if __name__ == "__main__":
    set_pip_source()
    
    target_url_01 = "https://gitlab.com/zhifan999/fq/-/wikis/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    target_url_02 = "https://fgithub.xyz/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    target_url_03 = "https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    target_url_vmess = "https://gitlab.com/zhifan999/fq/-/wikis/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    target_url = target_url_01
    # 查找 ssr:// 和 ss:// 链接及更新时间
    ssr_links, ss_links, ss_last_modified_time, url = find_ss_links(target_url)
    
    vmess_links, vmess_last_modified_time = find_vmess_links(target_url_vmess)

    # 显示链接
    display_links(ssr_links, ss_links, ss_last_modified_time, vmess_links, vmess_last_modified_time)
    
    # 让用户选择要复制的链接
    while True:
        choice = input(Fore.CYAN + "输入序号选择要复制的链接，输入 0 退出: ")
        
        if choice.isdigit():
            if choice == "0":
                break  # 用户输入 0 时退出

            index = int(choice) - 1
            
            if 0 <= index < len(ssr_links):
                pyperclip.copy(ssr_links[index])  # 复制链接
                print(Fore.GREEN + f"已复制 ssr:// 链接: {ssr_links[index]}")
            elif len(ssr_links) <= index < len(ssr_links) + len(ss_links):
                ss_index = index - len(ssr_links)
                pyperclip.copy(ss_links[ss_index])  # 复制链接
                print(Fore.GREEN + f"已复制 ss:// 链接: {ss_links[ss_index]}")
            elif len(ssr_links) + len(ss_links) <= index < len(ssr_links) + len(ss_links)+ len(vmess_links):
                vmess_index = index - len(ssr_links)-len(ssr_links)
                pyperclip.copy(vmess_links[vmess_index])  # 复制链接
                print(Fore.GREEN + f"已复制 vmess:// 链接: {vmess_links[vmess_index]}")
            else:
                print(Fore.RED + "无效的选择，请重新输入。")
        else:
            print(Fore.RED + "无效的输入，请输入一个数字。")

    print(Fore.CYAN + "程序结束，按任意键退出...")
    input()  # 保持终端打开

