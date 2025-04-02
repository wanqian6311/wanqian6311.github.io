"""
Author: wanqian6311
Version: 1.0.2
Date: 2024-10-08
Description: 该程序用于提取和发送 SSR 链接。
"""

import os
import sys
import importlib
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests
import re
from prettytable import PrettyTable
from smtplib import SMTPAuthenticationError, SMTPException


def find_ssr_links(url):
    """从指定 URL 提取 SSR 链接并以表格方式美化输出"""
    try:
        response = requests.get(url, timeout=10)
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

    if response.status_code != 200:
        print(f"无法访问网站: {url}")
        return []

    # 使用正则表达式查找所有 ssr:// 链接
    ssr_links = re.findall( r'ssr://[a-zA-Z0-9_]+', response.text)

    # 使用 PrettyTable 美化输出
    if not ssr_links:
        print("没有找到 SSR 链接。")
        return []

    table = PrettyTable(["Index", "SSR Link"])
    for i, link in enumerate(ssr_links, 1):
        table.add_row([i, link])

    print(table)

    return ssr_links

def find_ss_links(url):
    """从指定 URL 提取 SS 链接并以表格方式美化输出"""
    try:
        response = requests.get(url, timeout=10)
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

    if response.status_code != 200:
        print(f"无法访问网站: {url}")
        return []

    # 使用正则表达式查找所有 ss:// 链接
    ss_links = re.findall( r'ss://[a-zA-Z0-9@%.#:]+', response.text)

    # 使用 PrettyTable 美化输出
    if not ss_links:
        print("没有找到 SS 链接。")
        return []

    table = PrettyTable(["Index", "SS Link"])
    for i, link in enumerate(ss_links, 1):
        table.add_row([i, link])

    print(table)

    return ss_links


def find_vmess_links(url):
    """从指定 URL 提取 VMESS 链接并以表格方式美化输出"""
    try:
        response = requests.get(url, timeout=10)
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return []

    if response.status_code != 200:
        print(f"无法访问网站: {url}")
        return []

    # 使用正则表达式查找所有 vmess:// 链接
    vmess_links = re.findall(r'vmess://[a-zA-Z0-9_=]+', response.text)

    # 使用 PrettyTable 美化输出
    if not vmess_links:
        print("没有找到 VMESS 链接。")
        return []

    table = PrettyTable(["Index", "VMESS Link"])
    for i, link in enumerate(vmess_links, 1):
        table.add_row([i, link])

    print(table)

    return vmess_links



def send_email(subject, body, to_email, from_email, password):
    """发送邮件"""
    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain', 'utf-8'))

    # 发送邮件
    try:
        with smtplib.SMTP('smtp.163.com', 25) as server:
            server.starttls()
            server.login(from_email, password)
            server.send_message(msg)
            print("邮件发送成功！")
    except SMTPAuthenticationError:
        print("认证失败，请检查邮箱和密码是否正确。")
    except SMTPException as e:
        print(f"邮件发送失败: {e}")


if __name__ == "__main__":

    # 目标 URL
    target_ss_url = "https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    target_vmess_url = "https://github.com/Alvin9999/new-pac/wiki/v2ray%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7"
    ssr_links = find_ssr_links(target_ss_url)
    ss_links = find_ss_links(target_ss_url)
    vmess_links = find_vmess_links(target_vmess_url)
    ssr_ss_vmess_links = ["ssr_ss_vmess链接:"]
    ssr_ss_vmess_links.append('\n\n'.join(ssr_links))
    ssr_ss_vmess_links.append('\n\n'.join(ss_links))
    ssr_ss_vmess_links.append('\n\n'.join(vmess_links))

    # 打印找到的链接
    if ssr_ss_vmess_links :


        # 邮件相关信息
        subject = "ssr_ss_vmess_link"
        body = '\n-------------\n'.join(ssr_ss_vmess_links)  # 将链接列表转换为字符串
        to_email = os.getenv('EMAIL_TO_USER')
        from_email = os.getenv('EMAIL_FROM_USER')
        # 安全处理密码，确保通过环境变量读取
        password = os.getenv('EMAIL_PASSWORD')
        

        # 发送邮件
        send_email(subject, body, to_email, from_email, password)
    else:
        print("未找到任何链接，邮件未发送。")
